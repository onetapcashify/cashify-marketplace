import React,{useMemo} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header.jsx';
import MobileBottomNav from '../components/MobileBottomNav.jsx';
import Hero from '../components/Hero.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import Footer from '../components/Footer.jsx';
import SafeImage from '../components/SafeImage.jsx';
import { services, sellDevices, phones, laptops, stores, faqs, hotDeals, buyArticles, sellArticles, recentNews, appAssets } from '../data/siteData.js';
import { MapPin, Star, ChevronDown, Quote, ArrowRight } from 'lucide-react';
import useAdminRows from '../hooks/useAdminRows.js';
import { allProducts } from '../data/catalog.js';
import {referenceProducts} from '../data/referenceProducts.js';
import {getHomeRefurbishedProducts} from '../data/homeFeaturedProducts.js';

function StoryRail({title,items}){return <section className="container section story-section"><SectionHeading title={title} action="See all"/><div className="story-row">{items.map((x,i)=><Link to={x.to} className="story-card" key={`${x.title}-${i}`}><SafeImage src={x.image} alt={x.title}/><span>{x.title}</span></Link>)}</div></section>}

export default function HomePage(){
  const bannerRows=useAdminRows('Banners',[]); const serviceRows=useAdminRows('Services',[]); const productRows=useAdminRows('Products',[]); const storeRows=useAdminRows('Stores',[]); const dealRows=useAdminRows('Hot Deals',[]); const testimonialRows=useAdminRows('Testimonials',[]); const faqRows=useAdminRows('FAQs',[]); const articleRows=useAdminRows('Articles',[]); const newsRows=useAdminRows('News',[]);
  const liveSlides=bannerRows.length?bannerRows.filter(x=>x.status==='Active').map(x=>({image:x.image,type:(x.notes||'static').toLowerCase().includes('dynamic')?'dynamic':'static',title:x.name,subtitle:x.subtitle||'',cta:x.cta||'View Now',to:x.value||'/',color:x.color||undefined})):undefined;
  const liveServices=serviceRows.length?serviceRows.filter(x=>x.status==='Active').map(x=>({title:x.name,image:x.image,to:x.value||'/'})):services;
  const normalizedProducts=productRows.length?productRows.filter(x=>x.status==='Active').map((x,i)=>({id:x.id,name:x.name,image:x.image,saving:x.saving||'0',price:String(x.value||x.price||'0'),discount:x.discount||'0%',rating:x.rating||'4.5',mrp:x.mrp||x.value||'0',category:x.category||x.notes||'Phones',assured:x.assured,condition:x.condition||'Refurbished'})):allProducts;
  const livePhones=normalizedProducts.filter(x=>(x.category||'').toLowerCase()==='phones').slice(0,8); const liveLaptops=normalizedProducts.filter(x=>(x.category||'').toLowerCase()==='laptops').slice(0,8);
  const liveStores=storeRows.length?storeRows.filter(x=>x.status==='Active').map(x=>[x.name,x.notes||'',x.value||'']):stores;
  const liveDeals=dealRows.length?dealRows.filter(x=>x.status==='Active').map(x=>({title:x.name,image:x.image,to:x.value||'/'})):hotDeals;
  const liveTestimonials=testimonialRows.length?testimonialRows.filter(x=>x.status==='Active').map(x=>[x.notes||'',x.name,x.value||'']):[['Super smooth pickup experience and transparent pricing.','Tarun Singh Verma','New Delhi'],['Easy process and professional service from start to finish.','Karan Sharma','Delhi NCR'],['Good refurbished device quality, clean packaging and delivery.','Abhiyash','New Delhi']];
  const liveFaqs=faqRows.length?faqRows.filter(x=>x.status==='Active').map(x=>[x.name,x.notes||x.value||'']):faqs;
  const liveArticles=articleRows.length?articleRows.filter(x=>x.status==='Active').map(x=>({id:x.id,title:x.name,image:x.image,to:`/articles/${x.id}`,date:x.value||'',excerpt:x.notes||''})):buyArticles;
  const liveNews=newsRows.length?newsRows.filter(x=>x.status==='Active').map(x=>({id:x.id,title:x.name,image:x.image,date:x.value||''})):recentNews;
  const homeRefurbishedProducts=useMemo(
  ()=>
    getHomeRefurbishedProducts(
      allProducts,
      referenceProducts
    ),
  []
);
  return <div><Header/><main>
    <div className="container hero-container"><Hero slides={liveSlides&&liveSlides.length?liveSlides:undefined}/></div>
    <section className="container section"><SectionHeading title="Our Services"/><ServiceGrid items={liveServices}/></section>
    <section className="container section"><SectionHeading title="Sell Your Old Device Now"/><ServiceGrid items={sellDevices} compact/></section>
    <section className="container section"><SectionHeading title="Buy Refurbished Devices" action="View All"/><ProductCarousel items={homeRefurbishedProducts.length?homeRefurbishedProducts:(livePhones.length?livePhones:phones)}/></section>    <section className="container section"><SectionHeading title="Refurbished Laptops" action="View All"/><ProductCarousel items={liveLaptops.length?liveLaptops:laptops}/></section>

    <section className="hot-deals-band"><div className="container hot"><SectionHeading title="Hot Deals"/><p>Exciting offers for more value</p><div className="hot-row">{liveDeals.map(x=><Link to={x.to} key={x.title}><SafeImage src={x.image} alt={x.title}/></Link>)}</div></div></section>

    <section className="container section stores"><SectionHeading title="Our Exclusive Stores" action="View all stores"/><div className="store-trust"><span><MapPin/>200+ Experience Centres</span><span><Star/>4.5+ Star Ratings</span></div><input className="pincode" placeholder="Enter PinCode"/><div className="store-row">{liveStores.map((s,i)=><article className="store-card" key={i}><small>GURGAON</small><h3>{s[0]}</h3><p>{s[1]}</p><p>Timings&nbsp; {s[2]}</p><Link to="/stores">View Details <ArrowRight size={14}/></Link></article>)}</div></section>

    <section className="container trusted"><h2>Trusted by 197.28 Lac + Happy Users<br/>and Major Brands since 2015</h2><div><strong>14796Cr.</strong><span>Cash Given</span></div><div><strong>219.2Lac</strong><span>Gadgets Encashed</span></div></section>
    <section className="container section testimonials">{liveTestimonials.map(([text,name,city])=><div className="quote-card" key={name}><Quote/><p>{text}</p><b>{name}</b><span>{city}</span></div>)}</section>

    <StoryRail title="Better For Pocket. Buy Refurbished" items={liveArticles.slice(0,3)}/>
    <StoryRail title="Be Smart. Sell Smart" items={sellArticles}/>

    <section className="container section faq"><div className="faq-head"><h2>Frequently Asked Questions</h2><div><b>SellSmart</b><span>SmartBuy</span><span>Repair/Others</span></div></div>{liveFaqs.map(([q,a],i)=><details key={i}><summary>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}<Link className="faq-more" to="/faq">View all FAQs <ArrowRight size={15}/></Link></section>

    <section className="container section editorial"><SectionHeading title="Trending Articles" action="See all"/><div className="article-real-grid">{liveArticles.map(x=><Link to={x.to} key={x.title}><SafeImage src={x.image} alt={x.title}/><h3>{x.title}</h3><small>{x.date||"13th Mar 2026"}</small></Link>)}</div></section>
    <section className="container section editorial news"><SectionHeading title="Recent News" action="See all"/><div className="news-real-row">{liveNews.map((x,i)=><Link to={x.id?`/articles/${x.id}`:"/articles"} key={x.title}><SafeImage src={x.image} alt={x.title}/><h3>{x.title}</h3><small>{x.date}</small></Link>)}</div></section>

    <section className="container app-banner"><div><h2>Download the App</h2><p>Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired</p><div className="app-buttons"><a href="#" aria-label="Google Play"><SafeImage src={appAssets.android} alt="Google Play"/></a><a href="#" aria-label="App Store"><SafeImage src={appAssets.ios} alt="App Store"/></a></div></div><SafeImage src={appAssets.banner} alt="Download Cashify app"/></section>

    <section className="container seo-copy"><h2>Sell Your Old Phone & Buy Old Mobile Phones with Cashify</h2><p>Cashify is a platform for selling old mobile phones, buying refurbished devices, getting gadgets repaired and finding nearby experience centres.</p><h2>Sell Your Old Phone</h2><p>Choose your device, provide model and condition details, receive an estimated quote and schedule a pickup. Final value can be confirmed after physical verification.</p><h2>Buy Refurbished Devices</h2><p>Browse quality-checked devices, compare prices and condition, add products to cart and complete checkout using the available payment options.</p></section>
  </main><Footer/>
  <MobileBottomNav/></div>
}
