import React,{useEffect,useMemo,useState} from 'react';



import {Link,useNavigate,useParams} from 'react-router-dom';



import {referenceProducts} from '../data/referenceProducts.js';



import {



  ChevronDown,



  ChevronLeft,



  ChevronRight,



  Check,



  CheckCircle2,



  CreditCard,



  Heart,



  Landmark,



  Laptop,



  MapPin,



  PackageCheck,



  RotateCcw,



  ShieldCheck,



  ShoppingCart,



  Smartphone,



  Star,



  Truck,



  WalletCards



} from 'lucide-react';







import SiteShell from '../components/SiteShell.jsx';



import {allProducts} from '../data/catalog.js';



import {getProductProfile,CASHIFY_INFO_VIDEOS} from '../data/productProfiles.js';



import useAdminRows from '../hooks/useAdminRows.js';



import {useAuth} from '../context/AuthContext.jsx';



import {load,save} from '../utils/localStore.js';







const money=value=>{



  const n=Number(



    String(value??0)



      .replace(/,/g,'')



      .replace(/[^\d.]/g,'')



  )||0;







  return n;



};







const unique=(values)=>



  [...new Set(values.filter(Boolean))];







const getGallery=product=>{



  const gallery=[];







  if(product?.image){



    gallery.push(product.image);



  }







  if(Array.isArray(product?.gallery)){



    gallery.push(...product.gallery);



  }







  if(Array.isArray(product?.images)){



    gallery.push(...product.images);



  }







  return unique(gallery);



};







const paymentMethods=[



  {



    title:'EMI',



    image:'https\://s3n.cashify.in/estore/505c3b6162494882973e631cdbace075.webp'



  },



  {



    title:'UPI',



    image:'https\://s3n.cashify.in/estore/08af477c2db941be8ba3c9848418acbb.webp'



  },



  {



    title:'Credit Card',



    image:'https\://s3n.cashify.in/estore/dd4488d3c2744e73ba66ba1e3191514d.webp'



  },



  {



    title:'COD Available',



    image:'https\://s3n.cashify.in/estore/f34918c7dfc54a3abc713f95a9a66c01.webp'



  },



  {



    title:'Split Payment',



    image:'https\://s3n.cashify.in/estore/33bbeafa433c4d1faf71fc8c4ded9761.webp'



  },



  {



    title:'Debit Card',



    image:'https\://s3n.cashify.in/estore/dd4488d3c2744e73ba66ba1e3191514d.webp'



  },



  {



    title:'Net banking',



    image:'https\://s3n.cashify.in/estore/6795b705936f494ca0362320d1360b46.webp'



  }



];







const trustItems=[



  ['50+ Lakh','Happy Customers'],



  ['27+ Lakh','Devices Sold'],



  ['32 Points','Quality Checks'],



  ['15 Days','Refund*'],



  ['Upto 12 Months','Warranty*'],



  ['200+','Cashify Stores']



];







const gradeImages={



  screen:[



    'https\://s3n.cashify.in/estore/3fc00304cee0492dbbb520a5a9d5e5e8.webp',



    'https\://s3n.cashify.in/estore/a27fe2b260f24a1dab7b4f6f3d43ff57.webp'



  ],



  display:[



    'https\://s3n.cashify.in/estore/4972745706644c50a23276148900d923.webp'



  ]



};







function ProductGallery({product,saved,onWishlist}){







  const gallery=getGallery(product);







  const [active,setActive]=useState(0);







  useEffect(()=>{



    setActive(0);



  },[product?.id]);







  const current=



    gallery[active]||



    product?.image;







  const prev=()=>{



    setActive(index=>



      index<=0



        ?gallery.length-1



        :index-1



    );



  };







  const next=()=>{



    setActive(index=>



      index>=gallery.length-1



        ?0



        :index+1



    );



  };







  return (



    <div className="pdp-media">







      <div className="pdp-thumb-column">







        {gallery.map((image,index)=>(



          <button



            type="button"



            className={



              `pdp-thumb ${



                active===index?'active':''



              }`



            }



            key={`${image}-${index}`}



            onClick={()=>setActive(index)}



          >



            <img



              src={image}



              alt={`${product.name} ${index+1}`}



            />



          </button>



        ))}







      </div>











      <div className="pdp-main-image">







        <button



          type="button"



          className={



            `pdp-heart ${



              saved?'active':''



            }`



          }



          onClick={onWishlist}



          aria-label="Wishlist"



        >



          <Heart



            size={21}



            fill={saved?'currentColor':'none'}



          />



        </button>







        {current&&(



          <img



            src={current}



            alt={product.name}



          />



        )}







        {gallery.length>1&&(



          <>



            <button



              type="button"



              className="pdp-image-arrow left"



              onClick={prev}



              aria-label="Previous image"



            >



              <ChevronLeft size={19}/>



            </button>







            <button



              type="button"



              className="pdp-image-arrow right"



              onClick={next}



              aria-label="Next image"



            >



              <ChevronRight size={19}/>



            </button>



          </>



        )}







        <div className="pdp-image-note">



          <span>32 Point Quality Check</span>



          <span>15 Days Refund*</span>



          <span>06 Months Warranty</span>



        </div>







      </div>







    </div>



  );



}







function ChoiceTabs({



  title,



  options,



  currentId,



  render,



  onChoose,



  helper



}){







  if(!options.length){



    return null;



  }







  return (



    <div className="pdp-choice-section">







      <div className="pdp-choice-heading">



        <strong>{title}</strong>







        {helper&&(



          <span>{helper}</span>



        )}



      </div>







      <div className="pdp-choice-options">







        {options.map(item=>(



          <button



            type="button"



            key={item.id}



            className={



              `pdp-choice-pill ${



                String(item.id)===



                String(currentId)



                  ?'active'



                  :''



              }`



            }



            onClick={()=>onChoose(item)}



          >



            {render(item)}



          </button>



        ))}







      </div>







    </div>



  );



}







