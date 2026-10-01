import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth, db, isFirebaseConfigured } from './config.js';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { load, save } from '../utils/localStore.js';

const LOCAL_USER_KEY='user';
const ADMIN_SESSION_KEY='adminSession';
export const ADMIN_EMAIL='onetapcashify@gmail.com';
export const DEFAULT_ADMIN_PASSWORD=import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@123';


async function recordUser(user){
  const rows=load('admin:Users',[]); const rec={id:user.uid,name:user.name||'Customer',status:'Active',value:user.email||'',notes:user.provider||'password'}; const next=rows.some(x=>x.id===rec.id)?rows.map(x=>x.id===rec.id?{...x,...rec}:x):[rec,...rows]; save('admin:Users',next);
  if(db&&isFirebaseConfigured){try{await setDoc(doc(db,'users',String(user.uid)),{...rec,updatedAt:serverTimestamp()},{merge:true})}catch(e){console.warn('User profile sync failed',e)}}
  return user;
}

export function getLocalUser(){ return load(LOCAL_USER_KEY,null); }
export function getAdminSession(){ return load(ADMIN_SESSION_KEY,null); }

export function subscribeAuth(callback){
  if(auth && isFirebaseConfigured){
    return onAuthStateChanged(auth,(u)=>{
      const user=u?{uid:u.uid,name:u.displayName||u.email?.split('@')[0]||'Customer',email:u.email||'',photoURL:u.photoURL||'',provider:u.providerData?.[0]?.providerId||'password'}:null;
      if(user) save(LOCAL_USER_KEY,user); else localStorage.removeItem(LOCAL_USER_KEY);
      window.dispatchEvent(new Event('app-auth-change'));
      callback(user);
    });
  }
  callback(getLocalUser());
  const handler=()=>callback(getLocalUser());
  window.addEventListener('app-auth-change',handler);
  window.addEventListener('storage',handler);
  return ()=>{window.removeEventListener('app-auth-change',handler);window.removeEventListener('storage',handler)};
}

export async function loginCustomer(email,password){
  if(auth && isFirebaseConfigured){
    const cred=await signInWithEmailAndPassword(auth,email,password);
    return recordUser({uid:cred.user.uid,name:cred.user.displayName||email.split('@')[0],email:cred.user.email||email,photoURL:cred.user.photoURL||'',provider:'password'});
  }
  const accounts=load('customerAccounts',[]);
  const found=accounts.find(x=>x.email.toLowerCase()===email.toLowerCase() && x.password===password);
  if(!found) throw new Error('Invalid email or password. Create an account first.');
  const user={uid:found.uid,name:found.name,email:found.email,photoURL:'',provider:'password'}; save(LOCAL_USER_KEY,user); await recordUser(user); window.dispatchEvent(new Event('app-auth-change')); return user;
}

export async function registerCustomer(name,email,password){
  if(auth && isFirebaseConfigured){
    const cred=await createUserWithEmailAndPassword(auth,email,password); await updateProfile(cred.user,{displayName:name});
    return recordUser({uid:cred.user.uid,name,email:cred.user.email||email,photoURL:'',provider:'password'});
  }
  const accounts=load('customerAccounts',[]);
  if(accounts.some(x=>x.email.toLowerCase()===email.toLowerCase())) throw new Error('An account already exists with this email.');
  const user={uid:`local-${Date.now()}`,name,email,photoURL:'',provider:'password'};
  accounts.push({...user,password}); save('customerAccounts',accounts); save(LOCAL_USER_KEY,user); await recordUser(user); window.dispatchEvent(new Event('app-auth-change')); return user;
}

export async function loginWithGoogle(){
  if(auth && isFirebaseConfigured){
    const provider=new GoogleAuthProvider(); const cred=await signInWithPopup(auth,provider);
    return recordUser({uid:cred.user.uid,name:cred.user.displayName||'Customer',email:cred.user.email||'',photoURL:cred.user.photoURL||'',provider:'google'});
  }
  throw new Error('Google login becomes active after Firebase configuration is added.');
}

export async function logoutCustomer(){
  if(auth && isFirebaseConfigured) await signOut(auth);
  localStorage.removeItem(LOCAL_USER_KEY); window.dispatchEvent(new Event('app-auth-change'));
}

export async function loginAdmin(email,password){
  if(email.toLowerCase()!==ADMIN_EMAIL.toLowerCase()) throw new Error('This email is not authorized for the admin panel.');
  if(auth && isFirebaseConfigured){
    const cred=await signInWithEmailAndPassword(auth,email,password);
    if((cred.user.email||'').toLowerCase()!==ADMIN_EMAIL.toLowerCase()){ await signOut(auth); throw new Error('Unauthorized admin account.'); }
    const session={email:cred.user.email,uid:cred.user.uid,loggedInAt:Date.now()}; save(ADMIN_SESSION_KEY,session); return session;
  }
  if(password!==DEFAULT_ADMIN_PASSWORD) throw new Error('Incorrect admin password.');
  const session={email:ADMIN_EMAIL,uid:'local-admin',loggedInAt:Date.now()}; save(ADMIN_SESSION_KEY,session); return session;
}

export async function logoutAdmin(){ localStorage.removeItem(ADMIN_SESSION_KEY); if(auth && isFirebaseConfigured) await signOut(auth); }
