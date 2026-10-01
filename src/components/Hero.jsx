import React,{useEffect,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import SafeImage from './SafeImage.jsx';
import {heroSlides} from '../data/siteData.js';

export default function Hero({slides=heroSlides}){
  const [i,setI]=useState(0);
  useEffect(()=>{setI(x=>Math.min(x,Math.max(0,slides.length-1)));const t=setInterval(()=>setI(x=>(x+1)%slides.length),4500);return()=>clearInterval(t)},[slides.length]);
  const s=slides[i]||heroSlides[0];
  const next=d=>setI(x=>(x+d+slides.length)%slides.length);
  return <section className={`hero ${s.type==='static'?'hero-static':'hero-dynamic'}`} style={s.color?{backgroundColor:s.color}:undefined}>
    <button className="hero-arrow left" onClick={()=>next(-1)} aria-label="Previous banner"><ChevronLeft/></button>
    {s.type==='dynamic'?<>
      <div className="hero-copy"><h1>{s.title}</h1><p>{s.subtitle}</p><Link className="hero-cta" to={s.to}>{s.cta}</Link></div>
      <Link className="hero-art" to={s.to}><SafeImage src={s.image} alt={s.title} loading="eager" fetchPriority="high"/></Link>
    </>:<Link className="hero-full-link" to={s.to} aria-label={s.title}><SafeImage src={s.image} alt={s.title} loading="eager" fetchPriority="high"/></Link>}
    <button className="hero-arrow right" onClick={()=>next(1)} aria-label="Next banner"><ChevronRight/></button>
    <div className="hero-dots" aria-label="Banner pagination">{slides.map((_,idx)=><button key={idx} className={idx===i?'active':''} onClick={()=>setI(idx)} aria-label={`Banner ${idx+1}`}/>)}</div>
  </section>
}