function Accordion({



  title,



  children,



  defaultOpen=false



}){







  const [open,setOpen]=



    useState(defaultOpen);







  return (



    <div className="pdp-accordion">







      <button



        type="button"



        className="pdp-accordion-head"



        onClick={()=>



          setOpen(value=>!value)



        }



      >



        <span>{title}</span>







        <ChevronDown



          size={17}



          className={



            open?'rotate':''



          }



        />



      </button>







      {open&&(



        <div className="pdp-accordion-body">



          {children}



        </div>



      )}







    </div>



  );



}







function SpecCell({value,label}){







  if(!value){



    return null;



  }







  return (



    <div className="pdp-top-spec">



      <strong>{value}</strong>



      <span>{label}</span>



    </div>



  );



}







export default function ProductPage(){







  const {id}=useParams();



  const navigate=useNavigate();



  const {user}=useAuth();







  const adminProducts=



    useAdminRows('Products',[]);







  const source=useMemo(()=>{







    const map=new Map();







    allProducts.forEach(product=>{



      map.set(



        String(product.id),



        product



      );



    });



    /*

      Products shown on the real/reference category pages

      must also exist in ProductPage's source map.

    */

    referenceProducts.forEach(product=>{



      if(!map.has(String(product.id))){



        map.set(

          String(product.id),

          product

        );



      }



    });









    adminProducts



      .filter(product=>



        product.status==='Active'



      )



      .forEach(product=>{







        const old=



          map.get(



            String(product.id)



          )||{};







        const cleaned={};







        Object.entries(product)



          .forEach(([key,value])=>{



            if(



              value!=='' &&



              value!==null &&



              value!==undefined



            ){



              cleaned[key]=value;



            }



          });







        map.set(



          String(product.id),



          {



            ...old,



            ...cleaned



          }



        );







      });







    return [...map.values()];







  },[adminProducts]);







  const product=useMemo(



    ()=>



      source.find(



        item=>



          String(item.id)===



          String(id)



      ),



    [source,id]



  );







  const [saved,setSaved]=useState(



    ()=>



      load('wishlist',[])



        .some(item=>



          String(



            typeof item==='object'



              ?item.id



              :item



          )===String(id)



        )



  );







  const [pin,setPin]=useState('');



  const [deliveryStatus,setDeliveryStatus]=useState(null);







  const [warrantyAdded,setWarrantyAdded]=useState(false);



  const [comboAdded,setComboAdded]=useState(false);



  const [selectedColor,setSelectedColor]=useState('');







  useEffect(()=>{







    setDeliveryStatus(null);



    setWarrantyAdded(false);



    setComboAdded(false);



    setSelectedColor('');







    setSaved(



      load('wishlist',[])



        .some(item=>



          String(



            typeof item==='object'



              ?item.id



              :item



          )===String(id)



        )



    );







  },[id]);







  const requireLogin=()=>{







    if(user){



      return true;



    }







    navigate('/login');



    return false;



  };







  const toggleWishlist=()=>{







    if(!product||!requireLogin()){



      return;



    }







    let wishlist=



      load('wishlist',[]);







    const exists=



      wishlist.some(item=>



        String(



          typeof item==='object'



            ?item.id



            :item



        )===String(product.id)



      );







    if(exists){



      wishlist=



        wishlist.filter(item=>



          String(



            typeof item==='object'



              ?item.id



              :item



          )!==String(product.id)



        );



      setSaved(false);



    }else{



      wishlist.push(product);



      setSaved(true);



    }







    save('wishlist',wishlist);



  };







  const makePurchaseItem=({



    forceCombo=false,



    paymentMode='FULL'



  }={})=>{







    const useCombo=



      forceCombo||comboAdded;







    const warrantyAmount=



      warrantyAdded



        ?(



          getProductProfile(product)



            .extendedWarrantyAmount||



          2299



        )



        :0;







    const comboAmount=



      useCombo



        ?600



        :0;







    const payableTotal=



      money(product.price)+



      warrantyAmount+



      comboAmount;







    const emiMonthlyAmount=



      Math.max(



        1,



        Math.round(payableTotal/12)



      );







    return {



      ...product,







      qty:1,







      price:



        paymentMode==='EMI'



          ?String(emiMonthlyAmount)



          :String(payableTotal),







      basePrice:



        money(product.price),







      fullProductPrice:



        payableTotal,







      paymentMode,







      emiMonthlyAmount,



      emiTenureMonths:



        paymentMode==='EMI'



          ?12



          :null,







      addons:{



        extendedWarranty:{



          selected:warrantyAdded,



          months:



            warrantyAdded



              ?6



              :0,



          amount:warrantyAmount



        },







        combo:{



          selected:useCombo,



          name:



            useCombo



              ?'Compatible 65W Charging Adapter + White Charger'



              :'',



          amount:comboAmount



        }



      }



    };



  };











  const pushCartItem=item=>{







    const cart=



      load('cart',[]);







    const index=



      cart.findIndex(



        entry=>



          String(entry.id)===



          String(item.id)



      );







    if(index>=0){







      /*



        Same product in cart:



        update selected extras/price and increase quantity.



      */



      cart[index]={



        ...cart[index],



        ...item,



        qty:



          (cart[index].qty||1)+1



      };







    }else{







      cart.push(item);







    }







    save('cart',cart);



  };











  const addToCart=()=>{







    if(!product||!requireLogin()){



      return;



    }







    pushCartItem(



      makePurchaseItem()



    );







  };











  const addComboToCart=()=>{







    if(!product||!requireLogin()){



      return;



    }







    setComboAdded(true);







    pushCartItem(



      makePurchaseItem({



        forceCombo:true



      })



    );







  };











  const toggleWarranty=()=>{







    setWarrantyAdded(



      value=>!value



    );







  };











  const buyNow=()=>{







    if(!product||!requireLogin()){



      return;



    }







    save(



      'buyNowItem',



      makePurchaseItem()



    );







    navigate(



      '/checkout?mode=buy-now'



    );







  };











  const payWithEmi=()=>{







    if(!product||!requireLogin()){



      return;



    }







    const item=



      makePurchaseItem({



        paymentMode:'EMI'



      });







    save(



      'buyNowItem',



      item



    );







    navigate(



      '/checkout?mode=buy-now&payment=emi'



    );







  };







  if(!product){







    return (



      <SiteShell>







        <div className="container pdp-not-found">



          <h2>Product not found</h2>







          <button



            className="primary-btn"



            onClick={()=>



              navigate('/buy/all')



            }



          >



            Browse Products



          </button>



        </div>







      </SiteShell>



    );



  }







  const profile=



    getProductProfile(product);







  

  const extendedWarrantyAmount=
    Number(
      profile.extendedWarrantyAmount??
      2299
    )||0;

const price=money(product.price);



  const mrp=money(product.mrp);







  const discount=



    mrp>price



      ?Math.round(



        ((mrp-price)/mrp)*100



      )



      :0;







  const warrantyAmount=



    warrantyAdded



      ?(



        profile.extendedWarrantyAmount??

        2299



      )



      :0;







  const comboAmount=



    comboAdded



      ?600



      :0;







  const selectedTotal=



    price+



    warrantyAmount+



    comboAmount;







  const emi=



    Math.max(



      1,



      Math.round(selectedTotal/12)



    );







  const sameModel=



    source.filter(item=>



      String(item.model||'')



        .toLowerCase()===



      String(product.model||'')



        .toLowerCase()



    );







  const uniqueBy=(items,key)=>{







    const seen=new Set();







    return items.filter(item=>{







      const value=



        String(item?.[key]||'')



          .trim()



          .toLowerCase();







      if(!value||seen.has(value)){



        return false;



      }







      seen.add(value);



      return true;



    });



  };







  const conditions=



    uniqueBy(sameModel,'condition');







  const storages=



    uniqueBy(sameModel,'storage');







  const colours=



    uniqueBy(sameModel,'color');







  const choose=item=>{



    if(



      item &&



      String(item.id)!==



      String(product.id)



    ){



      navigate(`/product/${item.id}`);



    }



  };







  const galleryByColor=

    profile.galleryByColor &&

    typeof profile.galleryByColor==='object'

      ?profile.galleryByColor

      :{};



  const sourceColorOptions=

    Object.keys(galleryByColor)

      .filter(color=>

        color &&

        color.toLowerCase()!=='all' &&

        Array.isArray(galleryByColor[color]) &&

        galleryByColor[color].length

      );



  const activeColor=

    selectedColor||

    sourceColorOptions.find(color=>

      String(color).toLowerCase()===

      String(

        product.color||

        profile.specifications?.color||

        ''

      ).toLowerCase()

    )||

    sourceColorOptions[0]||

    product.color||

    profile.specifications?.color||

    '';



  const selectedColorGallery=

    activeColor &&

    Array.isArray(galleryByColor[activeColor]) &&

    galleryByColor[activeColor].length

      ?galleryByColor[activeColor]

      :(

        Array.isArray(galleryByColor.All) &&

        galleryByColor.All.length

          ?galleryByColor.All

          :null

      );



  const displayProduct={



    ...product,



    id:

      activeColor

        ?`${product.id}-${activeColor}`

        :product.id,



    color:

      activeColor||

      product.color,



    image:

      selectedColorGallery?.[0]||

      profile.coverImage||

      product.image,



    gallery:

      selectedColorGallery||

      (

        Array.isArray(profile.gallery) &&

        profile.gallery.length

          ?profile.gallery

          :product.gallery

      )



  };





  const specs={



    ...profile.specifications



  };







  const detailRows=



    Object.entries(specs)



      .filter(([,value])=>



        value!=='' &&



        value!==null &&



        value!==undefined



      );







  const checkDelivery=()=>{







    const clean=



      pin.replace(/\D/g,'');







    if(!/^[1-9][0-9]{5}$/.test(clean)){



      setDeliveryStatus({



        ok:false,



        message:'Enter a valid 6-digit Indian pincode.'



      });



      return;



    }







    setPin(clean);







    setDeliveryStatus({



      ok:true,



      message:`Delivery available to ${clean} across India.`



    });



  };







  const reviews=



    Array.isArray(product.reviews)



      ?product.reviews



      :[];







  const related=



    source



      .filter(item=>



        String(item.id)!==



        String(product.id)



      )



      .filter(item=>



        item.category===product.category



      )



      .slice(0,5);







  return (



    <SiteShell>







      <main className="pdp-page">







        <div className="container">







          <nav className="pdp-breadcrumb">







            <Link to="/">



              Home



            </Link>







            <span>›</span>







            <Link

              to={

                profile.type==='laptop'

                  ?'/buy/laptops'

                  :profile.type==='tablet'

                    ?'/buy/tablets'

                    :profile.type==='watch'

                      ?'/buy/smartwatches'

                      :profile.type==='gaming'

                        ?'/buy/gaming'

                        :profile.type==='accessory'

                          ?'/buy/accessories'

                          :'/buy/phones'

              }

            >

              {profile.type==='laptop'

                ?'Buy Refurbished Laptops'

                :profile.type==='tablet'

                  ?'Buy Refurbished Tablets'

                  :profile.type==='watch'

                    ?'Buy Refurbished Smartwatches'

                    :profile.type==='gaming'

                      ?'Buy Refurbished Gaming Consoles'

                      :profile.type==='accessory'

                        ?'Buy Accessories'

                        :'Buy Refurbished Mobile Phone'

              }

            </Link>







            <span>›</span>







            <span>



              {product.model||product.name}



            </span>







          </nav>











          <section className="pdp-hero">







            <div className="pdp-gallery-wrap">







              <ProductGallery



                product={displayProduct}



                saved={saved}



                onWishlist={toggleWishlist}



              />







              <div className="pdp-desktop-actions">







                <button



                  type="button"



                  className="pdp-cart-square"



                  onClick={addToCart}



                  aria-label="Add to cart"



                >



                  <ShoppingCart size={20}/>



                </button>







                <button



                  type="button"



                  className="pdp-emi-btn"



                  onClick={payWithEmi}



                >



                  Pay with EMI







                  <small>



                    From ₹{emi.toLocaleString('en-IN')}/month



                  </small>



                </button>







                <button



                  type="button"



                  className="pdp-buy-btn"



                  onClick={buyNow}



                >



                  Buy Now



                </button>







              </div>







            </div>











            <div className="pdp-info">







              <div className="pdp-title-row">







                <div>







                  <h1>



                    {product.model||product.name}

                    {['new','unboxed','open box']
                      .includes(
                        String(product.condition||'')
                          .toLowerCase()
                      )
                      ?''
                      :' - Refurbished'
                    }



                  </h1>







                  <p className="pdp-variant-line">



                    {product.warranty||(
                      profile.warrantyDuration
                        ?`${profile.warrantyDuration} Months Cashify Warranty`
                        :'Cashify Warranty'
                    )}, {product.condition||'Superb'}, {product.ram?`${product.ram} RAM / `:''}{product.storage||''}{activeColor?`, ${activeColor}`:''}



                  </p>







                </div>







                <button



                  type="button"



                  className={



                    `pdp-info-heart ${



                      saved?'active':''



                    }`



                  }



                  onClick={toggleWishlist}



                  aria-label="Wishlist"



                >



                  <Heart



                    size={20}



                    fill={saved?'currentColor':'none'}



                  />



                </button>







              </div>











              <div className="pdp-rating-line">



                <span>



                  {product.rating||'4.5'}



                </span>







                <Star



                  size={13}



                  fill="currentColor"



                />







                <span className="muted">



                  {product.totalRatings||product.totalRating||reviews.length||1} ratings



                </span>



              </div>











              <div className="pdp-price-row">







                {discount>0&&(



                  <span className="pdp-off">



                    -{discount}%



                  </span>



                )}







                <strong>



                  ₹{selectedTotal.toLocaleString('en-IN')}



                </strong>







                {mrp>price&&(



                  <del>



                    ₹{mrp.toLocaleString('en-IN')}



                  </del>



                )}







              </div>











              <div className="pdp-emi-text">



                ₹{emi.toLocaleString('en-IN')}/month EMI available.



                <button type="button">



                  View Plans



                </button>



              </div>











              <div className="pdp-small-note">



                Bajaj, Snapmint, Interest EMI available



              </div>







              {(warrantyAdded||comboAdded)&&(



                <div className="pdp-selected-total">







                  <span>



                    Selected total



                  </span>







                  <strong>



                    ₹{selectedTotal.toLocaleString('en-IN')}



                  </strong>







                  <small>



                    Product ₹{price.toLocaleString('en-IN')}



                    {warrantyAdded



                      ?` + Warranty ₹${extendedWarrantyAmount.toLocaleString('en-IN')}`



                      :''



                    }



                    {comboAdded



                      ?` + Combo ₹600`



                      :''



                    }



                  </small>







                </div>



              )}











              <ChoiceTabs



                title="Condition"



                options={conditions}



                currentId={



                  conditions.find(



                    item=>



                      item.condition===



                      product.condition



                  )?.id



                }



                render={item=>



                  item.condition



                }



                onChoose={choose}



                helper="Learn More"



              />











              <label className="pdp-grade-toggle">



                <input



                  type="checkbox"



                  defaultChecked



                />







                <span>



                  Show Grade Only



                </span>



              </label>











              {extendedWarrantyAmount>0&&(
<div className="pdp-warranty-card">







                <ShieldCheck size={25}/>







                <div>



                  <strong>



                    Add 6 Months extended warranty at ₹{(



                      extendedWarrantyAmount



                    ).toLocaleString('en-IN')}



                  </strong>







                  <span>



                    All devices have a default 6 Months warranty out of the box



                  </span>



                </div>







                <button



                  type="button"



                  className={



                    warrantyAdded



                      ?'added'



                      :''



                  }



                  onClick={toggleWarranty}



                >



                  {warrantyAdded



                    ?'Added'



                    :'Add'



                  }



                </button>







              </div>
              )}











              <ChoiceTabs



                title="Storage"



                options={storages}



                currentId={



                  storages.find(



                    item=>



                      item.storage===



                      product.storage



                  )?.id



                }



                render={item=>



                  item.ram



                    ?`${item.ram} RAM / ${item.storage}`



                    :item.storage



                }



                onChoose={choose}



              />











              {sourceColorOptions.length>0

                ?(

                  <div className="pdp-color-section">



                    <div className="pdp-color-heading">

                      <strong>

                        Color: {activeColor}

                      </strong>

                    </div>



                    <div className="pdp-color-swatches">



                      {sourceColorOptions.map(color=>{



                        const preview=

                          galleryByColor[color]?.[0];



                        return (

                          <button

                            type="button"

                            key={color}

                            className={

                              `pdp-color-swatch ${

                                activeColor===color

                                  ?'active'

                                  :''

                              }`

                            }

                            onClick={()=>

                              setSelectedColor(color)

                            }

                            title={color}

                            aria-label={`Select ${color}`}

                          >

                            {preview

                              ?(

                                <img

                                  src={preview}

                                  alt={color}

                                />

                              )

                              :(

                                <span>

                                  {color.charAt(0)}

                                </span>

                              )

                            }



                            {activeColor===color&&(

                              <span className="pdp-color-check">

                                ✓

                              </span>

                            )}

                          </button>

                        );

                      })}



                    </div>



                  </div>

                )

                :colours.length>1&&(

                  <ChoiceTabs

                    title="Colour"

                    options={colours}

                    currentId={

                      colours.find(

                        item=>

                          item.color===

                          product.color

                      )?.id

                    }

                    render={item=>

                      item.color

                    }

                    onChoose={choose}

                  />

                )

              }





              {profile.type==='phone'&&(



                <>



              <div className="pdp-combo-card">







                <div className="pdp-combo-products">







                  <img



                    src={displayProduct.image}



                    alt={product.name}



                  />







                  <span>+</span>







                  <div className="pdp-charger">



                    <Smartphone size={28}/>



                  </div>







                </div>







                <div className="pdp-combo-copy">







                  <strong>



                    {product.model||product.name} + Compatible 65W Charging Adapter + White Charger



                  </strong>







                  <span>



                    Combo Price



                  </span>







                  <div>



                    <b>



                      ₹{Math.round(price+600+warrantyAmount).toLocaleString('en-IN')}



                    </b>







                    {mrp>price&&(



                      <del>



                        ₹{Math.round(mrp+600).toLocaleString('en-IN')}



                      </del>



                    )}



                  </div>







                  <em>



                    Extra ₹400 combo savings



                  </em>







                </div>







                <button



                  type="button"



                  className={



                    comboAdded



                      ?'added'



                      :''



                  }



                  onClick={addComboToCart}



                >



                  {comboAdded



                    ?'Combo Added to Cart'



                    :'Add combo to Cart'



                  }



                </button>







              </div>



                </>



              )}











              <div className="pdp-refurb-link">



                <CheckCircle2 size={16}/>







                <span>



                  View Benefits of buying a Refurbished Device



                </span>







                <ChevronRight size={15}/>



              </div>











              <div className="pdp-payment-block">







                <h3>



                  Available Payment Methods



                </h3>







                <div className="pdp-payment-grid">







                  {paymentMethods.map(item=>(







                    <div



                      key={item.title}



                      className="pdp-payment-method"



                    >







                      <img



                        src={item.image}



                        alt=""



                      />







                      <span>



                        {item.title}



                      </span>







                    </div>







                  ))}







                </div>







              </div>











              <div className="pdp-delivery">







                <h3>



                  Check Delivery



                </h3>







                <div className="pdp-pin-box">







                  <MapPin size={18}/>







                  <input



                    value={pin}



                    onChange={event=>



                      setPin(event.target.value)



                    }



                    maxLength={6}



                    inputMode="numeric"



                    placeholder="Enter pincode"



                  />







                  <button



                    type="button"



                    onClick={checkDelivery}



                  >



                    Check



                  </button>







                </div>







                {deliveryStatus&&(



                  <div



                    className={



                      `pdp-delivery-result ${



                        deliveryStatus.ok



                          ?'available'



                          :'invalid'



                      }`



                    }



                  >



                    {deliveryStatus.ok



                      ?<CheckCircle2 size={15}/>



                      :<MapPin size={15}/>



                    }







                    <span>



                      {deliveryStatus.message}



                    </span>



                  </div>



                )}







              </div>







            </div>







          </section>











          {related.length>0&&(



            <section className="pdp-related-strip">







              <div className="pdp-related-scroll">







                {related.map(item=>(







                  <button



                    type="button"



                    className="pdp-related-item"



                    key={item.id}



                    onClick={()=>



                      navigate(



                        `/product/${item.id}`



                      )



                    }



                  >







                    <img



                      src={item.image}



                      alt={item.name}



                    />







                    <span className="pdp-related-price">



                      ₹{item.price}



                    </span>







                    <strong>



                      {item.model||item.name}



                    </strong>







                    <small>



                      Lowest Price



                    </small>







                    <span className="pdp-related-rating">



                      {item.rating||'4.5'}



                      <Star



                        size={10}



                        fill="currentColor"



                      />



                    </span>







                  </button>







                ))}







              </div>







            </section>



          )}











          <section className="pdp-section">







            <h2>



              Cashify Trust



            </h2>







            <div className="pdp-trust-grid">







              {trustItems.map(



                ([value,label],index)=>(







                  <div



                    className="pdp-trust-card"



                    key={label}



                  >







                    <div className="pdp-trust-icon">







                      {index===0&&



                        <CheckCircle2/>



                      }







                      {index===1&&



                        <Smartphone/>



                      }







                      {index===2&&



                        <Star/>



                      }







                      {index===3&&



                        <RotateCcw/>



                      }







                      {index===4&&



                        <ShieldCheck/>



                      }







                      {index===5&&



                        <PackageCheck/>



                      }







                    </div>







                    <strong>



                      {value}



                    </strong>







                    <span>



                      {label}



                    </span>







                  </div>







                )



              )}







            </div>







          </section>











          <section className="pdp-section">







            <h2>



              Grade Explained



            </h2>







            {profile.type==='laptop' &&



             Array.isArray(profile.gradeMedia) &&



             profile.gradeMedia.length



              ?(



                <div className="pdp-grade-copy">







                  <p>



                    <Check size={15}/>



                    <b>Overall</b> - Excellent cosmetic condition and no functional defects.



                  </p>







                  <p>



                    <Check size={15}/>



                    <b>Screen Glass</b> - No cracks, deep scratches, or visible damage. Very light hairline marks may be present.



                  </p>







                  {profile.gradeMedia.map(item=>(



                    <div key={item.label}>







                      <p>



                        <Check size={15}/>



                        <b>{item.label}</b> - {item.text}



                      </p>







                      <div className="pdp-grade-images">



                        {item.images.map(image=>(



                          <img



                            key={image}



                            src={image}



                            alt={`${product.model||product.name} ${item.label}`}



                          />



                        ))}



                      </div>







                    </div>



                  ))}







                </div>



              )



              :(



                <div className="pdp-grade-copy">







                  <p>



                    <Check size={15}/>



                    <b>Overall</b> - No Functional Defects



                  </p>







                  <p>



                    <Check size={15}/>



                    <b>Screen Glass</b> - Minimal scratches that are barely noticeable only when the screen is off



                  </p>







                  <div className="pdp-grade-images">



                    {gradeImages.screen.map(image=>(



                      <img



                        key={image}



                        src={image}



                        alt="Screen glass grade"



                      />



                    ))}



                  </div>







                  <p>



                    <Check size={15}/>



                    <b>Display</b> - Perfect condition



                  </p>







                  <div className="pdp-grade-images">



                    {gradeImages.display.map(image=>(



                      <img



                        key={image}



                        src={image}



                        alt="Display grade"



                      />



                    ))}



                  </div>







                  <p>



                    <Check size={15}/>



                    <b>Chrome/Body</b> - Minor signs of wear and light scratches. Invisible from a 20 cm distance.



                  </p>







                </div>



              )



            }







          </section>











          <section className="pdp-section">







            {profile.deviceVideos.length>0&&(



              <>



                <h2>



                  Product Video



                </h2>







                <div className="pdp-product-video-grid">







                  {profile.deviceVideos.map(



                    (video,index)=>(



                      <div



                        className="pdp-product-video-card"



                        key={`${video.url}-${index}`}



                      >



                        <video



                          controls



                          playsInline



                          preload="metadata"



                          poster={video.poster||displayProduct.image}



                        >



                          <source



                            src={video.url}



                            type="video/mp4"



                          />



                          Your browser does not support video playback.



                        </video>







                        <strong>



                          {video.label||



                            `${product.model||product.name} video`



                          }



                        </strong>



                      </div>



                    )



                  )}







                </div>



              </>



            )}











            <h2 className={



              profile.deviceVideos.length>0



                ?'pdp-subheading'



                :''



            }>



              Why Choose Cashify?



            </h2>







            <div className="pdp-video-grid">







              {CASHIFY_INFO_VIDEOS.map(



                (url,index)=>(



                  <div



                    className="pdp-video-card"



                    key={url}



                  >



                    <iframe



                      src={url}



                      title={`Refurbished device guide ${index+1}`}



                      loading="lazy"



                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"



                      allowFullScreen



                    />







                    <strong>



                      {



                        [



                          'All About Refurbished Phones',



                          'How Quality Checking Works',



                          'Why Buy Refurbished'



                        ][index]



                      }



                    </strong>



                  </div>



                )



              )}







            </div>











            <h2 className="pdp-subheading">



              Top Specs



            </h2>







            <div className="pdp-top-spec-grid">







              {(profile.topSpecs||[])



                .filter(([value])=>Boolean(value))



                .map(([value,label])=>(



                  <SpecCell



                    key={`${label}-${value}`}



                    value={value}



                    label={label}



                  />



                ))



              }







            </div>







          </section>











          <section className="pdp-section pdp-whats-in-box">







            <h2>



              {

                profile.type==='laptop'

                  ?'What comes with the laptop?'

                  :profile.type==='tablet'

                    ?'What comes with the tablet?'

                    :profile.type==='watch'

                      ?'What comes with the smartwatch?'

                      :profile.type==='gaming'

                        ?'What comes with the gaming console?'

                        :profile.type==='accessory'

                          ?'What comes with the accessory?'

                          :'What comes with the phone?'

              }



            </h2>







            <div className="pdp-box-layout">







              <div className="pdp-box-visual">



                {profile.type==='laptop'



                  ?<Laptop size={96}/>



                  :<PackageCheck size={96}/>



                }



              </div>







              <div className="pdp-box-points">



                {Array.isArray(profile.packageItems) &&

                 profile.packageItems.length

                  ?profile.packageItems.map(

                    (item,index)=>(

                      <div key={`${item}-${index}`}>

                        <strong>{item}</strong>

                        <p>

                          Included with the selected product as shown in the product listing.

                        </p>

                      </div>

                    )

                  )

                  :profile.type==='laptop'

                    ?(

                      <>

                        <div>

                          <strong>Laptop</strong>

                          <p>The selected refurbished laptop matching this product listing.</p>

                        </div>

                        <div>

                          <strong>Compatible charger</strong>

                          <p>A compatible charger is included with the laptop.</p>

                        </div>

                        <div>

                          <strong>Warranty card</strong>

                          <p>Warranty information is included with the device.</p>

                        </div>

                      </>

                    )

                    :profile.type==='accessory'
                      ?(
                        <>
                          <div>
                            <strong>{product.model||product.name}</strong>
                            <p>The selected accessory matching this product listing.</p>
                          </div>
                          <div>
                            <strong>Included accessories</strong>
                            <p>Accessories supplied with the selected product are included as shown in the listing.</p>
                          </div>
                          <div>
                            <strong>Warranty information</strong>
                            <p>{product.warranty||(
                              profile.warrantyDuration
                                ?`${profile.warrantyDuration} Months warranty`
                                :'Warranty as listed'
                            )}</p>
                          </div>
                        </>
                      )
                    :(

                      <>

                        <div>

                          <strong>A Minimalistic Box</strong>

                          <p>Every refurbished phone is safely packaged in a minimal box for protection during delivery.</p>

                        </div>

                        <div>

                          <strong>A compatible USB cable</strong>

                          <p>A quality-tested compatible cable is included for charging and data transfer.</p>

                        </div>

                        <div>

                          <strong>A warranty card</strong>

                          <p>Warranty details are included with the device.</p>

                        </div>

                      </>

                    )

                }



              </div>







            </div>







          </section>











          <section className="pdp-section">







            <h2>



              Product Details



            </h2>







            <p className="pdp-product-name">

              {product.model||product.name}

              {['new','unboxed','open box']
                .includes(
                  String(product.condition||'')
                    .toLowerCase()
                )
                ?''
                :' - Refurbished'
              }

            </p>



            {profile.description&&(

              <p className="pdp-source-description">

                {profile.description}

              </p>

            )}







            <Accordion



              title="General"



              defaultOpen



            >



              <div className="pdp-detail-table">



                <span>Brand</span>



                <strong>{product.brand||'—'}</strong>







                <span>Model</span>



                <strong>{product.model||product.name}</strong>







                <span>Category</span>



                <strong>{product.category||'—'}</strong>







                <span>Condition</span>



                <strong>{product.condition||'Refurbished'}</strong>







                <span>Warranty</span>



                <strong>{product.warranty||'6 Months'}</strong>



              </div>



            </Accordion>











            <Accordion title={



              profile.type==='phone'||profile.type==='tablet'



                ?'Display'



                :profile.type==='watch'



                  ?'Display & Design'



                  :'Specifications'



            }>



              <div className="pdp-detail-table">







                {detailRows.map(



                  ([key,value])=>(



                    <React.Fragment key={key}>



                      <span>



                        {



                          key



                            .replace(/([A-Z])/g,' $1')



                            .replace(/^./,x=>x.toUpperCase())



                        }



                      </span>







                      <strong>



                        {value}



                      </strong>



                    </React.Fragment>



                  )



                )}







              </div>



            </Accordion>
            {Array.isArray(profile.specGroups)&&
             profile.specGroups.length>0&&(
              <div className="pdp-source-spec-groups">
                {profile.specGroups.map((group,index)=>{
                  const rows=
                    Array.isArray(group?.specs)
                      ?group.specs.filter(
                        item=>
                          item &&
                          item.value!=='' &&
                          item.value!==null &&
                          item.value!==undefined
                      )
                      :[];

                  if(!rows.length){
                    return null;
                  }

                  return (
                    <Accordion
                      key={`${group.name||'Specifications'}-${index}`}
                      title={group.name||'Specifications'}
                    >
                      <div className="pdp-detail-table">
                        {rows.map((item,rowIndex)=>(
                          <React.Fragment
                            key={`${item.key||item.name||rowIndex}-${rowIndex}`}
                          >
                            <span>
                              {item.name||item.key||'Specification'}
                            </span>
                            <strong>
                              {item.value}
                            </strong>
                          </React.Fragment>
                        ))}
                      </div>
                    </Accordion>
                  );
                })}
              </div>
            )}















            {(profile.type==='phone'||



              profile.type==='tablet')&&(



              <>



                <Accordion title="Memory & Storage">



                  <div className="pdp-detail-table">



                    <span>RAM</span>



                    <strong>{specs.ram||'—'}</strong>







                    <span>Storage</span>



                    <strong>{specs.storage||'—'}</strong>







                    {specs.storageType&&(



                      <>



                        <span>Storage Type</span>



                        <strong>{specs.storageType}</strong>



                      </>



                    )}



                  </div>



                </Accordion>







                <Accordion title="Camera">



                  <div className="pdp-detail-table">



                    <span>Rear Camera</span>



                    <strong>{specs.rearCamera||'—'}</strong>







                    <span>Front Camera</span>



                    <strong>{specs.frontCamera||'—'}</strong>



                  </div>



                </Accordion>







                <Accordion title="Battery & Charging">



                  <div className="pdp-detail-table">



                    <span>Battery</span>



                    <strong>{specs.battery||'—'}</strong>







                    <span>Charging</span>



                    <strong>{specs.charging||'—'}</strong>



                  </div>



                </Accordion>







                <Accordion title="Network & Connectivity">



                  <div className="pdp-detail-table">



                    <span>Network</span>



                    <strong>{specs.network||'—'}</strong>







                    <span>SIM / Connectivity</span>



                    <strong>{specs.sim||specs.connectivity||'—'}</strong>



                  </div>



                </Accordion>



              </>



            )}











            {profile.type==='watch'&&(



              <>



                <Accordion title="Battery & Connectivity">



                  <div className="pdp-detail-table">



                    <span>Battery</span>



                    <strong>{specs.battery||'—'}</strong>







                    <span>Connectivity</span>



                    <strong>{specs.connectivity||'—'}</strong>







                    <span>Network</span>



                    <strong>{specs.network||'—'}</strong>



                  </div>



                </Accordion>







                <Accordion title="Sensors">



                  <div className="pdp-detail-table">



                    <span>Sensors</span>



                    <strong>{specs.sensors||'—'}</strong>







                    <span>Durability</span>



                    <strong>{specs.durability||'—'}</strong>



                  </div>



                </Accordion>



              </>



            )}











            {profile.type==='gaming'&&(



              <>



                <Accordion title="Performance">



                  <div className="pdp-detail-table">



                    <span>Processor</span>



                    <strong>{specs.processor||'—'}</strong>







                    <span>Graphics</span>



                    <strong>{specs.graphics||'—'}</strong>







                    <span>Memory</span>



                    <strong>{specs.memory||'—'}</strong>







                    <span>Storage</span>



                    <strong>{specs.storage||'—'}</strong>



                  </div>



                </Accordion>







                <Accordion title="Audio, Video & Connectivity">



                  <div className="pdp-detail-table">



                    <span>Video Output</span>



                    <strong>{specs.output||'—'}</strong>







                    <span>Audio</span>



                    <strong>{specs.audio||'—'}</strong>







                    <span>Connectivity</span>



                    <strong>{specs.connectivity||'—'}</strong>



                  </div>



                </Accordion>



              </>



            )}











            {profile.type==='laptop'&&(



              <>



                <Accordion title="Performance">



                  <div className="pdp-detail-table">



                    <span>Processor</span>



                    <strong>{specs.processor||'—'}</strong>







                    <span>RAM</span>



                    <strong>{specs.ram||'—'}</strong>







                    <span>Storage</span>



                    <strong>{specs.storage||'—'}</strong>



                  </div>



                </Accordion>







                <Accordion title="Display & Connectivity">



                  <div className="pdp-detail-table">



                    <span>Display</span>



                    <strong>{specs.display||'—'}</strong>







                    <span>Connectivity</span>



                    <strong>{specs.connectivity||'—'}</strong>







                    <span>Operating System</span>



                    <strong>{specs.operatingSystem||'—'}</strong>



                  </div>



                </Accordion>



              </>



            )}











            {profile.type==='accessory'&&(



              <Accordion title="Compatibility & Use">



                <div className="pdp-detail-table">



                  <span>Product Type</span>



                  <strong>{specs.productType||'Accessory'}</strong>







                  <span>Compatibility</span>



                  <strong>{specs.compatibility||'—'}</strong>







                  <span>Connectivity</span>



                  <strong>{specs.connectivity||'—'}</strong>







                  <span>Use</span>



                  <strong>{specs.useCase||'—'}</strong>



                </div>



              </Accordion>



            )}











            <Accordion title="Refurbishment & Support">



              <div className="pdp-detail-table">



                <span>Quality Check</span>



                <strong>32 Point Quality Check</strong>







                <span>Refund Window</span>



                <strong>15 Days*</strong>







                <span>Warranty</span>



                <strong>{product.warranty||'6 Months'}</strong>







                <span>Delivery</span>



                <strong>Available across India</strong>



              </div>



            </Accordion>







          </section>











          <section className="pdp-section pdp-review-section">







            <h2>



              Ratings & Reviews



            </h2>







            <div className="pdp-review-overview">







              <div className="pdp-review-big">







                <strong>



                  {product.rating||'4.0'}



                </strong>







                <div className="pdp-stars">



                  ★★★★☆



                </div>







                <span>



                  {reviews.length||1} Reviews & {product.totalRatings||product.totalRating||reviews.length||1} Ratings



                </span>







              </div>







              <div className="pdp-rating-bars">







                {[5,4,3,2,1].map(value=>(



                  <div key={value}>



                    <span>{value} ★</span>



                    <div>



                      <i



                        style={{



                          width:



                            value===4



                              ?'65%'



                              :'0%'



                        }}



                      />



                    </div>



                    <small>



                      {value===4



                        ?reviews.length||1



                        :0



                      }



                    </small>



                  </div>



                ))}







              </div>







            </div>











            <div className="pdp-review-list">







              {reviews.length>0



                ?reviews.map((review,index)=>(



                    <article



                      className="pdp-review-card"



                      key={`${review.name||'review'}-${index}`}



                    >



                      <strong>



                        {review.title||review.name||'Excellent device'}



                      </strong>







                      <div className="pdp-review-stars">



                        ★★★★☆



                      </div>







                      <p>



                        {review.comment||



                          'Excellent device'}



                      </p>







                      <span>



                        {review.name||



                          'Verified Buyer'}



                      </span>



                    </article>



                  ))



                :(



                  <article className="pdp-review-card">



                    <strong>



                      Excellent device



                    </strong>







                    <div className="pdp-review-stars">



                      ★★★★☆



                    </div>







                    <p>



                      Excellent device



                    </p>







                    <span>



                      Verified Buyer



                    </span>



                  </article>



                )



              }







            </div>







          </section>











          <section className="pdp-sustainability">







            <div className="pdp-sustainability-phone">



              <Smartphone size={128}/>



            </div>







            <div>







              <h2>



                Buy Smart. Buy Refurbished.



              </h2>







              <p>



                Refurbished devices help extend product life and reduce electronic waste while offering dependable technology at a lower cost.



              </p>







              <div className="pdp-sustainability-points">



                <span>Reduced e-waste</span>



                <span>Longer device life</span>



                <span>Lower resource usage</span>



                <span>More sustainable choice</span>



              </div>







            </div>







          </section>











          <section className="pdp-content-section">



            <h2>

              {profile.contentHeading||

                (

                  profile.type==='tablet'

                    ?'Buy Refurbished Tablets'

                    :profile.type==='watch'

                      ?'Buy Refurbished Smartwatches'

                      :profile.type==='gaming'

                        ?'Buy Refurbished Gaming Consoles'

                        :profile.type==='accessory'

                          ?'Buy Mobile Accessories'

                          :'Buy Refurbished and Second Hand Mobile Phone'

                )

              }

            </h2>



            <p>

              {profile.contentText||

                profile.description||

                product.description||

                'Review the product condition, specifications, warranty and delivery details before checkout.'

              }

            </p>



            <h3>Product condition and support</h3>



            <p>

              The selected listing shows its condition, warranty information, available variants, pricing and delivery support directly on this page.

            </p>



            <h3>Frequently Asked Questions</h3>



            <div className="pdp-faq-list">

              <Accordion title="Is warranty available?">

                The warranty period displayed on this product page applies to the selected listing.

              </Accordion>



              <Accordion title="Can I pay using EMI?">

                EMI can be selected from the product page and continues through the checkout flow.

              </Accordion>



              <Accordion title="Can I check delivery availability?">

                Yes. Enter any valid six-digit Indian pincode in the delivery checker.

              </Accordion>

            </div>



          </section>







        </div>











        <div className="pdp-mobile-actions">







          <button



            type="button"



            onClick={addToCart}



            aria-label="Add to cart"



          >



            <ShoppingCart size={22}/>



          </button>







          <button



            type="button"



            onClick={buyNow}



          >



            Buy Now



          </button>







        </div>







      </main>







    </SiteShell>



  );



}
