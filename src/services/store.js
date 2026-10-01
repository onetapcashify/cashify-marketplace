import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, serverTimestamp, setDoc, runTransaction, increment, onSnapshot } from 'firebase/firestore';
import { db, auth, isFirebaseConfigured } from '../firebase/config.js';
import { load,save } from '../utils/localStore.js';

export const collectionNameForModule=(module)=>module.toLowerCase().replaceAll(' ','_').replaceAll('&','and');
export async function listCollection(name) { if (!isFirebaseConfigured) return []; const snap=await getDocs(collection(db,name)); return snap.docs.map(d=>({id:d.id,...d.data()})); }
export async function createRecord(name,payload) { if(!isFirebaseConfigured)return{id:crypto.randomUUID(),...payload}; const ref=await addDoc(collection(db,name),{...payload,createdAt:serverTimestamp(),updatedAt:serverTimestamp()});return{id:ref.id,...payload}; }
export async function updateRecord(name,id,payload) { if(!isFirebaseConfigured)return; await updateDoc(doc(db,name,id),{...payload,updatedAt:serverTimestamp()}); }
export async function deleteRecord(name,id) { if(!isFirebaseConfigured)return; await deleteDoc(doc(db,name,id)); }
export async function syncModuleRows(module,rows){
  const key=`admin:${module}`; save(key,rows);
  if(!isFirebaseConfigured) return;
  const col=collectionNameForModule(module);
  const existing=await getDocs(collection(db,col)); const wanted=new Set(rows.map(r=>String(r.id)));
  await Promise.all(existing.docs.filter(d=>!wanted.has(d.id)).map(d=>deleteDoc(d.ref)));
  await Promise.all(rows.map(r=>setDoc(doc(db,col,String(r.id)),{...r,updatedAt:serverTimestamp()},{merge:true})));
}
export async function upsertModuleRecord(module,row){
  const key=`admin:${module}`; const rows=load(key,[]); const next=rows.some(x=>x.id===row.id)?rows.map(x=>x.id===row.id?{...x,...row}:x):[row,...rows]; save(key,next);
  if(isFirebaseConfigured){try{await setDoc(doc(db,collectionNameForModule(module),String(row.id)),{...row,updatedAt:serverTimestamp()},{merge:true})}catch(e){console.warn(`${module} sync failed`,e)}}
  return row;
}

export async function loadModuleRows(module,fallback=[]){
  const key=`admin:${module}`;
  if(isFirebaseConfigured){try{const rows=await listCollection(collectionNameForModule(module));if(rows.length){save(key,rows);return rows}}catch(e){console.warn('Firestore read failed',e)}}
  const local=load(key,null); if(local!==null)return local; if(Array.isArray(fallback)&&fallback.length)save(key,fallback); return fallback;
}

export function subscribeModuleRows(module,fallback,onRows){
  const key=`admin:${module}`;
  if(isFirebaseConfigured){
    const col=collectionNameForModule(module);
    const unsub=onSnapshot(collection(db,col),snap=>{const rows=snap.docs.map(d=>({id:d.id,...d.data()}));if(rows.length){save(key,rows);onRows(rows)}else{const local=load(key,null);onRows(local!==null?local:fallback)}},err=>{console.warn('Firestore subscription failed',err);onRows(load(key,fallback))});
    return unsub;
  }
  onRows(load(key,fallback));
  const handler=e=>{if(!e.detail?.key||e.detail.key===key)onRows(load(key,fallback))};
  const storage=e=>{if(!e.key||e.key===key)onRows(load(key,fallback))};
  window.addEventListener('app-data-change',handler);window.addEventListener('storage',storage);
  return()=>{window.removeEventListener('app-data-change',handler);window.removeEventListener('storage',storage)};
}

export async function getCoupon(code){
  const normalized=code.trim().toUpperCase();
  if(isFirebaseConfigured){try{const snap=await getDocs(collection(db,'coupons'));const row=snap.docs.map(d=>({id:d.id,...d.data()})).find(x=>(x.code||x.name||x.id||'').toUpperCase()===normalized);return row||null}catch(e){console.warn(e)}}
  const coupons=load('admin:Coupons',[]); return coupons.find(x=>(x.code||x.name||x.id||'').toUpperCase()===normalized)||null;
}

export async function claimCoupon(code,userKey){
  const normalized=code.trim().toUpperCase();
  if(isFirebaseConfigured && auth?.currentUser){
    const ref=doc(db,'coupons',normalized); const claimRef=doc(db,'coupon_claims',`${normalized}__${userKey.replace(/[^a-zA-Z0-9_-]/g,'_')}`);
    return runTransaction(db,async tx=>{const snap=await tx.get(ref);const prior=await tx.get(claimRef);let c;let isNew=false;if(!snap.exists()){if(normalized!=='SEQ88')throw new Error('Invalid coupon code.');c={id:'SEQ88',code:'SEQ88',name:'SEQ88',status:'Active',discountType:'percentage',discountValue:88,claimLimit:10,perUserLimit:1,usedCount:0};isNew=true;}else c={id:snap.id,...snap.data()};if(c.status!=='Active')throw new Error('This coupon is inactive.');const limit=Number(c.claimLimit||c.usageLimit||0);const used=Number(c.usedCount||0);if(limit>0&&used>=limit)throw new Error('This coupon has reached its claim limit.');const perUser=Number(c.perUserLimit||1);if(prior.exists()&&Number(prior.data().count||0)>=perUser)throw new Error('You have already used this coupon.');if(isNew)tx.set(ref,{...c,usedCount:1,updatedAt:serverTimestamp()});else tx.update(ref,{usedCount:increment(1),updatedAt:serverTimestamp()});tx.set(claimRef,{coupon:normalized,userKey,count:increment(1),updatedAt:serverTimestamp()},{merge:true});return c;});
  }
  const coupons=load('admin:Coupons',[]);const c=coupons.find(x=>(x.code||x.name||'').toUpperCase()===normalized&&x.status==='Active');if(!c)throw new Error('Invalid or inactive coupon code.');const claims=load('couponClaims',{});const item=claims[normalized]||{total:0,users:{}};const limit=Number(c.claimLimit||c.usageLimit||0);const perUser=Number(c.perUserLimit||1);if(limit>0&&item.total>=limit)throw new Error('This coupon has reached its claim limit.');if((item.users[userKey]||0)>=perUser)throw new Error('You have already used this coupon.');item.total++;item.users[userKey]=(item.users[userKey]||0)+1;claims[normalized]=item;c.usedCount=Number(c.usedCount||0)+1;save('couponClaims',claims);save('admin:Coupons',coupons);return c;
}
