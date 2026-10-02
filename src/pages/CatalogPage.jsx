import React,{useEffect,useMemo,useState} from 'react';
import {useParams,useSearchParams,Link} from 'react-router-dom';
import {SlidersHorizontal,Search} from 'lucide-react';

import SiteShell from '../components/SiteShell.jsx';
import ProductGrid from '../components/ProductGrid.jsx';

import {allProducts,categories} from '../data/catalog.js';
import useAdminRows from '../hooks/useAdminRows.js';

export default function CatalogPage(){

  const {type}=useParams();
  const [params]=useSearchParams();

  const [q,setQ]=useState(
    params.get('q')||''
  );

  const [sort,setSort]=useState('featured');
  const [brand,setBrand]=useState('all');

  useEffect(()=>{
    setQ(params.get('q')||'');
  },[params]);

  const adminProducts=
    useAdminRows('Products',[]);

  const adminCategories=
    useAdminRows('Categories',[]);

  /*
    Map active Firebase/Admin products
    into the same structure as catalog.js.
  */
  const mappedAdminProducts=useMemo(
    ()=>adminProducts
      .filter(x=>x.status==='Active')
      .map(x=>({
        id:x.id,

        name:x.name||'Product',

        image:x.image||'',

        saving:x.saving||'0',

        price:String(
          x.value||
          x.price||
          '0'
        ),

        discount:x.discount||'0%',

        rating:x.rating||'4.5',

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
          '',

        assured:
          x.assured,

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
          x.description,
          x.searchText
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
      })),
    [adminProducts]
  );

  /*
    Combine local catalog + Firebase/Admin products.

    Admin record wins only when the same ID exists.
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

    return [...map.values()];

  },[mappedAdminProducts]);

  const normalized=
    type==='all'
      ?null
      :String(type||'')
        .toLowerCase();

  const title=
    type==='laptops'
      ?'Refurbished Laptops'
      :type==='phones'
        ?'Refurbished Phones'
        :type&&type!=='all'
          ?`${type[0].toUpperCase()+type.slice(1)} Devices`
          :'Buy Refurbished Devices';

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

  const liveCategories=
    adminCategories.length
      ?adminCategories
        .filter(
          x=>x.status==='Active'
        )
        .map(x=>({
          name:x.name,

          slug:
            x.slug||
            x.name
              .toLowerCase()
              .replace(
                /[^a-z0-9]+/g,
                '-'
              )
              .replace(
                /^-|-$/g,
                ''
              )
        }))
      :categories;

  const items=useMemo(()=>{

    let result=[...source];

    /*
      Category filter.
    */
    if(normalized){

      const normalizeCategory=value=>
        String(value||'')
          .toLowerCase()
          .trim()
          .replace(
            /[^a-z0-9]+/g,
            '-'
          );

      result=result.filter(
        p=>
          normalizeCategory(
            p.category
          )===normalized
      );
    }

    /*
      Full search:
      name
      brand
      model
      storage
      RAM
      color
      condition
      category
      description
    */
    if(q.trim()){

      const words=
        q
          .trim()
          .toLowerCase()
          .split(/\s+/)
          .filter(Boolean);

      result=result.filter(p=>{

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
          .toLowerCase();

        return words.every(
          word=>
            searchable.includes(word)
        );

      });
    }

    /*
      Brand filter.
    */
    if(brand!=='all'){
      result=result.filter(
        p=>p.brand===brand
      );
    }

    const num=value=>
      Number(
        String(value??0)
          .replace(/,/g,'')
          .replace(/[^\d.]/g,'')
      )||0;

    /*
      Sorting.
    */
    if(sort==='price-low'){
      result=[...result].sort(
        (a,b)=>
          num(a.price)-
          num(b.price)
      );
    }

    if(sort==='price-high'){
      result=[...result].sort(
        (a,b)=>
          num(b.price)-
          num(a.price)
      );
    }

    if(sort==='rating'){
      result=[...result].sort(
        (a,b)=>
          Number(b.rating||0)-
          Number(a.rating||0)
      );
    }

    return result;

  },[
    source,
    normalized,
    q,
    sort,
    brand
  ]);

  const isSearching=
    Boolean(q.trim());

  return (
    <SiteShell>

      <section className="container page-hero catalog-hero">

        <div>

          <p className="eyebrow">
            Certified refurbished
          </p>

          <h1>
            {isSearching
              ?`Search results for "${q.trim()}"`
              :title
            }
          </h1>

          <p>
            Quality-checked devices, transparent pricing, warranty support and secure checkout.
          </p>

        </div>

      </section>

      {/*
        IMPORTANT:
        Hide category chips while searching.

        This prevents search results from
        looking like category-only navigation.
      */}
      {!isSearching&&(
        <section className="container category-chips">

          {liveCategories.map(c=>(

            <Link
              className={
                type===c.slug
                  ?'active'
                  :''
              }
              to={`/buy/${c.slug}`}
              key={c.slug}
            >
              {c.name}
            </Link>

          ))}

        </section>
      )}

      <section className="container page-section">

        <div className="catalog-toolbar">

          <div className="catalog-search">

            <Search size={18}/>

            <input
              value={q}
              onChange={e=>
                setQ(e.target.value)
              }
              placeholder="Search products, model, storage or brand"
            />

          </div>

          <select
            value={brand}
            onChange={e=>
              setBrand(e.target.value)
            }
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
            onChange={e=>
              setSort(e.target.value)
            }
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
          ?(
            <ProductGrid
              items={items}
            />
          )
          :(
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
          )
        }

      </section>

    </SiteShell>
  );
}