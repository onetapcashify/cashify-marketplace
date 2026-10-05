import React,{useMemo,useState} from 'react';

import {QRCodeSVG} from 'qrcode.react';

import {Link,useNavigate,useSearchParams} from 'react-router-dom';



import {load,save} from '../utils/localStore.js';

import {claimCoupon,upsertModuleRecord} from '../services/store.js';

import useAdminRows from '../hooks/useAdminRows.js';

import {useAuth} from '../context/AuthContext.jsx';



const defaultCoupon={

  id:'SEQ88',

  code:'SEQ88',

  name:'SEQ88',

  status:'Active',

  discountType:'percentage',

  discountValue:88,

  claimLimit:10,

  perUserLimit:1,

  usedCount:0

};



export default function CheckoutPage(){



  const nav=useNavigate();

  const {user}=useAuth();

  const [params]=useSearchParams();



  /*

    NORMAL CHECKOUT:

    /checkout



    BUY NOW CHECKOUT:

    /checkout?mode=buy-now

  */

  const cart=load('cart',[]);

  const buyNowProduct=load('buyNowItem',null);



  const isBuyNow=

    params.get('mode')==='buy-now' &&

    buyNowProduct;



  /*

    For Buy Now we checkout only that one product.

    Existing cart remains untouched.

  */

  const checkoutItems=isBuyNow

    ? [{

        ...buyNowProduct,

        qty:buyNowProduct.qty||1

      }]

    : cart;



  const raw=checkoutItems.reduce(

    (sum,item)=>{

      const price=

        Number(

          String(item.price||0)

            .replace(/,/g,'')

            .replace(/[^\d.]/g,'')

        )||0;



      return sum+(price*(item.qty||1));

    },

    0

  );



  const coupons=useAdminRows(

    'Coupons',

    [defaultCoupon]

  );



  const settings=useAdminRows(

    'Website Settings',

    [

      {

        id:'upi',

        name:'UPI ID',

        status:'Active',

        value:'subhamdebasish225\@okicici'

      },

      {

        id:'payee',

        name:'UPI Payee Name',

        status:'Active',

        value:'OneTap Cashify'

      }

    ]

  );



  const [code,setCode]=useState('');

  const [coupon,setCoupon]=useState(null);

  const [couponError,setCouponError]=useState('');



  const [address,setAddress]=useState({

    name:user?.name||user?.displayName||'',

    phone:'',

    email:user?.email||'',

    line:'',

    city:'',

    state:'',

    pin:''

  });



  const [utr,setUtr]=useState('');



  const discount=useMemo(()=>{



    if(!coupon) return 0;



    const val=Number(

      coupon.discountValue??

      coupon.value??

      0

    );



    return coupon.discountType==='fixed'

      ? Math.min(raw,val)

      : Math.round(raw*val/100);



  },[coupon,raw]);



  const total=Math.max(0,raw-discount);



  const findSetting=(name,fallback)=>

    settings.find(

      x=>x.status==='Active'&&

      x.name===name

    )?.value||fallback;



  const upi=findSetting(

    'UPI ID',

    'subhamdebasish225\@okicici'

  );



  const payee=findSetting(

    'UPI Payee Name',

    'OneTap Cashify'

  );



  const [order]=useState(

    ()=>`ORD${Date.now().toString().slice(-8)}`

  );



  const uri=useMemo(

    ()=>`upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(payee)}&am=${total.toFixed(2)}&cu=INR&tn=${encodeURIComponent(order)}`,

    [upi,payee,total,order]

  );



  const apply=()=>{



    const normalized=

      code.trim().toUpperCase();



    const c=coupons.find(

      x=>

        (

          x.code||

          x.name||

          x.id||

          ''

        ).toUpperCase()===normalized &&

        x.status==='Active'

    );



    if(!c){

      setCoupon(null);

      setCouponError(

        'Invalid or inactive coupon code.'

      );

      return;

    }



    const claims=load('couponClaims',{});



    const entry=

      claims[normalized]||

      {

        total:0,

        users:{}

      };



    const userKey=

      user?.uid||

      address.email||

      address.phone||

      'guest-device';



    if(

      Number(c.claimLimit||0)>0 &&

      (

        Number(c.usedCount||0)>=Number(c.claimLimit) ||

        entry.total>=Number(c.claimLimit)

      )

    ){

      setCouponError(

        'This coupon has reached its claim limit.'

      );

      return;

    }



    if(

      (entry.users?.[userKey]||0)>=

      Number(c.perUserLimit||1)

    ){

      setCouponError(

        'You have already used this coupon.'

      );

      return;

    }



    setCoupon(c);

    setCouponError('');

  };



  const place=async()=>{



    if(!checkoutItems.length){

      alert('No product selected for checkout.');

      return;

    }



    if(

      !address.name||

      !address.phone||

      !address.line||

      !address.pin

    ){

      alert(

        'Please complete delivery details'

      );

      return;

    }



    try{



      if(coupon){



        const userKey=

          user?.uid||

          address.email||

          address.phone||

          'guest-device';



        await claimCoupon(

          coupon.code||coupon.name,

          userKey

        );

      }



      const orders=load('orders',[]);



      const rec={

        id:order,



        name:address.name,



        status:

          utr

            ?'Payment Submitted'

            :'Payment Pending',



        value:

          `₹${total.toLocaleString('en-IN')}`,



        total:

          total.toLocaleString('en-IN'),



        date:

          new Date().toLocaleDateString(),



        address,



        utr,



        coupon:

          coupon?.code||

          coupon?.name||

          null,



        items:checkoutItems,



        purchaseType:

          isBuyNow

            ?'Buy Now'

            :'Cart',



        notes:

          utr

            ?`UTR: ${utr}`

            :'Awaiting UPI payment'

      };



      orders.unshift(rec);



      save('orders',orders);



      await upsertModuleRecord(

        'Orders',

        {

          ...rec,

          userId:user?.uid||null,

          email:address.email||''

        }

      );



      const payment={

        id:`PAY-${order}`,



        name:address.name,



        status:

          utr

            ?'Payment Submitted'

            :'Pending',



        value:

          `₹${total.toLocaleString('en-IN')}`,



        notes:

          utr

            ?`UPI ${upi} • UTR ${utr}`

            :`UPI ${upi} • Awaiting UTR`,



        orderId:order,



        userId:user?.uid||null,



        email:address.email||''

      };



      await upsertModuleRecord(

        'Payments',

        payment

      );



      /*

        Normal checkout:

        clear cart.



        Buy Now:

        do NOT clear existing cart.

        Clear only temporary Buy Now product.

      */

      if(isBuyNow){

        save('buyNowItem',null);

      }else{

        save('cart',[]);

      }



      nav(

        '/order-success',

        {

          state:{

            orderId:order

          }

        }

      );



    }catch(e){



      alert(

        e.message||

        'Unable to place order.'

      );



    }

  };



  return (

    <div className="checkout-page">



      <div className="checkout-shell">



        <div className="checkout-main">



          {isBuyNow

            ?(

              <Link to={`/product/${buyNowProduct.id}`}>

                ← Back to product

              </Link>

            )

            :(

              <Link to="/cart">

                ← Back to cart

              </Link>

            )

          }



          <h1>

            Checkout

          </h1>



          {/* ORDERED PRODUCTS */}



          <section className="checkout-section">



            <h2>

              Your Order

            </h2>



            {checkoutItems.map(item=>(

              <div

                className="checkout-product"

                key={item.id}

              >



                {item.image&&(

                  <img

                    src={item.image}

                    alt={item.name}

                  />

                )}



                <div>



                  <b>

                    {item.name}

                  </b>



                  <p>

                    {[

                      item.ram,

                      item.storage,

                      item.condition

                    ]

                      .filter(Boolean)

                      .join(' • ')

                    }

                  </p>



                  <strong>

                    ₹{item.price}

                  </strong>



                  {(item.qty||1)>1&&(

                    <span>

                      {' '}× {item.qty}

                    </span>

                  )}



                </div>



              </div>

            ))}



          </section>



          {/* DELIVERY */}



          <section className="checkout-section">



            <h2>

              Delivery details

            </h2>



            <div className="form-grid">



              {[

                ['name','Full Name'],

                ['phone','Mobile'],

                ['email','Email'],

                ['line','Address'],

                ['city','City'],

                ['state','State'],

                ['pin','PIN Code']

              ].map(([k,l])=>(

                <input

                  key={k}

                  placeholder={l}

                  value={address[k]}

                  onChange={e=>

                    setAddress({

                      ...address,

                      [k]:e.target.value

                    })

                  }

                />

              ))}



            </div>



          </section>



          {/* COUPON */}



          <section className="checkout-section">



            <h2>

              Apply offer

            </h2>



            <div className="coupon-row">



              <input

                value={code}

                onChange={e=>

                  setCode(e.target.value)

                }

                placeholder="Offer code"

              />



              <button onClick={apply}>

                Apply

              </button>



            </div>



            {coupon&&(

              <p className="success-text">



                {coupon.code||coupon.name}

                {' '}applied —{' '}



                {coupon.discountType==='fixed'

                  ?`₹${coupon.discountValue}`

                  :`${coupon.discountValue??coupon.value}%`

                }



                {' '}discount



              </p>

            )}



            {couponError&&(

              <p className="coupon-error">

                {couponError}

              </p>

            )}



          </section>



          {/* UPI */}



          <section className="checkout-section">



            <h2>

              UPI Payment

            </h2>



            <div className="qrbox">



              <h3>

                Scan & Pay ₹

                {total.toLocaleString('en-IN')}

              </h3>



              <QRCodeSVG

                value={uri}

                size={210}

              />



              <p>

                <b>UPI:</b> {upi}

              </p>



              <p>

                <b>Order:</b> {order}

              </p>



              <div className="upi-payment-options">



  <a

    className="upi-pay-option"

    href={uri}

  >

    <div className="upi-pay-icon phonepe-icon">
      <img
        src="https://cdn.simpleicons.org/phonepe/5F259F"
        alt="PhonePe"
        style={{
          width:'26px',
          height:'26px',
          objectFit:'contain',
          display:'block'
        }}
      />
    </div>



    <div>

      <strong>Pay with PhonePe</strong>

      <span>Pay using installed UPI app</span>

    </div>

  </a>





  <a

    className="upi-pay-option"

    href={uri}

  >

    <div className="upi-pay-icon gpay-icon">
      <img
        src="https://cdn.simpleicons.org/googlepay/4285F4"
        alt="Google Pay"
        style={{
          width:'30px',
          height:'30px',
          objectFit:'contain',
          display:'block'
        }}
      />
    </div>



    <div>

      <strong>Pay with Google Pay</strong>

      <span>Pay using installed UPI app</span>

    </div>

  </a>





  <a

    className="upi-pay-option"

    href={uri}

  >

    <div className="upi-pay-icon paytm-icon">
      <img
        src="https://cdn.simpleicons.org/paytm/00BAF2"
        alt="Paytm"
        style={{
          width:'34px',
          height:'34px',
          objectFit:'contain',
          display:'block'
        }}
      />
    </div>



    <div>

      <strong>Pay with Paytm</strong>

      <span>Pay using installed UPI app</span>

    </div>

  </a>





  <a

    className="upi-pay-option any-upi"

    href={uri}

  >

    <div className="upi-pay-icon">
      <img
        src="https://s3n.cashify.in/estore/08af477c2db941be8ba3c9848418acbb.webp"
        alt="UPI"
        style={{
          width:'34px',
          height:'34px',
          objectFit:'contain',
          display:'block'
        }}
      />
    </div>



    <div>

      <strong>Pay Using Any UPI App</strong>

      <span>BHIM, bank apps or any supported UPI app</span>

    </div>

  </a>



</div>



              <input

                value={utr}

                onChange={e=>

                  setUtr(e.target.value)

                }

                placeholder="Enter UTR / Transaction ID after payment"

              />



            </div>



          </section>



        </div>



        {/* SUMMARY */}



        <aside className="summary-card checkout-summary">



          <h3>

            Order Summary

          </h3>



          <p>

            <span>

              Subtotal

            </span>



            <b>

              ₹{raw.toLocaleString('en-IN')}

            </b>

          </p>



          <p>

            <span>

              Coupon {coupon?.code||coupon?.name||''}

            </span>



            <b>

              -₹{discount.toLocaleString('en-IN')}

            </b>

          </p>



          <p>

            <span>

              Delivery

            </span>



            <b>

              FREE

            </b>

          </p>



          <hr/>



          <p className="grand">



            <span>

              Final Amount

            </span>



            <b>

              ₹{total.toLocaleString('en-IN')}

            </b>



          </p>



          <button

            className="primary-btn block"

            onClick={place}

            disabled={!checkoutItems.length}

          >

            Place Order

          </button>



          <small>

            Payment remains pending until verified by admin.

          </small>



        </aside>



      </div>



    </div>

  );

}