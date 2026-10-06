import React,{useEffect,useMemo,useState} from 'react';

import {useParams,useSearchParams,Link} from 'react-router-dom';

import {SlidersHorizontal,Search} from 'lucide-react';

import RefurbishedPhonesPage from '../components/RefurbishedPhonesPage.jsx';



import SiteShell from '../components/SiteShell.jsx';

import ProductGrid from '../components/ProductGrid.jsx';

import ReferenceCategoryLanding from '../components/ReferenceCategoryLanding.jsx';



import {allProducts,categories} from '../data/catalog.js';

import {getCategoryLanding} from '../data/categoryLandingData.js';

import {referenceProducts} from '../data/referenceProducts.js';

import useAdminRows from '../hooks/useAdminRows.js';



export default function CatalogPage(){



  const {type}=useParams();

  const [params]=useSearchParams();



  const [q,setQ]=useState(

    params.get('q')||''

  );



  const [sort,setSort]=useState('featured');

  const [brand,setBrand]=useState(
    params.get('brand')||'all'
  );

  const maxPrice=useMemo(
    ()=>{
      const raw=params.get('maxPrice');
      const parsed=Number(raw||0);
      return Number.isFinite(parsed)&&parsed>0
        ?parsed
        :null;
    },
    [params]
  );



  useEffect(()=>{

    setQ(params.get('q')||'');

    setBrand(
      params.get('brand')||'all'
    );

  },[params]);



  const adminProducts=

    useAdminRows('Products',[]);



  const adminCategories=

    useAdminRows('Categories',[]);



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



  const source=useMemo(()=>{



    const map=new Map();



    allProducts.forEach(product=>{

      map.set(

        String(product.id),

        product

      );

    });



    /*

      Real reference-page products are also real storefront

      products in this project, so every displayed card can

      open a ProductPage and use Buy Now / Cart / Checkout.

    */

    referenceProducts.forEach(product=>{

      if(!map.has(String(product.id))){

        map.set(

          String(product.id),

          product

        );

      }

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



    if(normalized){



      const normalizeCategory=value=>

        String(value||'')

          .toLowerCase()

          .trim()

          .replace(

            /[^a-z0-9]+/g,

            '-'

          );



      const aliases={

        phones:['phones','phone'],

        laptops:['laptops','laptop'],

        smartwatches:[

          'smartwatches',

          'smartwatch',

          'watches'

        ],

        tablets:['tablets','tablet'],

        gaming:[

          'gaming',

          'gaming-consoles'

        ],

        cameras:[

          'cameras',

          'camera',

          'dslr-cameras'

        ],

        audio:[

          'audio',

          'audio-devices',

          'earbuds',

          'headphones'

        ],

        'amazon-devices':[

          'amazon',

          'amazon-devices'

        ]

      };



      const accepted=

        aliases[normalized]||

        [normalized];



      result=result.filter(p=>

        accepted.includes(

          normalizeCategory(

            p.category

          )

        )

      );

    }



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



    if(brand!=='all'){

      result=result.filter(

        p=>
          String(p.brand||'')
            .toLowerCase()===
          String(brand||'')
            .toLowerCase()

      );

    }



    const num=value=>

      Number(

        String(value??0)

          .replace(/,/g,'')

          .replace(/[^\d.]/g,'')

      )||0;



    if(maxPrice){

      result=result.filter(
        p=>num(p.price)<=maxPrice
      );

    }



    /*
      PRODUCT LISTING:
      Show only one card per actual model.
      Storage/RAM/colour/condition variants stay available
      inside the product page instead of repeating the same
      model many times in the catalogue.
    */
    const modelMap=new Map();

    const modelKey=product=>{

      const brandKey=
        String(product?.brand||'')
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g,'-');

      const rawValue=
        String(
          product?.model||
          product?.name||
          product?.id||
          ''
        )
          .trim()
          .toLowerCase();

      /*
        Variant names can look like:
        "OPPO Reno15 Pro 5G - Refurbished - 8 GB RAM - 256 GB - Blue - Refurbished"

        Everything after the first " - Refurbished" is only
        RAM/storage/colour/condition variant information.
        The catalogue should show the actual model once.
      */
      const baseModel=
        rawValue
          .split(/\s*-\s*refurbished\b/i)[0]
          .replace(
            /\s*-\s*\d+\s*gb\s*ram\b.*$/i,
            ''
          )
          .replace(
            /\s*-\s*\d+\s*(gb|tb)\b.*$/i,
            ''
          )
          .trim();

      const rawModel=
        baseModel
          .replace(/[^a-z0-9]+/g,'-')
          .replace(/^-|-$/g,'');

      return `${brandKey}|${rawModel}`;

    };

    const richness=product=>{

      const galleryCount=
        Array.isArray(product?.gallery)
          ?product.gallery.length
          :0;

      const imageCount=
        Array.isArray(product?.images)
          ?product.images.length
          :0;

      const videoCount=
        Array.isArray(product?.deviceVideos)
          ?product.deviceVideos.length
          :Array.isArray(product?.videos)
            ?product.videos.length
            :0;

      const specCount=
        Array.isArray(product?.specGroups)
          ?product.specGroups.length
          :0;

      return (
        galleryCount*10+
        imageCount*10+
        videoCount*20+
        specCount*5
      );

    };

    result.forEach(product=>{

      const key=modelKey(product);
      const existing=modelMap.get(key);

      if(
        !existing ||
        richness(product)>richness(existing)
      ){
        modelMap.set(key,product);
      }

    });

    result=[...modelMap.values()];



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

    brand,

    maxPrice

  ]);



  const isSearching=

    Boolean(q.trim());



  const referencePage=

    !isSearching &&

    type!=='all' &&

    Boolean(

      getCategoryLanding(type)

    );



  const isExactPhonesPage=

    !isSearching &&

    type==='phones';



  return (

    <SiteShell>



      {isExactPhonesPage

        ?(

          <RefurbishedPhonesPage

            source={source}

          />

        )

        :referencePage

          ?(

            <ReferenceCategoryLanding

              type={type}

              source={source}

            />

          )

          :(

            <>

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

            </>

          )

      }



      <section className={

        (referencePage||isExactPhonesPage)

          ?'container page-section ref-store-all-products'

          :'container page-section'

      }>



        {(referencePage||isExactPhonesPage)&&(

          <h2 className="ref-store-all-title">

            All Products

          </h2>

        )}



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



          {maxPrice&&(
            <button
              type="button"
              className="catalog-clear-price"
              onClick={()=>{
                const next=new URLSearchParams(params);
                next.delete('maxPrice');
                window.history.pushState(
                  {},
                  '',
                  `${window.location.pathname}${
                    next.toString()
                      ?`?${next.toString()}`
                      :''
                  }`
                );
                window.dispatchEvent(
                  new PopStateEvent('popstate')
                );
              }}
            >
              Under ₹{maxPrice.toLocaleString('en-IN')} ×
            </button>
          )}

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
