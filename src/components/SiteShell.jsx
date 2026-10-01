import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
export default function SiteShell({children}){return <><Header/><main>{children}</main><Footer/></>}
