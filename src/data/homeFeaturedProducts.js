/* =========================================================
   HOME PAGE — BUY REFURBISHED DEVICES
   Source-backed distinct models from the supplied real homepage.
   This changes only which products appear in that carousel.
========================================================= */

const normalize=value=>
  String(value||'')
    .toLowerCase()
    .replace(/\s*-\s*refurbished/gi,'')
    .replace(/\(refurbished\)/gi,'')
    .replace(/\s+/g,' ')
    .trim();


export const homeRefurbishedReference=[
  {
    match:'OPPO Reno15 Pro 5G',
    name:'OPPO Reno15 Pro 5G - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/cd2da442-a50c.jpg',
    price:'55399',
    mrp:'74999',
    rating:'4.0',
    totalRatings:1,
    badge:'Lowest Price'
  },

  {
    match:'Samsung Galaxy S24 Ultra 5G',
    name:'Samsung Galaxy S24 Ultra 5G - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/a69ef28f-fe68.jpg',
    price:'63599',
    mrp:'134999',
    rating:'4.8',
    totalRatings:183,
    badge:'Lowest Price'
  },

  {
    match:'OnePlus Nord 2 5G',
    name:'OnePlus Nord 2 5G - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/f6bf429a-1a54.jpg',
    price:'15999',
    mrp:'29399',
    rating:'4.0',
    totalRatings:262,
    badge:'Lowest Price'
  },

  {
    match:'OnePlus 12',
    name:'OnePlus 12 - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/3ba10c91-7df6.jpg',
    price:'41099',
    mrp:'69999',
    rating:'4.8',
    totalRatings:137,
    badge:'Lowest Price'
  },

  {
    match:'Samsung Galaxy Z Fold5',
    name:'Samsung Galaxy Z Fold5 - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/57426a66-b6ae.jpg',
    price:'72999',
    mrp:'88599',
    rating:'4.9',
    totalRatings:50,
    badge:'Lowest Price'
  },

  {
    match:'Apple iPhone 14',
    name:'Apple iPhone 14 - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/36ea82c3-6d6a.jpg',
    price:'35899',
    mrp:'69900',
    rating:'4.6',
    totalRatings:120,
    badge:'Lowest Price'
  },

  {
    match:'Apple iPhone 13',
    name:'Apple iPhone 13 - Refurbished',
    image:'https://s3n.cashify.in/cashify/product/img/xxhdpi/96a67b00-9389.jpg',
    price:'29599',
    mrp:'59900',
    rating:'4.4',
    totalRatings:150,
    badge:'Lowest Price'
  }
];


export function getHomeRefurbishedProducts(
  allProducts=[],
  referenceProducts=[]
){

  const source=[
    ...allProducts,
    ...referenceProducts
  ];

  return homeRefurbishedReference
    .map(reference=>{

      const target=
        normalize(reference.match);

      const product=
        source.find(item=>{

          const model=
            normalize(
              item.model||
              item.name
            );

          return (
            model===target ||
            model.includes(target) ||
            target.includes(model)
          );

        });

      /*
        Keep the existing local product ID so clicking the
        card continues to open the already-working ProductPage.
        Only listing presentation is aligned to the real homepage.
      */
      if(!product){
        return null;
      }

      const price=
        Number(reference.price)||0;

      const mrp=
        Number(reference.mrp)||price;

      const saving=
        Math.max(
          0,
          mrp-price
        );

      const discount=
        mrp>0
          ?Math.round(
            (saving/mrp)*100
          )
          :0;

      return {
        ...product,

        name:
          reference.name,

        image:
          reference.image,

        price:
          reference.price,

        mrp:
          reference.mrp,

        rating:
          reference.rating,

        totalRatings:
          reference.totalRatings,

        saving:
          String(saving),

        discount:
          `${discount}%`,

        saleTitle:
          reference.badge,

        assured:true
      };

    })
    .filter(Boolean);
}
