import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Heart} from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import {load,save} from '../utils/localStore.js';
import {useAuth} from '../context/AuthContext.jsx';

function WishlistHeart({productId}){
  const {user}=useAuth();
  const navigate=useNavigate();

  const [saved,setSaved]=useState(
    ()=>load('wishlist',[]).includes(productId)
  );

  const toggleWishlist=e=>{
    e.preventDefault();
    e.stopPropagation();

    if(!user){
      navigate('/login');
      return;
    }

    let wishlist=load('wishlist',[]);

    wishlist=wishlist.includes(productId)
      ? wishlist.filter(id=>id!==productId)
      : [...wishlist,productId];

    save('wishlist',wishlist);
    setSaved(wishlist.includes(productId));
  };

  return (
    <span
      className={`product-wish ${saved?'active':''}`}
      role="button"
      tabIndex={0}
      aria-label={saved?'Remove from wishlist':'Add to wishlist'}
      onClick={toggleWishlist}
      onKeyDown={e=>{
        if(e.key==='Enter'||e.key===' '){
          toggleWishlist(e);
        }
      }}
    >
      <Heart
        size={19}
        fill={saved?'currentColor':'none'}
      />
    </span>
  );
}

export default function ProductGrid({items}){
  return (
    <div className="product-grid">

      {items.map(p=>(
        <Link
          to={`/product/${p.id}`}
          className="product-tile"
          key={p.id}
        >

          <div className="product-img-wrap">

            <SafeImage
              src={p.image}
              alt={p.name}
            />

            <WishlistHeart productId={p.id}/>

          </div>

          <div className="saving">
            ₹{p.saving} OFF
          </div>

          <h3>
            {p.name}
          </h3>

          {(p.storage||p.ram)&&(
            <div className="product-variant-line">
              {[p.ram,p.storage]
                .filter(Boolean)
                .join(' • ')
              }
            </div>
          )}

          <div className="product-meta">

            <span>
              {p.condition||'Refurbished'}
            </span>

            <span>
              ★ {p.rating}
            </span>

          </div>

          <div className="prices">

            <strong>
              ₹{p.price}
            </strong>

            <del>
              ₹{p.mrp}
            </del>

          </div>

        </Link>
      ))}

    </div>
  );
}