import React,{useEffect,useMemo,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

import {
  Heart,
  ShoppingCart,
  ShieldCheck,
  RefreshCcw,
  BadgeCheck
} from 'lucide-react';

import SiteShell from '../components/SiteShell.jsx';
import SafeImage from '../components/SafeImage.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';

import {allProducts} from '../data/catalog.js';
import {load,save} from '../utils/localStore.js';
import useAdminRows from '../hooks/useAdminRows.js';
import {useAuth} from '../context/AuthContext.jsx';

export default function ProductPage(){

  const {id}=useParams();
  const navigate=useNavigate();
  const {user}=useAuth();

  const adminProducts=
    useAdminRows('Products',[]);

  const mappedAdminProducts=useMemo(
    ()=>adminProducts
      .filter(x=>x.status==='Active')
      .map(x=>({
        id:x.id,

        name:
          x.name||
          'Product',

        image:
          x.image||
          '',

        saving:
          x.saving||
          '0',

        price:String(
          x.value||
          x.price||
          '0'
        ),

        discount:
          x.discount||
          '0%',

        rating:
          x.rating||
          '4.5',

        mrp:
          x.mrp||
          x.value||
          x.price||
          '0',

        category:
          x.category||
          x.notes||
          'Phones',

        brand:
          x.brand||
          'Other',

        model:
          x.model||
          x.name||
          '',

        storage:
          x.storage||
          '',

        ram:
          x.ram||
          '',

        color:
          x.color||
          '',

        condition:
          x.condition||
          'Refurbished',

        stock:
          x.stock??0,

        description:
          x.description||
          'Quality checked refurbished device.',

        assured:
          x.assured
      })),
    [adminProducts]
  );

  /*
    Merge local products + active admin products.

    If Admin has a product using the same ID,
    Admin values override the local catalog values.
  */
  const source=useMemo(()=>{

    const map=new Map();

    allProducts.forEach(product=>{

      map.set(
        String(product.id),
        product
      );

    });

    mappedAdminProducts.forEach(product=>{

      map.set(
        String(product.id),
        {
          ...map.get(
            String(product.id)
          ),
          ...product
        }
      );

    });

    return [
      ...map.values()
    ];

  },[mappedAdminProducts]);

  /*
    Find exact product.

    Do NOT fall back to the first product.
    That was one reason a wrong device/image
    could appear for an invalid product URL.
  */
  const p=source.find(
    x=>
      String(x.id)===
      String(id)
  );

  /*
    Hooks must always execute before
    any conditional return.
  */
  const [added,setAdded]=
    useState(false);

  const [saved,setSaved]=
    useState(
      ()=>load(
        'wishlist',
        []
      ).includes(id)
    );

  /*
    Reset product-specific states if
    React Router changes only the :id.
  */
  useEffect(()=>{

    setAdded(false);

    setSaved(
      load(
        'wishlist',
        []
      ).includes(id)
    );

  },[id]);

  /*
    Product not found.
  */
  if(!p){

    return (
      <SiteShell>

        <section className="container page-section">

          <div className="empty-state">

            <h2>
              Product not found
            </h2>

            <p>
              This product may have been updated or removed.
            </p>

            <button
              type="button"
              className="primary-btn"
              onClick={()=>
                navigate('/buy/all')
              }
            >
              Browse Products
            </button>

          </div>

        </section>

      </SiteShell>
    );
  }

  const requireLogin=()=>{

    if(!user){

      navigate('/login');

      return false;
    }

    return true;
  };

  /*
    NORMAL CART

    Adds item to existing cart.
  */
  const add=()=>{

    if(!requireLogin()){
      return;
    }

    const cart=
      load(
        'cart',
        []
      );

    const found=
      cart.find(
        x=>
          String(x.id)===
          String(p.id)
      );

    if(found){

      found.qty=
        (found.qty||1)+1;

    }else{

      cart.push({
        ...p,
        qty:1
      });

    }

    save(
      'cart',
      cart
    );

    setAdded(true);
  };

  /*
    WISHLIST HEART
  */
  const toggleWish=()=>{

    if(!requireLogin()){
      return;
    }

    let wishlist=
      load(
        'wishlist',
        []
      );

    const exists=
      wishlist.some(
        itemId=>
          String(itemId)===
          String(p.id)
      );

    if(exists){

      wishlist=
        wishlist.filter(
          itemId=>
            String(itemId)!==
            String(p.id)
        );

    }else{

      wishlist=[
        ...wishlist,
        p.id
      ];
    }

    save(
      'wishlist',
      wishlist
    );

    setSaved(
      !exists
    );
  };

  /*
    BUY NOW

    Saves only this product into
    temporary buyNowItem.

    Existing cart is untouched.
  */
  const buyNow=()=>{

    if(!requireLogin()){
      return;
    }

    save(
      'buyNowItem',
      {
        ...p,
        qty:1
      }
    );

    navigate(
      '/checkout?mode=buy-now'
    );
  };

  /*
    Related products.
  */
  const related=source
    .filter(
      x=>
        String(x.id)!==
          String(p.id) &&
        x.category===p.category
    )
    .slice(0,7);

  const variantDetails=[
    p.ram,
    p.storage,
    p.color,
    p.condition
  ].filter(Boolean);

  return (
    <SiteShell>

      <section className="container product-detail">

        {/* PRODUCT IMAGE */}

        <div className="detail-gallery">

          <SafeImage
            src={p.image}
            alt={p.name}
          />

          <button
            type="button"
            className={
              `detail-wishlist ${
                saved
                  ?'active'
                  :''
              }`
            }
            onClick={toggleWish}
            aria-label={
              saved
                ?'Remove from wishlist'
                :'Add to wishlist'
            }
          >

            <Heart
              size={22}
              fill={
                saved
                  ?'currentColor'
                  :'none'
              }
            />

          </button>

        </div>

        {/* PRODUCT DETAILS */}

        <div className="detail-info">

          <p className="eyebrow">

            {p.brand}

            {' · '}

            {p.condition}

          </p>

          <h1>
            {p.name}
          </h1>

          {/* VARIANT DETAILS */}

          {variantDetails.length>0&&(

            <div className="product-variant-details">

              {variantDetails.map(
                (detail,index)=>(

                  <span
                    key={
                      `${detail}-${index}`
                    }
                  >
                    {detail}
                  </span>

                )
              )}

            </div>

          )}

          {/* RATING */}

          <div className="rating-line">

            ★ {p.rating}

            {' · '}

            {p.stock} in stock

          </div>

          {/* PRICE */}

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

          {/* DESCRIPTION */}

          <p>
            {p.description}
          </p>

          {/* ASSURANCE */}

          <div className="assurance-grid">

            <div>

              <BadgeCheck/>

              <b>
                32-point check
              </b>

              <span>
                Quality verified
              </span>

            </div>

            <div>

              <ShieldCheck/>

              <b>
                Warranty
              </b>

              <span>
                Covered purchase
              </span>

            </div>

            <div>

              <RefreshCcw/>

              <b>
                Replacement
              </b>

              <span>
                Easy support
              </span>

            </div>

          </div>

          {/* BUY ACTIONS */}

          <div className="product-actions product-buy-actions">

            <button
              type="button"
              className={
                `secondary-btn cart-icon-btn ${
                  added
                    ?'added'
                    :''
                }`
              }
              onClick={add}
              aria-label="Add product to cart"
            >

              <ShoppingCart size={21}/>

            </button>

            <button
              type="button"
              className="primary-btn buy-now-btn"
              onClick={buyNow}
            >
              BUY NOW
            </button>

          </div>

          {added&&(

            <div className="added-message">
              Added to cart
            </div>

          )}

        </div>

      </section>

      {/* RELATED PRODUCTS */}

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