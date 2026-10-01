import React from 'react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage.jsx';
export default function ProductGrid({items}){return <div className="product-grid">{items.map(p=><Link to={`/product/${p.id}`} className="product-tile" key={p.id}><div className="product-img-wrap"><SafeImage src={p.image} alt={p.name}/></div><div className="saving">₹{p.saving} OFF</div><h3>{p.name}</h3><div className="product-meta"><span>{p.condition||'Refurbished'}</span><span>★ {p.rating}</span></div><div className="prices"><strong>₹{p.price}</strong><del>₹{p.mrp}</del></div></Link>)}</div>}
