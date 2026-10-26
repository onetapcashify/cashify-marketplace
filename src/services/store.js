import {
  initializeApp,
  getApps,
  getApp
} from 'firebase/app';

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  runTransaction,
  serverTimestamp
} from 'firebase/firestore';

const firebaseConfig={
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID
};

const firebaseReady=
  Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );

const app=
  firebaseReady
    ?(getApps().length?getApp():initializeApp(firebaseConfig))
    :null;

const db=
  app
    ?getFirestore(app)
    :null;

const moduleKey=name=>
  String(name||'')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-|-$/g,'');

const rowId=row=>
  String(
    row?.id||
    row?.code||
    row?.name||
    `row-${Date.now()}`
  );

const localKey=name=>
  `admin:${name}`;

const readLocal=(name,fallback=[])=>{
  try{
    const raw=localStorage.getItem(localKey(name));
    if(raw===null) return fallback;
    const parsed=JSON.parse(raw);
    return Array.isArray(parsed)?parsed:fallback;
  }catch{
    return fallback;
  }
};

const writeLocal=(name,rows)=>{
  try{
    localStorage.setItem(
      localKey(name),
      JSON.stringify(rows)
    );
  }catch{}
};

const rowsCollection=name=>
  collection(
    db,
    'adminModules',
    moduleKey(name),
    'rows'
  );

const rowDocument=(name,id)=>
  doc(
    db,
    'adminModules',
    moduleKey(name),
    'rows',
    String(id)
  );

/*
  Load shared module data.

  IMPORTANT:
  - Firestore is the source of truth whenever configured.
  - Seed/local data is used only when the shared collection is empty.
  - Local storage is only a cache, never the cross-device database.
*/
export async function loadModuleRows(name,seeds=[]){

  if(!db){
    return readLocal(name,seeds);
  }

  try{
    const snap=
      await getDocs(
        rowsCollection(name)
      );

    if(!snap.empty){
      const rows=
        snap.docs.map(d=>({
          ...d.data(),
          id:d.data()?.id||d.id
        }));

      writeLocal(name,rows);
      return rows;
    }

    /*
      If the shared collection is empty, show seeds only as UI defaults.
      Do NOT write them automatically from a customer browser.
      The Admin panel becomes the authoritative creator/editor.
    */
    return Array.isArray(seeds)?seeds:[];

  }catch(error){
    console.error(
      `[store] loadModuleRows(${name})`,
      error
    );

    /*
      Do not silently make another device look valid with
      stale local data. Return local cache only as UI fallback.
    */
    return readLocal(name,seeds);
  }
}


/*
  Realtime subscription used by storefront + admin.
*/
export function subscribeModuleRows(
  name,
  seeds=[],
  callback
){

  if(!db){
    callback?.(
      readLocal(name,seeds)
    );
    return ()=>{};
  }

  const ref=
    rowsCollection(name);

  return onSnapshot(
    ref,
    snap=>{

      if(snap.empty){
        callback?.(seeds);
        return;
      }

      const rows=
        snap.docs.map(d=>({
          ...d.data(),
          id:d.data()?.id||d.id
        }));

      writeLocal(name,rows);
      callback?.(rows);

    },
    error=>{
      console.error(
        `[store] subscribeModuleRows(${name})`,
        error
      );

      callback?.(
        readLocal(name,seeds)
      );
    }
  );
}


/*
  Synchronize a complete admin module.

  This is used by AdminPage after create/edit/delete.
*/
export async function syncModuleRows(
  name,
  rows=[]
){

  writeLocal(name,rows);

  if(!db){
    throw new Error(
      'Firebase is not configured. Admin changes cannot be shared across devices.'
    );
  }

  const current=
    await getDocs(
      rowsCollection(name)
    );

  const wanted=
    new Set(
      rows.map(row=>rowId(row))
    );

  const writes=
    rows.map(row=>
      setDoc(
        rowDocument(name,rowId(row)),
        {
          ...row,
          id:rowId(row),
          updatedAt:serverTimestamp()
        },
        {merge:false}
      )
    );

  const deletes=
    current.docs
      .filter(d=>!wanted.has(d.id))
      .map(d=>
        deleteDoc(
          rowDocument(name,d.id)
        )
      );

  await Promise.all([
    ...writes,
    ...deletes
  ]);

  return rows;
}


