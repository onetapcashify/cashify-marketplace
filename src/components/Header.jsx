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

import {Link,useNavigate} from 'react-router-dom';
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
    useAdminRows('Products',[]);

  /*
    Combine catalog products + active Admin products.

    Admin product with same ID overrides local catalog version.
  */
  const searchProducts=useMemo(()=>{

    const map=new Map();

    allProducts.forEach(p=>{
      map.set(
        String(p.id),
        p
      );
    });

    adminProducts
      .filter(x=>x.status==='Active')
      .forEach(x=>{

        const p={
          id:x.id,

          name:
            x.name||'',

          brand:
            x.brand||'',

          model:
            x.model||'',

          storage:
            x.storage||'',

          ram:
            x.ram||'',

          color:
            x.color||'',

          condition:
            x.condition||'',

          category:
            x.category||
            x.notes||
            '',

          description:
            x.description||'',

          searchText:
            x.searchText||''
        };

        map.set(
          String(p.id),
          {
            ...map.get(String(p.id)),
            ...p
          }
        );

      });

    return [
      ...map.values()
    ];

  },[adminProducts]);

  const [open,setOpen]=
    useState(false);

  const [q,setQ]=
    useState('');

  const [focus,setFocus]=
    useState(false);

  const navg=
    useNavigate();

  /*
    Search name + brand + model + storage + RAM +
    color + condition + category + description.
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
      .filter(p=>{

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

      })
      .slice(0,10);

  },[
    q,
    searchProducts
  ]);

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

          <div className="header-search-wrap">

            <form
              className="searchbox"
              onSubmit={submit}
            >

              <Search size={19}/>

              <input
                value={q}
                onFocus={()=>setFocus(true)}
                onBlur={()=>
                  setTimeout(
                    ()=>setFocus(false),
                    160
                  )
                }
                onChange={e=>
                  setQ(e.target.value)
                }
                aria-label="Search"
                placeholder="Search for mobiles, accessories & More"
                autoComplete="off"
              />

            </form>

            {focus&&q&&(
              <div className="search-suggestions">

                {suggestions.length
                  ?suggestions.map(p=>(

                    <Link
                      to={`/product/${p.id}`}
                      key={p.id}
                      onMouseDown={()=>
                        setFocus(false)
                      }
                    >

                      <Search size={14}/>

                      <span>
                        {p.name}
                      </span>

                    </Link>

                  ))
                  :(
                    <button
                      type="button"
                      onMouseDown={submit}
                    >
                      Search for “{q}”
                    </button>
                  )
                }

              </div>
            )}

          </div>

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

          <Link
            className="icon-link desktop-only"
            to="/wishlist"
            aria-label="Wishlist"
          >
            <Heart size={20}/>
          </Link>

          <Link
            className="icon-link cart-link"
            to="/cart"
            aria-label="Cart"
          >
            <ShoppingCart size={20}/>
          </Link>

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
                  user.name?.split(' ')[0]||
                  user.displayName?.split(' ')[0]||
                  'Account'
                )
                :'Login'
              }
            </span>

          </Link>

          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={()=>
              setOpen(v=>!v)
            }
          >
            {open
              ?<X/>
              :<Menu/>
            }
          </button>

        </div>

      </header>

      <nav
        className={`navline ${open?'open':''}`}
        aria-label="Primary navigation"
      >

        <div className="container nav-inner">

          {nav.map(n=>(

            <div
              className="nav-node"
              key={n}
            >

              <Link
                to={pathFor(n)}
                onClick={()=>
                  !menuGroups[n]&&
                  setOpen(false)
                }
                className="nav-item"
              >

                {n}

                <ChevronDown size={14}/>

              </Link>

              {menuGroups[n]&&(
                <div className="nav-dropdown">

                  {menuGroups[n].map(
                    ([label,path])=>{

                      const Icon=
                        iconFor(label);

                      return (
                        <Link
                          to={path}
                          onClick={()=>
                            setOpen(false)
                          }
                          key={`${n}-${label}`}
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