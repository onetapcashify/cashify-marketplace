import React from 'react';import {Navigate} from 'react-router-dom';import {getAdminSession} from '../firebase/auth.js';
export default function ProtectedAdmin({children}){return getAdminSession()?children:<Navigate to="/admin/login" replace/>}
