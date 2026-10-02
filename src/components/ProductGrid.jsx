import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Heart,Star} from 'lucide-react';

import SafeImage from './SafeImage.jsx';
import {load,save} from '../utils/localStore.js';
import {useAuth} from '../context/AuthContext.jsx';

function WishlistHeart({productId}){

  const navigate=useNavigate();
  const {user}=useAuth();

  const [saved,setSaved]=useState(
    ()=>load('wishlist',[])
      .some(
        id=>
          String(id)===
          String(productId)
      )
  );

  const toggle=e=>{

    /*
      Prevent card Link from opening
      when user clicks the heart.
    */
    e.preventDefault();
    e.stopPropagation();

    if(!user){
      navigate('/login');
      return;
    }

    let wishlist=
      load('wishlist',[]);

    const exists=
      wishlist.some(
        id=>
          String(id)===
          String(productId)
      );

    if(exists){

      wishlist=
        wishlist.filter(
          id=>
            String(id)!==
            String(productId)
        );

    }else{

      wishlist=[
        ...wishlist,
        productId
      ];
    }

    save(
      'wishlist',
      wishlist
    );

    setSaved(!exists);
  };

  return (
    <button
      type="button"
      className={
        `product-wish ${
          saved?'active':''
        }`
      }
      onClick={toggle}
      aria-label={
        saved
          ?'Remove from wishlist'
          :'Add to wishlist'
      }
    >
      <Heart
        size={19}
        fill={
          saved
            ?'currentColor'
            :'none'
        }
      />
    </button>
  );
}

export default function ProductGrid({items=[]}){

  return (
    <div className="product-grid">

      {items.map(product=>(

        <Link
          to={`/product/${product.id}`}
          className="product-card"
          key={product.id}
        >

          <div className="product-img-wrap">

            <SafeImage
              src={product.image}
              alt={product.name}
            />

            <WishlistHeart
              productId={product.id}
            />

          </div>

          <div className="product-card-body">

            {product.brand&&(
              <div className="product-brand">
                {product.brand}
              </div>
            )}

            <h3>
              {product.name}
            </h3>

            {(product.ram||
              product.storage||
              product.condition)&&(

              <div className="product-variant-line">

                {[
                  product.ram,
                  product.storage,
                  product.condition
                ]
                  .filter(Boolean)
                  .join(' • ')
                }

              </div>

            )}

            {product.rating&&(
              <div className="product-rating">

                <Star
                  size={14}
                  fill="currentColor"
                />

                <span>
                  {product.rating}
                </span>

              </div>
            )}

            <div className="product-price-row">

              <strong>
                ₹{product.price}
              </strong>

              {product.mrp&&(
                <del>
                  ₹{product.mrp}
                </del>
              )}

            </div>

            {product.discount&&(
              <div className="product-discount">
                {product.discount} OFF
              </div>
            )}

          </div>

        </Link>

      ))}

    </div>
  );
}