/*
  Upsert one shared record.
  Checkout uses this for Orders and Payments.
*/
export async function upsertModuleRecord(
  name,
  record
){

  if(!record){
    throw new Error(
      'Missing record.'
    );
  }

  const id=
    rowId(record);

  if(!db){
    throw new Error(
      'Firebase is not configured. This record cannot be shared across devices.'
    );
  }

  await setDoc(
    rowDocument(name,id),
    {
      ...record,
      id,
      updatedAt:serverTimestamp()
    },
    {merge:true}
  );

  /*
    Keep current browser cache in sync too.
  */
  const existing=
    readLocal(name,[]);

  const next=
    existing.some(x=>String(x.id)===id)
      ?existing.map(x=>
          String(x.id)===id
            ?{...x,...record,id}
            :x
        )
      :[
          { ...record,id },
          ...existing
        ];

  writeLocal(name,next);

  return {
    ...record,
    id
  };
}


/*
  Global coupon claim.

  Coupon definition and usedCount live in Firestore, so claim limits
  are shared across every browser/device.

  Per-user usage is stored at:
  couponClaims/{COUPON_CODE}/users/{userKey}
*/
export async function claimCoupon(
  couponCode,
  userKey
){

  if(!db){
    throw new Error(
      'Firebase is not configured. Coupon usage cannot be validated globally.'
    );
  }

  const code=
    String(couponCode||'')
      .trim()
      .toUpperCase();

  if(!code){
    throw new Error(
      'Invalid coupon code.'
    );
  }

  const couponRef=
    rowDocument(
      'Coupons',
      code
    );

  const safeUserKey=
    encodeURIComponent(
      String(userKey||'guest')
    )
      .replace(/\./g,'%2E');

  const claimRef=
    doc(
      db,
      'couponClaims',
      code,
      'users',
      safeUserKey
    );

  await runTransaction(
    db,
    async transaction=>{

      const couponSnap=
        await transaction.get(
          couponRef
        );

      if(!couponSnap.exists()){
        throw new Error(
          'Coupon is no longer available.'
        );
      }

      const coupon=
        couponSnap.data();

      if(coupon.status!=='Active'){
        throw new Error(
          'Coupon is inactive.'
        );
      }

      const usedCount=
        Number(
          coupon.usedCount||0
        );

      const claimLimit=
        Number(
          coupon.claimLimit||0
        );

      if(
        claimLimit>0 &&
        usedCount>=claimLimit
      ){
        throw new Error(
          'This coupon has reached its claim limit.'
        );
      }

      const claimSnap=
        await transaction.get(
          claimRef
        );

      const userUsed=
        Number(
          claimSnap.exists()
            ?claimSnap.data()?.count||0
            :0
        );

      const perUserLimit=
        Number(
          coupon.perUserLimit||1
        );

      if(
        perUserLimit>0 &&
        userUsed>=perUserLimit
      ){
        throw new Error(
          'You have already used this coupon.'
        );
      }

      transaction.set(
        couponRef,
        {
          ...coupon,
          id:coupon.id||code,
          usedCount:usedCount+1,
          updatedAt:serverTimestamp()
        },
        {merge:true}
      );

      transaction.set(
        claimRef,
        {
          count:userUsed+1,
          userKey:String(userKey||'guest'),
          updatedAt:serverTimestamp()
        },
        {merge:true}
      );

    }
  );

  return true;
}


/*
  Optional helper for diagnostics.
*/
export function isSharedStoreReady(){
  return Boolean(db);
}
