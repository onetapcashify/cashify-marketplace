import React,{createContext,useContext,useEffect,useState} from 'react';
import {subscribeAuth,logoutCustomer} from '../firebase/auth.js';
const AuthContext=createContext({user:null,loading:true});
export function AuthProvider({children}){const [user,setUser]=useState(null);const [loading,setLoading]=useState(true);useEffect(()=>subscribeAuth(u=>{setUser(u);setLoading(false)}),[]);return <AuthContext.Provider value={{user,loading,logout:logoutCustomer}}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext);
