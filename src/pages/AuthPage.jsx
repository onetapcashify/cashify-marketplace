import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SiteShell from '../components/SiteShell.jsx';
import {loginCustomer,registerCustomer,loginWithGoogle} from '../firebase/auth.js';
export default function AuthPage(){
 const [mode,setMode]=useState('login'),[name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false); const nav=useNavigate();
 const done=()=>nav('/account');
 const submit=async e=>{e.preventDefault();setError('');setBusy(true);try{if(mode==='login')await loginCustomer(email,password);else await registerCustomer(name,email,password);done()}catch(e){setError(e.message||'Unable to continue.')}finally{setBusy(false)}};
 const google=async()=>{setError('');setBusy(true);try{await loginWithGoogle();done()}catch(e){setError(e.message||'Google login failed.')}finally{setBusy(false)}};
 return <SiteShell><section className="auth-page"><form onSubmit={submit} className="auth-card"><h1>{mode==='login'?'Login':'Create account'}</h1><p className="auth-subtitle">Access your orders, wishlist and account details.</p>{error&&<div className="auth-error">{error}</div>}{mode==='register'&&<input required placeholder="Full name" value={name} onChange={e=>setName(e.target.value)}/>}<input required type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><input required type="password" minLength="6" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><button disabled={busy} className="primary-btn block">{busy?'Please wait...':mode==='login'?'Login':'Register'}</button><div className="auth-divider"><span>or</span></div><button type="button" disabled={busy} className="google-login" onClick={google}><span className="google-g">G</span> Continue with Google</button><button type="button" className="text-btn" onClick={()=>{setError('');setMode(mode==='login'?'register':'login')}}>{mode==='login'?'New here? Create account':'Already have an account? Login'}</button></form></section></SiteShell>
}
