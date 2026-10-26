import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {loginAdmin} from '../firebase/auth.js';
import {signInAdminToFirebase} from '../firebase/adminFirestoreAuth.js';

export default function AdminLoginPage(){

  const nav=useNavigate();

  const [email,setEmail]=useState('onetapcashify@gmail.com');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);

  const submit=async e=>{

    e.preventDefault();

    if(loading) return;

    setError('');
    setLoading(true);

    try{

      /*
        Keep the project's existing Admin authentication/session.
      */
      const result=
        await loginAdmin(
          email.trim(),
          password
        );

      /*
        Some existing loginAdmin implementations return false on
        invalid credentials, while others throw. Support both.
      */
      if(result===false){

        setError(
          'Invalid admin email or password.'
        );

        return;
      }

      /*
        Also authenticate the browser with Firebase Auth.
        Firestore security rules require this identity before
        Admin can create/edit/delete shared data.
      */
      await signInAdminToFirebase(
        email.trim(),
        password
      );

      nav(
        '/admclonemin',
        {replace:true}
      );

    }catch(err){

      console.error(
        'Admin login failed:',
        err
      );

      const code=
        String(err?.code||'');

      if(
        code.includes('auth/invalid-credential') ||
        code.includes('auth/wrong-password') ||
        code.includes('auth/user-not-found')
      ){

        setError(
          'Invalid admin email or password.'
        );

      }else if(
        code.includes('auth/operation-not-allowed')
      ){

        setError(
          'Firebase Email/Password login is not enabled.'
        );

      }else{

        setError(
          err?.message||
          'Unable to sign in. Please try again.'
        );

      }

    }finally{

      setLoading(false);

    }

  };

  return (
    <main className="admin-login-page">

      <section className="admin-login-card">

        <div className="admin-login-head">
          <p className="eyebrow">
            Marketplace Admin
          </p>

          <h1>
            Admin Login
          </h1>

          <p>
            Sign in to manage the marketplace.
          </p>
        </div>

        <form
          className="admin-login-form"
          onSubmit={submit}
        >

          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={e=>
                setEmail(e.target.value)
              }
              autoComplete="username"
              required
            />
          </label>

          <label>
            Password

            <input
              type="password"
              value={password}
              onChange={e=>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
              required
            />
          </label>

          {error&&(
            <div
              className="admin-login-error"
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ?'Signing in...'
              :'Login'}
          </button>

        </form>

        <Link
          to="/"
          className="admin-login-back"
        >
          Back to website
        </Link>

      </section>

    </main>
  );
}
