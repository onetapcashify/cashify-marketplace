import React from 'react';
import {Link} from 'react-router-dom';
import SafeImage from './SafeImage.jsx';
export default function ServiceGrid({items,compact=false}){return <div className={compact?'service-grid compact':'service-grid'}>{items.map((item,i)=><Link to={item.to||'/'} className="service-item" key={`${item.title}-${i}`}><div className="service-image"><SafeImage src={item.image} alt={item.title}/></div><span>{item.title}</span></Link>)}</div>}
