import {useEffect,useState} from 'react';
import {loadModuleRows,subscribeModuleRows} from '../services/store.js';
import {load} from '../utils/localStore.js';
export default function useAdminRows(module,fallback=[]){
 const key=`admin:${module}`; const [rows,setRows]=useState(()=>load(key,fallback));
 useEffect(()=>{let alive=true;loadModuleRows(module,fallback).then(r=>alive&&setRows(r));const unsub=subscribeModuleRows(module,fallback,r=>alive&&setRows(r));return()=>{alive=false;unsub?.()}},[module]);
 return rows;
}
