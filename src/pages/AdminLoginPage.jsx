import React,{useState} from 'react';
import {Navigate,useNavigate} from 'react-router-dom';
import {ShieldCheck} from 'lucide-react';
import {ADMIN_EMAIL,getAdminSession,loginAdmin} from '../firebase/auth.js';

export default function AdminLoginPage(){
  const nav=useNavigate();

  const [email,setEmail]=useState(ADMIN_EMAIL),
    [password,setPassword]=useState(''),
    [error,setError]=useState(''),
    [busy,setBusy]=useState(false);

  if(getAdminSession()){
    return <Navigate to="/admclonemin" replace/>;
  }

  const submit=async e=>{
    e.preventDefault();

    setError('');
    setBusy(true);

    try{
      await loginAdmin(email,password);

      nav(
        '/admclonemin',
        {replace:true}
      );

    }catch(e){

      setError(
        e.message||
        'Admin login failed.'
      );

    }finally{

      setBusy(false);

    }
  };

  return (
    <div className="admin-login-page">

      <form
        className="admin-login-card"
        onSubmit={submit}
      >

        <div className="admin-login-icon">
          <ShieldCheck/>
        </div>

        <h1>Admin Login</h1>

        <p>
          Authorized administration access only.
        </p>

        {error&&(
          <div className="auth-error">
            {error}
          </div>
        )}

        <label>
          Admin Email

          <input
            type="email"
            required
            value={email}
            onChange={e=>
              setEmail(e.target.value)
            }
          />
        </label>

        <label>
          Password

          <input
            type="password"
            required
            value={password}
            onChange={e=>
              setPassword(e.target.value)
            }
          />
        </label>

        <button
          className="primary-btn block"
          disabled={busy}
        >
          {busy
            ?'Signing in...'
            :'Login to Admin Panel'
          }
        </button>

      </form>

    </div>
  );
}