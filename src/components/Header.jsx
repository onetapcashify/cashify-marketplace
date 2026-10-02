import React,{useMemo,useState} from 'react';

import {
  Search,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  User,
  Heart,
  Smartphone,
  Laptop,
  Watch,
  Tablet,
  Gamepad2,
  Wrench,
  Store,
  Newspaper,
  Headphones,
  PackageSearch,
  Tv,
  Camera,
  Speaker
} from 'lucide-react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import {allProducts} from '../data/catalog.js';
import {useAuth} from '../context/AuthContext.jsx';
import useAdminRows from '../hooks/useAdminRows.js';


const menuGroups={

  All:[
    ['Sell','/sell'],
    ['Buy Refurbished','/buy/all'],
    ['Repair','/repair'],
    ['Stores','/stores'],
    ['Articles','/articles'],
    ['Support','/support']
  ],

  'Sell Phone':[
    ['Apple','/sell/phone'],
    ['Samsung','/sell/phone'],
    ['Xiaomi','/sell/phone'],
    ['OnePlus','/sell/phone'],
    ['More Phone Brands','/sell/phone']
  ],

  'Sell Gadgets':[
    ['Phone','/sell/phone'],
    ['Laptop','/sell/laptop'],
    ['TV','/sell/tv'],
    ['Smart Speaker','/sell/speaker'],
    ['Tablet','/sell/tablet'],
    ['Gaming Consoles','/sell/gaming'],
    ['Smartwatch','/sell/smartwatch'],
    ['DSLR Camera','/sell/camera'],
    ['Earbuds','/sell/earbuds']
  ],

  'Buy Refurbished Devices':[
    ['Refurbished Phones','/buy/phones'],
    ['Refurbished Laptops','/buy/laptops'],
    ['Refurbished Smartwatches','/buy/smartwatches'],
    ['Refurbished Tablets','/buy/tablets'],
    ['Gaming Consoles','/buy/gaming'],
    ['Accessories','/buy/accessories']
  ],

  'Find New Gadget':[
    ['Find New Phone','/buy/phones'],
    ['Compare Phones','/compare'],
    ['Accessories','/buy/accessories']
  ],

  'Buy Laptop':[
    ['Refurbished Laptops','/buy/laptops'],
    ['Dell','/buy/laptops'],
    ['Lenovo','/buy/laptops'],
    ['HP','/buy/laptops']
  ],

  Store:[
    ['Find Nearby Store','/stores'],
    ['Sell at Store','/stores'],
    ['Repair at Store','/stores']
  ],

  More:[
    ['Repair','/repair'],
    ['Track Order','/track-order'],
    ['Warranty','/warranty'],
    ['Returns & Replacement','/returns'],
    ['FAQ','/faq'],
    ['Contact Us','/contact'],
    ['Articles','/articles']
  ]

};


const nav=[
  'All',
  'Sell Phone',
  'Sell Gadgets',
  'Buy Refurbished Devices',
  'Find New Gadget',
  'Buy Laptop',
  'Store',
  'More'
];


const pathFor=n=>

  n==='All'
    ?'/buy/all'

    :n==='Sell Phone'
      ?'/sell/phone'

      :n==='Sell Gadgets'
        ?'/sell'

        :n==='Buy Refurbished Devices'
          ?'/buy/all'

          :n==='Find New Gadget'
            ?'/buy/phones'

            :n==='Buy Laptop'
              ?'/buy/laptops'

              :n==='Store'
                ?'/stores'

                :'/articles';


const iconFor=label=>

  label.includes('Phone')
    ?Smartphone

    :label.includes('Laptop')
      ?Laptop

      :label.includes('Watch')
        ?Watch

        :label.includes('Tablet')
          ?Tablet

          :label.includes('Gaming')
            ?Gamepad2

            :label.includes('TV')
              ?Tv

              :label.includes('Camera')
                ?Camera

                :label.includes('Speaker')
                  ?Speaker

                  :label.includes('Earbud')
                    ?Headphones

                    :label.includes('Store')
                      ?Store

                      :label.includes('Repair')
                        ?Wrench

                        :label.includes('Article')
                          ?Newspaper

                          :label.includes('Support')
                            ?Headphones

                            :label.includes('Track')
                              ?PackageSearch

                              :null;


