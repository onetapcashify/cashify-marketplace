import React,{useRef,useState} from 'react';
import {ChevronLeft,ChevronRight,Heart} from 'lucide-react';
import {Link,useNavigate} from 'react-router-dom';
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

export default function ProductCarousel({items}){

  const ref=useRef(null);

  const move=d=>
    ref.current?.scrollBy({
      left:d*300,
      behavior:'smooth'
    });

  return (
    <div className="carousel-wrap">

      <button
        className="car-arrow left"
        onClick={()=>move(-1)}
        aria-label="Previous"
      >
        <ChevronLeft/>
      </button>

      <div
        className="product-row"
        ref={ref}
      >

        {items.map((p,i)=>{

          const isLaptop=
            p.image?.includes('/store/product/');

          const id=
            p.id||
            `${isLaptop?'laptop':'phone'}-${i+1}`;

          return (
            <Link
              to={`/product/${id}`}
              className="product-card"
              key={`${p.id||p.name}-${i}`}
            >

              <div className="assured-row">

                {p.assured&&(
                  <SafeImage
                    src={p.assured}
                    alt="Cashify Assured"
                  />
                )}

              </div>

              <div className="card-image">

                <SafeImage
                  src={p.image}
                  alt={p.name}
                />

                <WishlistHeart productId={id}/>

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

              <div className="upgrade">

                Smart Upgrade Days

                <span>
                  {p.rating} ★
                </span>

              </div>

              <div className="price-line">

                <em>
                  -{p.discount}
                </em>

                <strong>
                  ₹{p.price}
                </strong>

                <del>
                  ₹{p.mrp}
                </del>

              </div>

            </Link>
          );
        })}

      </div>

      <button
        className="car-arrow right"
        onClick={()=>move(1)}
        aria-label="Next"
      >
        <ChevronRight/>
      </button>

    </div>
  );
}