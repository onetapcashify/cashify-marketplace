import {
  initializeApp,
  getApps,
  getApp
} from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig={
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID
};

const app=
  getApps().length
    ?getApp()
    :initializeApp(firebaseConfig);

const auth=
  getAuth(app);

const ADMIN_EMAIL=
  'onetapcashify@gmail.com';

export async function signInAdminToFirebase(
  email,
  password
){
  const normalized=
    String(email||'')
      .trim()
      .toLowerCase();

  if(normalized!==ADMIN_EMAIL){
    throw new Error(
      'This account is not allowed to access Admin.'
    );
  }

  const result=
    await signInWithEmailAndPassword(
      auth,
      normalized,
      password
    );

  if(
    String(result.user?.email||'')
      .toLowerCase()!==ADMIN_EMAIL
  ){
    await signOut(auth);
    throw new Error(
      'Invalid Admin account.'
    );
  }

  return result.user;
}

export async function signOutAdminFirebase(){
  await signOut(auth);
}

export function waitForAdminFirebaseAuth(){
  return new Promise(resolve=>{
    const unsub=
      onAuthStateChanged(
        auth,
        user=>{
          unsub();
          resolve(
            user &&
            String(user.email||'')
              .toLowerCase()===ADMIN_EMAIL
              ?user
              :null
          );
        }
      );
  });
}

export function getFirebaseAdminUser(){
  const user=auth.currentUser;

  return (
    user &&
    String(user.email||'')
      .toLowerCase()===ADMIN_EMAIL
  )
    ?user
    :null;
}

export {auth as adminFirebaseAuth};
