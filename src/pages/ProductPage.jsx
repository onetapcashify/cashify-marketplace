import React,{useMemo,useState} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import {Heart,ShoppingCart,ShieldCheck,RefreshCcw,BadgeCheck} from 'lucide-react';
import SiteShell from '../components/SiteShell.jsx';
import SafeImage from '../components/SafeImage.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import { allProducts } from '../data/catalog.js';
import { load,save } from '../utils/localStore.js';
import useAdminRows from '../hooks/useAdminRows.js';
import {useAuth} from '../context/AuthContext.jsx';

export default function ProductPage(){
  const {id}=useParams();
  const navigate=useNavigate();
  const {user}=useAuth();

  const adminProducts=useAdminRows('Products',[]);

  const source=useMemo(
    ()=>adminProducts.length
      ? adminProducts
          .filter(x=>x.status==='Active')
          .map(x=>({
            id:x.id,
            name:x.name,
            image:x.image,
            saving:x.saving||'0',
            price:String(x.value||x.price||'0'),
            discount:x.discount||'0%',
            rating:x.rating||'4.5',
            mrp:x.mrp||x.value||'0',
            category:x.category||x.notes||'Phones',
            brand:x.brand||'Other',
            condition:x.condition||'Refurbished',
            stock:x.stock??0,
            description:x.description||'Quality checked refurbished device.',
            assured:x.assured
          }))
      : allProducts,
    [adminProducts]
  );

  const p=source.find(x=>x.id===id)||source[0]||allProducts[0];

  const [added,setAdded]=useState(false);

  const [saved,setSaved]=useState(
    ()=>load('wishlist',[]).includes(p.id)
  );

  const requireLogin=()=>{
    if(!user){
      navigate('/login');
      return false;
    }
    return true;
  };

  const add=()=>{
    if(!requireLogin()) return;

    const c=load('cart',[]);
    const found=c.find(x=>x.id===p.id);

    if(found){
      found.qty+=1;
    }else{
      c.push({...p,qty:1});
    }

    save('cart',c);
    setAdded(true);
  };

  const toggleWish=()=>{
    if(!requireLogin()) return;

    let w=load('wishlist',[]);

    w=w.includes(p.id)
      ? w.filter(x=>x!==p.id)
      : [...w,p.id];

    save('wishlist',w);
    setSaved(w.includes(p.id));
  };

  const goToCart=(e)=>{
    if(!user){
      e.preventDefault();
      navigate('/login');
    }
  };

  const related=source
    .filter(x=>x.id!==p.id&&x.category===p.category)
    .slice(0,5);

  return (
    <SiteShell>

      <section className="container product-detail">

        <div className="detail-gallery">
          <SafeImage
            src={p.image}
            alt={p.name}
          />
        </div>

        <div className="detail-info">

          <p className="eyebrow">
            {p.brand} · {p.condition}
          </p>

          <h1>{p.name}</h1>

          <div className="rating-line">
            ★ {p.rating} · {p.stock} in stock
          </div>

          <div className="detail-price">

            <strong>
              ₹{p.price}
            </strong>

            <del>
              ₹{p.mrp}
            </del>

            <span>
              {p.discount} OFF
            </span>

          </div>

          <p>
            {p.description}
          </p>

          <div className="assurance-grid">

            <div>
              <BadgeCheck/>
              <b>32-point check</b>
              <span>Quality verified</span>
            </div>

            <div>
              <ShieldCheck/>
              <b>Warranty</b>
              <span>Covered purchase</span>
            </div>

            <div>
              <RefreshCcw/>
              <b>Replacement</b>
              <span>Easy support</span>
            </div>

          </div>

          <div className="product-actions">

            <button
              className="primary-btn"
              onClick={add}
            >
              <ShoppingCart size={17}/>
              {added?'Added to Cart':'Add to Cart'}
            </button>

            <button
              className="secondary-btn"
              onClick={toggleWish}
            >
              <Heart
                size={17}
                fill={saved?'currentColor':'none'}
              />
              {saved?'Saved':'Save'}
            </button>

            <Link
              className="secondary-btn"
              to="/cart"
              onClick={goToCart}
            >
              Go to Cart
            </Link>

          </div>

        </div>

      </section>

      {related.length>0&&(
        <section className="container section">

          <h2>
            Similar devices
          </h2>

          <ProductCarousel
            items={related}
          />

        </section>
      )}

    </SiteShell>
  );
}