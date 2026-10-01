import React,{useRef} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import SafeImage from './SafeImage.jsx';
export default function ProductCarousel({items}){
  const ref=useRef(null); const move=d=>ref.current?.scrollBy({left:d*300,behavior:'smooth'});
  return <div className="carousel-wrap"><button className="car-arrow left" onClick={()=>move(-1)} aria-label="Previous"><ChevronLeft/></button><div className="product-row" ref={ref}>{items.map((p,i)=>{const isLaptop=p.image?.includes('/store/product/'); const id=p.id||`${isLaptop?'laptop':'phone'}-${i+1}`; return <Link to={`/product/${id}`} className="product-card" key={`${p.name}-${i}`}>
    <div className="assured-row">{p.assured&&<SafeImage src={p.assured} alt="Cashify Assured"/>}</div>
    <div className="card-image"><SafeImage src={p.image} alt={p.name}/></div>
    <div className="saving">₹{p.saving} OFF</div><h3>{p.name}</h3><div className="upgrade">Smart Upgrade Days <span>{p.rating} ★</span></div><div className="price-line"><em>-{p.discount}</em><strong>₹{p.price}</strong><del>₹{p.mrp}</del></div>
  </Link>})}</div><button className="car-arrow right" onClick={()=>move(1)} aria-label="Next"><ChevronRight/></button></div>
}
