import React,{useEffect,useMemo,useState} from 'react';
import { useParams,useSearchParams,Link } from 'react-router-dom';
import {SlidersHorizontal,Search} from 'lucide-react';

import SiteShell from '../components/SiteShell.jsx';
import ProductGrid from '../components/ProductGrid.jsx';

import { allProducts,categories } from '../data/catalog.js';
import useAdminRows from '../hooks/useAdminRows.js';

export default function CatalogPage(){

  const {type}=useParams();
  const [params]=useSearchParams();

  const [q,setQ]=useState(params.get('q')||'');
  const [sort,setSort]=useState('featured');
  const [brand,setBrand]=useState('all');

  useEffect(()=>{
    setQ(params.get('q')||'');
  },[params]);

  const adminProducts=useAdminRows('Products',[]);
  const adminCategories=useAdminRows('Categories',[]);

  /*
    Convert Admin / Firestore products into the same structure
    used by catalog.js.
  */
  const mappedAdminProducts=useMemo(
    ()=>adminProducts
      .filter(x=>x.status==='Active')
      .map(x=>({
        id:x.id,

        name:x.name||'Product',

        image:x.image||'',

        saving:x.saving||'0',

        price:String(x.value||x.price||'0'),

        discount:x.discount||'0%',

        rating:x.rating||'4.5',

        mrp:x.mrp||x.value||x.price||'0',

        category:x.category||x.notes||'Phones',

        brand:x.brand||'Other',

        model:x.model||x.name||'',

        storage:x.storage||'',

        ram:x.ram||'',

        color:x.color||'',

        condition:x.condition||'Refurbished',

        stock:x.stock??0,

        description:x.description||'',

        assured:x.assured,

        searchText:[
          x.name,
          x.brand,
          x.model,
          x.storage,
          x.ram,
          x.color,
          x.condition,
          x.category,
          x.notes,
          x.description
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
      })),
    [adminProducts]
  );

  /*
    IMPORTANT:
    Combine local catalog + Admin products.

    Previously:
      adminProducts.length ? adminProducts : allProducts

    meant that adding even one Firestore product caused the
    whole local catalog to disappear.

    Now Admin products only override a matching product ID.
  */
  const source=useMemo(()=>{

    const productMap=new Map();

    allProducts.forEach(product=>{
      productMap.set(String(product.id),product);
    });

    mappedAdminProducts.forEach(product=>{
      productMap.set(String(product.id),{
        ...productMap.get(String(product.id)),
        ...product
      });
    });

    return Array.from(productMap.values());

  },[mappedAdminProducts]);

  const normalized=
    type==='all'
      ? null
      : String(type||'').toLowerCase();

  const title=
    type==='laptops'
      ? 'Refurbished Laptops'
      : type==='phones'
        ? 'Refurbished Phones'
        : type&&type!=='all'
          ? `${type[0].toUpperCase()+type.slice(1)} Devices`
          : 'Buy Refurbished Devices';

  const brands=useMemo(
    ()=>[
      ...new Set(
        source
          .map(p=>p.brand)
          .filter(Boolean)
      )
    ].sort(),
    [source]
  );

  const liveCategories=adminCategories.length
    ? adminCategories
        .filter(x=>x.status==='Active')
        .map(x=>({
          name:x.name,
          slug:
            x.slug||
            x.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g,'-')
              .replace(/^-|-$/g,'')
        }))
    : categories;

  const items=useMemo(()=>{

    let a=[...source];

    /*
      Category filter.

      Supports:
      Phones -> phones
      Laptops -> laptops
      Smartwatches -> smartwatches
      etc.
    */
    if(normalized){

      const normalizeCategory=value=>
        String(value||'')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g,'-');

      a=a.filter(p=>
        normalizeCategory(p.category)===normalized
      );
    }

    /*
      Full product search.

      Searches actual product fields instead of only:
      name + brand + category.
    */
    if(q.trim()){

      const term=q
        .trim()
        .toLowerCase()
        .replace(/\s+/g,' ');

      const words=term
        .split(' ')
        .filter(Boolean);

      a=a.filter(p=>{

        const searchable=[
          p.name,
          p.brand,
          p.model,
          p.storage,
          p.ram,
          p.color,
          p.condition,
          p.category,
          p.description,
          p.searchText
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .replace(/\s+/g,' ');

        /*
          All entered words should exist somewhere in
          the product information.

          Example:
          "iphone 256" will match
          Apple iPhone 15 - 256 GB - ...
        */
        return words.every(word=>
          searchable.includes(word)
        );
      });
    }

    if(brand!=='all'){
      a=a.filter(p=>p.brand===brand);
    }

    const num=value=>
      Number(
        String(value??0)
          .replace(/,/g,'')
          .replace(/[^\d.]/g,'')
      )||0;

    if(sort==='price-low'){
      a=[...a].sort(
        (x,y)=>num(x.price)-num(y.price)
      );
    }

    if(sort==='price-high'){
      a=[...a].sort(
        (x,y)=>num(y.price)-num(x.price)
      );
    }

    if(sort==='rating'){
      a=[...a].sort(
        (x,y)=>
          Number(y.rating||0)-
          Number(x.rating||0)
      );
    }

    return a;

  },[
    source,
    normalized,
    q,
    sort,
    brand
  ]);

  return (
    <SiteShell>

      <section className="container page-hero catalog-hero">

        <div>

          <p className="eyebrow">
            Certified refurbished
          </p>

          <h1>
            {q.trim()
              ? `Search results for "${q.trim()}"`
              : title}
          </h1>

          <p>
            Quality-checked devices, transparent pricing, warranty support and secure checkout.
          </p>

        </div>

      </section>

      <section className="container category-chips">

        {liveCategories.map(c=>(
          <Link
            className={type===c.slug?'active':''}
            to={`/buy/${c.slug}`}
            key={c.slug}
          >
            {c.name}
          </Link>
        ))}

      </section>

      <section className="container page-section">

        <div className="catalog-toolbar">

          <div className="catalog-search">

            <Search size={18}/>

            <input
              value={q}
              onChange={e=>setQ(e.target.value)}
              placeholder="Search products, model, storage or brand"
            />

          </div>

          <select
            value={brand}
            onChange={e=>setBrand(e.target.value)}
          >

            <option value="all">
              All brands
            </option>

            {brands.map(b=>(
              <option
                value={b}
                key={b}
              >
                {b}
              </option>
            ))}

          </select>

          <select
            value={sort}
            onChange={e=>setSort(e.target.value)}
          >

            <option value="featured">
              Featured
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Top Rated
            </option>

          </select>

          <span className="result-count">

            <SlidersHorizontal size={16}/>

            {items.length} results

          </span>

        </div>

        {items.length
          ? (
            <ProductGrid items={items}/>
          )
          : (
            <div className="empty-state">

              <h2>
                No products found
              </h2>

              <p>
                Try a different product, model, storage, brand or category.
              </p>

              <button
                className="secondary-btn"
                onClick={()=>{
                  setQ('');
                  setBrand('all');
                }}
              >
                Clear filters
              </button>

            </div>
          )}

      </section>

    </SiteShell>
  );
}