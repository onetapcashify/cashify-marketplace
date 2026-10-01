import React from 'react';
import {Link} from 'react-router-dom';
function pathFor(title=''){const t=title.toLowerCase(); if(t.includes('laptop'))return '/buy/laptops'; if(t.includes('refurbished'))return '/buy/all'; if(t.includes('article')||t.includes('news'))return '/articles'; if(t.includes('store'))return '/stores'; return '/buy/all'}
export default function SectionHeading({title, action, to}){return <div className="section-heading"><h2>{title}</h2>{action&&<Link className="section-action" to={to||pathFor(title)}>{action}</Link>}</div>}