export default function Header(){

  const {user}=useAuth();

  const adminProducts=
    useAdminRows(
      'Products',
      []
    );


  /*
    Merge local catalog products +
    active Admin/Firebase products.

    Same product ID from Admin overrides
    the local catalog record.
  */
  const searchProducts=useMemo(()=>{

    const map=
      new Map();

    allProducts.forEach(product=>{

      map.set(
        String(product.id),
        product
      );

    });


    adminProducts
      .filter(
        product=>
          product.status==='Active'
      )
      .forEach(product=>{

        const mappedProduct={

          id:
            product.id,

          name:
            product.name||'',

          brand:
            product.brand||'',

          model:
            product.model||'',

          storage:
            product.storage||'',

          ram:
            product.ram||'',

          color:
            product.color||'',

          condition:
            product.condition||'',

          category:
            product.category||
            product.notes||
            '',

          description:
            product.description||'',

          searchText:
            product.searchText||''
        };


        map.set(
          String(mappedProduct.id),
          {
            ...map.get(
              String(mappedProduct.id)
            ),
            ...mappedProduct
          }
        );

      });


    return [
      ...map.values()
    ];

  },[
    adminProducts
  ]);


  const [open,setOpen]=
    useState(false);

  const [q,setQ]=
    useState('');

  const [focus,setFocus]=
    useState(false);

  const navg=
    useNavigate();


  /*
    Search across:

    name
    brand
    model
    storage
    RAM
    color
    condition
    category
    description
    searchText
  */
  const suggestions=useMemo(()=>{

    const term=
      q
        .trim()
        .toLowerCase();


    if(!term){
      return [];
    }


    const words=
      term
        .split(/\s+/)
        .filter(Boolean);


    return searchProducts
      .filter(product=>{

        const searchable=[

          product.name,
          product.brand,
          product.model,
          product.storage,
          product.ram,
          product.color,
          product.condition,
          product.category,
          product.description,
          product.searchText

        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();


        return words.every(
          word=>
            searchable.includes(word)
        );

      })
      .slice(
        0,
        10
      );

  },[
    q,
    searchProducts
  ]);


  /*
    Enter/search button:
    open complete results page.
  */
  const submit=e=>{

    e?.preventDefault?.();

    const term=
      q.trim();


    navg(
      term
        ?`/buy/all?q=${encodeURIComponent(term)}`
        :'/buy/all'
    );


    setOpen(false);
    setFocus(false);

  };


  return (
    <>

      <header className="topbar">

        <div className="container header-row">


          {/* LOGO */}

          <Link
            to="/"
            className="brand brand-logo"
            aria-label="Cashify Home"
          >

            <img
              src="/assets/cashify-logo.svg"
              alt="Cashify"
            />

          </Link>


          {/* SEARCH */}

          <div className="header-search-wrap">

            <form
              className="searchbox"
              onSubmit={submit}
            >

              <Search size={19}/>

              <input

                value={q}

                onFocus={()=>
                  setFocus(true)
                }

                onBlur={()=>

                  setTimeout(
                    ()=>{
                      setFocus(false);
                    },
                    160
                  )

                }

                onChange={e=>
                  setQ(
                    e.target.value
                  )
                }

                aria-label="Search"

                placeholder="Search for mobiles, accessories & More"

                autoComplete="off"

              />

            </form>


            {/* SEARCH SUGGESTIONS */}

            {focus&&q&&(

              <div className="search-suggestions">

                {suggestions.length
                  ?suggestions.map(product=>(

                    <Link

                      to={
                        `/product/${product.id}`
                      }

                      key={
                        product.id
                      }

                      /*
                        IMPORTANT:

                        Prevent the input blur from
                        removing the suggestion before
                        the click navigation occurs.
                      */
                      onMouseDown={e=>{
                        e.preventDefault();
                      }}

                      /*
                        After navigation starts,
                        close the dropdown and clear
                        the search box.
                      */
                      onClick={()=>{

                        setFocus(false);

                        setOpen(false);

                        setQ('');

                      }}

                    >

                      <Search size={14}/>

                      <span>
                        {product.name}
                      </span>

                    </Link>

                  ))

                  :(

                    <button

                      type="button"

                      onMouseDown={e=>{
                        e.preventDefault();
                      }}

                      onClick={submit}

                    >

                      Search for “{q}”

                    </button>

                  )
                }

              </div>

            )}

          </div>


          {/* LOCATION */}

          <Link
            className="location"
            to="/stores"
          >

            <MapPin size={22}/>

            <span>
              Select City
            </span>

            <ChevronDown size={15}/>

          </Link>


          {/* WISHLIST */}

          <Link
            className="icon-link desktop-only"
            to="/wishlist"
            aria-label="Wishlist"
          >

            <Heart size={20}/>

          </Link>


          {/* CART */}

          <Link
            className="icon-link cart-link"
            to="/cart"
            aria-label="Cart"
          >

            <ShoppingCart size={20}/>

          </Link>


          {/* LOGIN / ACCOUNT */}

          <Link

            className="login-btn"

            to={
              user
                ?'/account'
                :'/login'
            }

          >

            <User size={16}/>

            <span>

              {user
                ?(
                  user.name
                    ?.split(' ')[0]||

                  user.displayName
                    ?.split(' ')[0]||

                  'Account'
                )
                :'Login'
              }

            </span>

          </Link>


          {/* MOBILE MENU */}

          <button

            type="button"

            className="menu-btn"

            aria-label="Open menu"

            onClick={()=>
              setOpen(
                value=>!value
              )
            }

          >

            {open
              ?<X/>
              :<Menu/>
            }

          </button>

        </div>

      </header>


      {/* MAIN NAVIGATION */}

      <nav

        className={
          `navline ${
            open
              ?'open'
              :''
          }`
        }

        aria-label="Primary navigation"

      >

        <div className="container nav-inner">

          {nav.map(item=>(

            <div
              className="nav-node"
              key={item}
            >

              <Link

                to={
                  pathFor(item)
                }

                onClick={()=>{

                  if(
                    !menuGroups[item]
                  ){
                    setOpen(false);
                  }

                }}

                className="nav-item"

              >

                {item}

                <ChevronDown size={14}/>

              </Link>


              {menuGroups[item]&&(

                <div className="nav-dropdown">

                  {menuGroups[item].map(
                    ([label,path])=>{

                      const Icon=
                        iconFor(label);

                      return (

                        <Link

                          to={path}

                          onClick={()=>
                            setOpen(false)
                          }

                          key={
                            `${item}-${label}`
                          }

                        >

                          {Icon&&(
                            <Icon size={17}/>
                          )}

                          <span>
                            {label}
                          </span>

                        </Link>

                      );

                    }
                  )}

                </div>

              )}

            </div>

          ))}

        </div>


        {/* MOBILE QUICK LINKS */}

        <div className="mobile-quick-links">

          <Link to="/buy/phones">

            <Smartphone/>

            Phones

          </Link>


          <Link to="/buy/laptops">

            <Laptop/>

            Laptops

          </Link>


          <Link to="/buy/smartwatches">

            <Watch/>

            Watches

          </Link>


          <Link to="/repair">

            <Wrench/>

            Repair

          </Link>


          <Link to="/support">

            <Headphones/>

            Support

          </Link>

        </div>

      </nav>

    </>
  );
}