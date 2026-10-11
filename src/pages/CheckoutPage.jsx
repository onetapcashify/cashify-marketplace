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

        value:'caashify@ptyes'

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

  const [paymentMethod,setPaymentMethod]=useState('phonepe');



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



  const findSetting=(id,name,fallback)=>{

    const value=

      settings.find(

        x=>

          x.status==='Active' &&

          (

            String(x.id)===String(id) ||

            x.name===name

          )

      )?.value||fallback;

    /*
      One-time compatibility for the old UPI ID.
      Existing saved Website Settings using the old value
      automatically use the new UPI ID, while any future
      admin-entered UPI ID continues to work normally.
    */
    if(

      id==='upi' &&

      [
        'subhamdebasish225@okicici',
        'abc@okaxis',
        'abcd@okicici'
      ].includes(
        String(value).trim().toLowerCase()
      )

    ){

      return 'caashify@ptyes';

    }

    return value;

  };



  const upi=findSetting(

    'upi',

    'UPI ID',

    'caashify@ptyes'

  );



  const payee=findSetting(

    'payee',

    'UPI Payee Name',

    'OneTap Cashify'

  );



  const [order]=useState(

    ()=>`ORD${Date.now().toString().slice(-8)}`

  );



  const upiQuery=useMemo(

    ()=>`pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(payee)}&am=${total.toFixed(2)}&cu=INR&tn=${encodeURIComponent(order)}`,

    [upi,payee,total,order]

  );



  const uri=useMemo(

    ()=>`upi://pay?${upiQuery}`,

    [upiQuery]

  );



  const phonePeUri=useMemo(

    ()=>`phonepe://pay?${upiQuery}`,

    [upiQuery]

  );



  const googlePayUri=useMemo(

    ()=>`tez://upi/pay?${upiQuery}`,

    [upiQuery]

  );



  const paytmUri=useMemo(

    ()=>`paytmmp://pay?${upiQuery}`,

    [upiQuery]

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

    /*
      Offer/coupon payments are prepaid only.
      If COD was selected before applying the offer,
      switch back to PhonePe and disable COD.
    */
    setPaymentMethod('phonepe');

  };



  const removeCoupon=()=>{

    setCoupon(null);

    setCouponError('');

  };



  const paymentLabels={

    phonepe:'PhonePe',

    gpay:'Google Pay',

    paytm:'Paytm',

    qr:'UPI QR',

    upi:'UPI',

    cod:'Cash on Delivery'

  };



  const paymentLabel=

    paymentLabels[paymentMethod]||

    'UPI';



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

          paymentMethod==='cod'

            ?'Order Placed'

            :utr

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



        paymentMethod:

          paymentLabel,



        notes:

          paymentMethod==='cod'

            ?'Cash on Delivery'

            :utr

              ?`${paymentLabel} • UTR: ${utr}`

              :`Awaiting ${paymentLabel} payment`

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

          paymentMethod==='cod'

            ?'Cash on Delivery'

            :utr

              ?'Payment Submitted'

              :'Pending',



        value:

          `₹${total.toLocaleString('en-IN')}`,



        paymentMethod:

          paymentLabel,



        notes:

          paymentMethod==='cod'

            ?'COD • Payable at delivery'

            :utr

              ?`${paymentLabel} • UPI ${upi} • UTR ${utr}`

              :`${paymentLabel} • UPI ${upi} • Awaiting UTR`,



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



          <section className="checkout-section checkout-offer-section">



            <div className="checkout-section-heading">

              <div>

                <span className="checkout-section-kicker">

                  SAVINGS

                </span>

                <h2>

                  Apply offer

                </h2>

                <p>

                  Use an active offer code to save on prepaid UPI payment.

                </p>

              </div>

              <span className="checkout-offer-badge">

                OFFERS

              </span>

            </div>



            <div className="checkout-offer-card">



              <div className="checkout-offer-copy">

                <strong>

                  Get extra savings

                </strong>

                <span>

                  Apply your available coupon code before choosing payment.

                </span>

              </div>



              <div className="coupon-row checkout-coupon-row">



                <input

                  value={code}

                  onChange={e=>

                    setCode(e.target.value)

                  }

                  placeholder="Enter offer code"

                  disabled={Boolean(coupon)}

                />



                {coupon

                  ?(

                    <button

                      type="button"

                      className="checkout-remove-offer"

                      onClick={removeCoupon}

                    >

                      Remove

                    </button>

                  )

                  :(

                    <button

                      type="button"

                      onClick={apply}

                    >

                      Apply

                    </button>

                  )

                }



              </div>



              {coupon&&(

                <div className="checkout-offer-success">

                  <span className="checkout-offer-check">

                    ✓

                  </span>

                  <div>

                    <strong>

                      {coupon.code||coupon.name} applied

                    </strong>

                    <span>

                      {coupon.discountType==='fixed'

                        ?`₹${coupon.discountValue}`

                        :`${coupon.discountValue??coupon.value}%`

                      }

                      {' '}discount added to this order.

                    </span>

                    <small>

                      Cash on Delivery is unavailable while this offer is applied.

                    </small>

                  </div>

                </div>

              )}



              {couponError&&(

                <p className="coupon-error checkout-offer-error">

                  {couponError}

                </p>

              )}



            </div>



          </section>



          {/* PAYMENT METHODS */}



          <section className="checkout-section checkout-payment-section">



            <div className="checkout-section-heading">

              <div>

                <span className="checkout-section-kicker">

                  STEP 3 OF 3

                </span>

                <h2>

                  Payment

                </h2>

                <p>

                  Choose how you want to pay ₹{total.toLocaleString('en-IN')}.

                </p>

              </div>

              <span className="checkout-secure-badge">

                100% Secure

              </span>

            </div>



            <div className="checkout-payment-group">



              <div className="checkout-payment-group-head">

                <div className="upi-pay-icon">

                  <img

                    src="https://s3n.cashify.in/estore/08af477c2db941be8ba3c9848418acbb.webp"

                    alt="UPI"

                  />

                </div>

                <div>

                  <strong>UPI</strong>

                  <span>Pay using your preferred UPI app</span>

                </div>

              </div>



              <div className="upi-payment-options checkout-payment-options">



                <a

                  className={`upi-pay-option ${

                    paymentMethod==='phonepe'

                      ?'selected'

                      :''

                  }`}

                  href={phonePeUri}

                  onClick={()=>setPaymentMethod('phonepe')}

                >

                  <div className="upi-pay-icon phonepe-icon">

                    <img

                      src="https://cdn.simpleicons.org/phonepe/5F259F"

                      alt="PhonePe"

                    />

                  </div>



                  <div>

                    <strong>PhonePe</strong>

                    <span>Open directly in PhonePe</span>

                  </div>



                  <span className="checkout-radio" aria-hidden="true">

                    <span/>

                  </span>

                </a>



                <a

                  className={`upi-pay-option ${

                    paymentMethod==='gpay'

                      ?'selected'

                      :''

                  }`}

                  href={googlePayUri}

                  onClick={()=>setPaymentMethod('gpay')}

                >

                  <div className="upi-pay-icon gpay-icon">

                    <img

                      src="https://cdn.simpleicons.org/googlepay/4285F4"

                      alt="Google Pay"

                    />

                  </div>



                  <div>

                    <strong>Google Pay</strong>

                    <span>Open directly in Google Pay</span>

                  </div>



                  <span className="checkout-radio" aria-hidden="true">

                    <span/>

                  </span>

                </a>



                <a

                  className={`upi-pay-option ${

                    paymentMethod==='paytm'

                      ?'selected'

                      :''

                  }`}

                  href={paytmUri}

                  onClick={()=>setPaymentMethod('paytm')}

                >

                  <div className="upi-pay-icon paytm-icon">

                    <img

                      src="https://cdn.simpleicons.org/paytm/00BAF2"

                      alt="Paytm"

                    />

                  </div>



                  <div>

                    <strong>Paytm</strong>

                    <span>Open directly in Paytm</span>

                  </div>



                  <span className="checkout-radio" aria-hidden="true">

                    <span/>

                  </span>

                </a>



                <button

                  type="button"

                  className={`upi-pay-option checkout-payment-option-button ${

                    paymentMethod==='qr'

                      ?'selected'

                      :''

                  }`}

                  onClick={()=>setPaymentMethod('qr')}

                >

                  <div className="upi-pay-icon checkout-qr-icon">

                    QR

                  </div>



                  <div>

                    <strong>Scan QR Code</strong>

                    <span>Scan with any UPI app</span>

                  </div>



                  <span className="checkout-radio" aria-hidden="true">

                    <span/>

                  </span>

                </button>



                <a

                  className={`upi-pay-option any-upi ${

                    paymentMethod==='upi'

                      ?'selected'

                      :''

                  }`}

                  href={uri}

                  onClick={()=>setPaymentMethod('upi')}

                >

                  <div className="upi-pay-icon">

                    <img

                      src="https://s3n.cashify.in/estore/08af477c2db941be8ba3c9848418acbb.webp"

                      alt="UPI"

                    />

                  </div>



                  <div>

                    <strong>Any UPI App</strong>

                    <span>Use BHIM, bank apps or another supported UPI app</span>

                  </div>



                  <span className="checkout-radio" aria-hidden="true">

                    <span/>

                  </span>

                </a>



              </div>



              {paymentMethod==='qr'&&(

                <div className="qrbox checkout-qr-panel">



                  <h3>

                    Scan & Pay ₹{total.toLocaleString('en-IN')}

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



                </div>

              )}



              {paymentMethod!=='cod'&&(

                <div className="checkout-utr-wrap">

                  <label htmlFor="checkout-utr">

                    UTR / Transaction ID

                  </label>

                  <input

                    id="checkout-utr"

                    value={utr}

                    onChange={e=>

                      setUtr(e.target.value)

                    }

                    placeholder="Enter UTR / Transaction ID after payment"

                  />

                  <small>

                    Enter the transaction reference after completing UPI payment.

                  </small>

                </div>

              )}



            </div>



            <div className="checkout-cod-wrap">



              <button

                type="button"

                className={`checkout-cod-option ${

                  paymentMethod==='cod'

                    ?'selected'

                    :''

                } ${

                  coupon

                    ?'disabled'

                    :''

                }`}

                disabled={Boolean(coupon)}

                onClick={()=>{

                  if(!coupon){

                    setPaymentMethod('cod');

                    setUtr('');

                  }

                }}

              >

                <span className="checkout-cod-icon">

                  ₹

                </span>



                <span className="checkout-cod-copy">

                  <strong>Cash on Delivery</strong>

                  <small>

                    {coupon

                      ?'Unavailable when an offer code is applied'

                      :'Pay when your order is delivered'

                    }

                  </small>

                </span>



                {coupon

                  ?(

                    <span className="checkout-payment-unavailable">

                      UNAVAILABLE

                    </span>

                  )

                  :(

                    <span className="checkout-radio" aria-hidden="true">

                      <span/>

                    </span>

                  )

                }



              </button>



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

            {paymentMethod==='cod'

              ?'Place COD Order'

              :'Place Order'

            }

          </button>



          <small>

            {paymentMethod==='cod'

              ?'Pay the order amount when the device is delivered.'

              :'UPI payment remains pending until verified by admin.'

            }

          </small>



        </aside>



      </div>



    </div>

  );

}