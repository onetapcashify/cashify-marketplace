import { phones, laptops, services } from './siteData.js';



const builder='https://s3n.cashify.in/builder/';



/* =========================================================

   HELPERS

\========================================================= */



const toNumber=value=>{

  const n=Number(

    String(value??0)

      .replace(/[^\d.]/g,'')

  );



  return Number.isFinite(n)?n:0;

};



const formatPrice=value=>

  Math.round(value).toLocaleString('en-IN');



const getBrand=name=>{

  const text=String(name||'').toLowerCase();



  if(text.includes('iphone')||text.includes('apple')){

    return 'Apple';

  }



  if(text.includes('samsung')){

    return 'Samsung';

  }



  if(text.includes('oneplus')){

    return 'OnePlus';

  }



  if(text.includes('oppo')){

    return 'OPPO';

  }



  if(text.includes('vivo')){

    return 'Vivo';

  }



  if(text.includes('realme')){

    return 'Realme';

  }



  if(

    text.includes('xiaomi')||

    text.includes('redmi')

  ){

    return 'Xiaomi';

  }



  if(

    text.includes('motorola')||

    text.includes('moto')

  ){

    return 'Motorola';

  }



  if(

    text.includes('pixel')||

    text.includes('google')

  ){

    return 'Google';

  }



  if(text.includes('nothing')){

    return 'Nothing';

  }



  if(text.includes('dell')){

    return 'Dell';

  }



  if(text.includes('lenovo')){

    return 'Lenovo';

  }



  if(text.includes('hp')){

    return 'HP';

  }



  if(text.includes('asus')){

    return 'ASUS';

  }



  if(text.includes('acer')){

    return 'Acer';

  }



  return 'Other';

};



const cleanModel=name=>

  String(name||'')

    .replace(/\s\*-\s\*Refurbished/gi,'')

    .replace(/\s\*\\(Refurbished\\)/gi,'')

    .trim();





/* =========================================================

   PHONE VARIANTS

\========================================================= */



const variantTemplates=[

  {

    storage:'128 GB',

    condition:'Good',

    color:'Black',

    factor:0.94

  },

  {

    storage:'128 GB',

    condition:'Superb',

    color:'Blue',

    factor:1

  },

  {

    storage:'256 GB',

    condition:'Good',

    color:'Black',

    factor:1.07

  },

  {

    storage:'256 GB',

    condition:'Superb',

    color:'Blue',

    factor:1.13

  },

  {

    storage:'512 GB',

    condition:'Good',

    color:'White',

    factor:1.21

  },

  {

    storage:'512 GB',

    condition:'Superb',

    color:'Black',

    factor:1.28

  }

];



const ramFor=(brand,storage,index)=>{



  if(brand==='Apple'){

    return '';

  }



  if(storage==='128 GB'){

    return index===0

      ?'6 GB'

      :'8 GB';

  }



  if(storage==='256 GB'){

    return '8 GB';

  }



  return '12 GB';

};





/* =========================================================

   PRODUCT MEDIA HELPERS

   Supports unique cover + gallery media per generated variant.

   Preferred source fields in siteData.js:
   - coverImages: string[]
   - galleries: string[][]
   - variantMedia: object keyed by generated product id

   Existing single image remains only as a compatibility fallback.
========================================================= */

const normaliseMediaList=value=>
  Array.isArray(value)
    ?value.filter(Boolean)
    :[];

const getProductMedia=(
  product,
  id,
  variantIndex
)=>{

  const explicit=
    product?.variantMedia?.[id]||{};

  const covers=
    normaliseMediaList(
      product?.coverImages
    );

  const galleries=
    Array.isArray(product?.galleries)
      ?product.galleries
      :[];

  const explicitGallery=
    normaliseMediaList(
      explicit.gallery
    );

  const indexedGallery=
    normaliseMediaList(
      galleries[variantIndex]
    );

  const cover=
    explicit.image||
    covers[variantIndex]||
    product.image||
    '';

  const gallery=[
    ...explicitGallery,
    ...indexedGallery
  ]
    .filter(
      image=>
        image &&
        image!==cover
    );

  return {
    image:cover,
    gallery:[
      ...new Set(gallery)
    ]
  };
};



/* =========================================================

   PHONE PRODUCTS

\========================================================= */



const phoneProducts=phones.flatMap(

  (p,phoneIndex)=>{



    const brand=getBrand(p.name);

    const model=cleanModel(p.name);



    const basePrice=

      toNumber(p.price)||

      19999;



    const baseMrp=

      toNumber(p.mrp)||

      Math.round(basePrice*1.3);



    return variantTemplates.map(

      (variant,variantIndex)=>{



        const price=

          Math.round(

            basePrice*variant.factor

          );



        const mrp=

          Math.max(

            Math.round(

              baseMrp*variant.factor

            ),

            price+3000

          );



        const saving=

          Math.max(

            mrp-price,

            0

          );



        const discount=

          mrp>0

            ?Math.round(

              (saving/mrp)*100

            )

            :0;



        const ram=

          ramFor(

            brand,

            variant.storage,

            variantIndex

          );



        /*

          First variant keeps old URL:

          phone-1

          phone-2

          etc.



          Other variants:

          phone-1-v2

          phone-1-v3

          ...

        */

        const id=

          variantIndex===0

            ?`phone-${phoneIndex+1}`

            :`phone-${phoneIndex+1}-v${variantIndex+1}`;



        const media=

          getProductMedia(

            p,

            id,

            variantIndex

          );



        const name=[

          model,

          ram

            ?`${ram} RAM`

            :'',

          variant.storage,

          variant.color,

          'Refurbished'

        ]

          .filter(Boolean)

          .join(' - ');



        return {

          ...p,



          id,



          category:'Phones',



          brand,



          model,



          storage:

            variant.storage,



          ram,



          color:

            variant.color,



          condition:

            variant.condition,



          name,



          /*

            Variant-specific cover + gallery media.

            Use coverImages / galleries / variantMedia from siteData.js.
            Existing p.image remains only as the fallback.

          */

          image:media.image,

          gallery:media.gallery,



          saving:

            formatPrice(saving),



          price:

            formatPrice(price),



          mrp:

            formatPrice(mrp),



          discount:

            `${discount}%`,



          rating:

            p.rating||'4.5',



          stock:

            Math.max(

              2,

              8+phoneIndex-variantIndex

            ),



          description:

            `${brand} ${model} refurbished smartphone in ${variant.color}. `+

            `${ram?`${ram} RAM with `:''}`+

            `${variant.storage} storage, `+

            `${variant.condition} condition, quality checked functionality and warranty.`,



          searchText:[

            brand,

            model,

            p.name,

            name,

            ram,

            variant.storage,

            variant.color,

            variant.condition,

            'phone',

            'mobile',

            'smartphone',

            'refurbished'

          ]

            .filter(Boolean)

            .join(' ')

            .toLowerCase()

        };

      }

    );

  }

);





/* =========================================================

   APPLE IPHONE PRODUCTS

\========================================================= */



const iphoneProducts=[



  {

    id:'iphone-14-128-midnight-best',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'128 GB',

    color:'Midnight',



    name:

      'Apple iPhone 14 - 6 GB RAM - 128 GB - Midnight - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc-box.jpg',



    saving:'27,501',

    price:'32,399',

    discount:'46%',

    rating:'4.8',

    mrp:'59,900',



    condition:'Best Value',

    stock:4,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 128 GB storage and Midnight finish.',



    searchText:

      'apple iphone 14 6 gb ram 128 gb midnight best value refurbished phone mobile smartphone'

  },



  {

    id:'iphone-14-128-midnight-superb',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'128 GB',

    color:'Midnight',



    name:

      'Apple iPhone 14 - 6 GB RAM - 128 GB - Midnight - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc-box.jpg',



    saving:'23,001',

    price:'36,899',

    discount:'38%',

    rating:'4.8',

    mrp:'59,900',



    condition:'Superb',

    stock:6,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 128 GB storage and Midnight finish.',



    searchText:

      'apple iphone 14 6 gb ram 128 gb midnight superb refurbished phone mobile smartphone'

  },



  {

    id:'iphone-14-128-midnight-good',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'128 GB',

    color:'Midnight',



    name:

      'Apple iPhone 14 - 6 GB RAM - 128 GB - Midnight - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc-box.jpg',



    saving:'24,401',

    price:'35,499',

    discount:'41%',

    rating:'4.8',

    mrp:'59,900',



    condition:'Good',

    stock:5,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 128 GB storage and Midnight finish.',



    searchText:

      'apple iphone 14 6 gb ram 128 gb midnight good refurbished phone mobile smartphone'

  },



  {

    id:'iphone-14-256-blue-fair',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'256 GB',

    color:'Blue',



    name:

      'Apple iPhone 14 - 6 GB RAM - 256 GB - Blue - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd-box.jpg',



    saving:'32,601',

    price:'37,299',

    discount:'47%',

    rating:'4.8',

    mrp:'69,900',



    condition:'Fair',

    stock:5,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 256 GB storage and Blue finish.',



    searchText:

      'apple iphone 14 6 gb ram 256 gb blue fair refurbished phone mobile smartphone'

  },



  {

    id:'iphone-14-512-blue-fair',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'512 GB',

    color:'Blue',



    name:

      'Apple iPhone 14 - 6 GB RAM - 512 GB - Blue - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd-box.jpg',



    saving:'48,101',

    price:'41,799',

    discount:'54%',

    rating:'4.8',

    mrp:'89,900',



    condition:'Fair',

    stock:4,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 512 GB storage and Blue finish.',



    searchText:

      'apple iphone 14 6 gb ram 512 gb blue fair refurbished phone mobile smartphone'

  },



  {

    id:'iphone-14-512-starlight-good',

    category:'Phones',

    brand:'Apple',

    model:'iPhone 14',

    ram:'6 GB',

    storage:'512 GB',

    color:'Starlight',



    name:

      'Apple iPhone 14 - 6 GB RAM - 512 GB - Starlight - Refurbished',



    image:

      'https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd-box.jpg',



    saving:'46,401',

    price:'43,499',

    discount:'52%',

    rating:'4.8',

    mrp:'89,900',



    condition:'Good',

    stock:4,



    description:

      'Apple iPhone 14 refurbished smartphone with 6 GB RAM, 512 GB storage and Starlight finish.',



    searchText:

      'apple iphone 14 6 gb ram 512 gb starlight good refurbished phone mobile smartphone'

  }



];





/* =========================================================

   LAPTOP PRODUCTS

\========================================================= */



const laptopProducts=laptops.map(

  (p,i)=>{



    let brand=getBrand(p.name);



    if(brand==='Other'){



      brand=

        [

          'Dell',

          'Lenovo',

          'Dell',

          'Dell',

          'HP',

          'Lenovo'

        ][i]||

        'Laptop';



    }



    const model=

      cleanModel(p.name);



    return {

      ...p,



      id:`laptop-${i+1}`,



      category:'Laptops',



      brand,



      model,



      storage:

        p.storage||'',



      ram:

        p.ram||'',



      color:

        p.color||'',



      condition:'Good',



      stock:5+i,



      description:

        `${brand} ${model} professionally inspected refurbished laptop with reliable performance and warranty.`,



      searchText:[

        p.name,

        brand,

        model,

        p.storage,

        p.ram,

        p.color,

        'laptop',

        'computer',

        'refurbished'

      ]

        .filter(Boolean)

        .join(' ')

        .toLowerCase()

    };

  }

);





/* =========================================================

   ALL PRODUCTS

\========================================================= */




/* =========================================================
   PRODUCT DETAIL ENRICHMENT

   Adds product-detail data without changing existing IDs,
   prices, search text, category structure or routes.
========================================================= */

const productDetailData={

  'OPPO Reno15 Pro 5G':{
    gallery:[
      'https://s3n.cashify.in/cashify/store/product/91afda3355514985903fa188eea84e9d.jpeg',
      'https://s3n.cashify.in/cashify/store/product/ebe395569aea42ae92f55984d1297869.jpeg',
      'https://s3n.cashify.in/cashify/store/product/d2ac30714f684464bb9598b34ae9addb.webp',
      'https://s3n.cashify.in/cashify/store/product/95af562999e041308c21bdea1d38c5eb.webp',
      'https://s3n.cashify.in/estore/f25c0b395ebd4793b54ec0404a8232f3.webp'
    ],

    specifications:{
      screen:'6.78 inches',
      rearCamera:'50 MP',
      frontCamera:'50 MP',
      battery:'6200 mAh',
      network:'5G',
      sim:'Dual SIM, GSM+GSM',
      fingerprint:'Yes'
    },

    warranty:'6 Months',
    totalRatings:1
  },


  'Samsung Galaxy S21 Ultra 5G':{
    gallery:[
      'https://s3n.cashify.in/cashify/product/img/xxhdpi/5ab3d199-fdb7.jpg'
    ],

    warranty:'6 Months',
    totalRatings:58
  },


  'Samsung Galaxy S24 Ultra 5G':{
    gallery:[
      'https://s3n.cashify.in/cashify/product/img/xxhdpi/a69ef28f-fe68.jpg'
    ],

    warranty:'6 Months',
    totalRatings:183
  }

};


const enrichProduct=product=>{

  const modelText=
    String(
      product.model||
      product.name||
      ''
    )
      .toLowerCase();


  const modelKey=
    Object.keys(productDetailData)
      .find(
        key=>
          modelText.includes(
            key.toLowerCase()
          )
      );


  const extra=
    modelKey
      ?productDetailData[modelKey]
      :{};


  const gallery=[
    ...(
      Array.isArray(extra.gallery)
        ?extra.gallery
        :[]
    ),
    ...(
      Array.isArray(product.gallery)
        ?product.gallery
        :[]
    ),
    product.image
  ]
    .filter(Boolean);


  return {

    ...product,

    ...extra,

    gallery:[
      ...new Set(gallery)
    ],

    specifications:{
      ...(extra.specifications||{}),
      ...(product.specifications||{}),

      ram:
        product.ram||
        product.specifications?.ram||
        extra.specifications?.ram||
        '',

      storage:
        product.storage||
        product.specifications?.storage||
        extra.specifications?.storage||
        '',

      color:
        product.color||
        product.specifications?.color||
        '',

      condition:
        product.condition||
        product.specifications?.condition||
        ''
    },

    warranty:
      product.warranty||
      extra.warranty||
      '6 Months',

    totalRatings:
      product.totalRatings||
      extra.totalRatings||
      0,

    reviews:
      Array.isArray(product.reviews)
        ?product.reviews
        :[],

    sale:{
      enabled:true,
      title:'Live Sale',
      durationHours:3,
      ...(product.sale||{})
    }

  };

};


const baseProducts = [



  ...phoneProducts,



  ...iphoneProducts,



  ...laptopProducts,



  /* =========================

     TABLETS

  ========================= */



  {

    id:'tablet-1',



    category:'Tablets',



    brand:'Apple',



    model:'iPad 10th Gen',



    storage:'64 GB',



    ram:'',



    color:'',



    name:

      'Apple iPad 10th Gen - 64 GB - Refurbished',



    image:

      builder+

      'c70b7fed4eb64d5793f44f2eaa96d6b0.webp',



    saving:'8,500',



    price:'24,999',



    discount:'25%',



    rating:'4.6',



    mrp:'33,499',



    condition:'Superb',



    stock:7,



    description:

      'Quality checked refurbished Apple iPad 10th Gen with 64 GB storage, suitable for work, entertainment and study.',



    searchText:

      'apple ipad ipad 10th gen 64 gb tablet superb refurbished'

  },



  {

    id:'tablet-2',



    category:'Tablets',



    brand:'Samsung',



    model:'Galaxy Tab S8',



    storage:'128 GB',



    ram:'',



    color:'',



    name:

      'Samsung Galaxy Tab S8 - 128 GB - Refurbished',



    image:

      builder+

      'a12ac14b386b4b5286d424a83db4cad5.webp',



    saving:'12,000',



    price:'31,999',



    discount:'27%',



    rating:'4.5',



    mrp:'43,999',



    condition:'Good',



    stock:5,



    description:

      'Refurbished Samsung Galaxy Tab S8 with inspected display, battery and connectivity.',



    searchText:

      'samsung galaxy tab s8 128 gb tablet good refurbished'

  },





  /* =========================

     SMARTWATCHES

  ========================= */



  {

    id:'watch-1',



    category:'Smartwatches',



    brand:'Apple',



    model:'Watch Series 8',



    storage:'',



    ram:'',



    color:'',



    name:

      'Apple Watch Series 8 - Refurbished',



    image:

      builder+

      'f1f0df2917bd410b8da95675c63be2d1.webp',



    saving:'7,000',



    price:'19,999',



    discount:'26%',



    rating:'4.7',



    mrp:'26,999',



    condition:'Superb',



    stock:6,



    description:

      'Refurbished Apple Watch Series 8 with tested sensors, display, connectivity and charging.',



    searchText:

      'apple watch series 8 smartwatch superb refurbished'

  },



  {

    id:'watch-2',



    category:'Smartwatches',



    brand:'Samsung',



    model:'Galaxy Watch 6',



    storage:'',



    ram:'',



    color:'',



    name:

      'Samsung Galaxy Watch 6 - Refurbished',



    image:

      builder+

      'b6a95f2838184c9889711ea20f6ff468.webp',



    saving:'5,500',



    price:'13,499',



    discount:'29%',



    rating:'4.4',



    mrp:'18,999',



    condition:'Good',



    stock:9,



    description:

      'Quality checked Samsung Galaxy Watch 6 with tested connectivity and battery performance.',



    searchText:

      'samsung galaxy watch 6 smartwatch good refurbished'

  },





  /* =========================

     GAMING

  ========================= */



  {

    id:'gaming-1',



    category:'Gaming',



    brand:'Sony',



    model:'PlayStation 5',



    storage:'',



    ram:'',



    color:'',



    name:

      'Sony PlayStation 5 Console - Refurbished',



    image:

      builder+

      '0c3495851c3a4cce993176d995c53ab4.webp',



    saving:'10,000',



    price:'39,999',



    discount:'20%',



    rating:'4.8',



    mrp:'49,999',



    condition:'Superb',



    stock:4,



    description:

      'Refurbished Sony PlayStation 5 console inspected for ports, controller pairing and gaming performance.',



    searchText:

      'sony playstation playstation 5 ps5 console gaming superb refurbished'

  },



  {

    id:'gaming-2',



    category:'Gaming',



    brand:'Sony',



    model:'PlayStation 5',



    storage:'',



    ram:'',



    color:'',



    name:

      'PlayStation 5 Rental / Refurbished',



    image:

      builder+

      '9a52376f2c3648dbb61eb213444793cb.gif',



    saving:'7,000',



    price:'24,999',



    discount:'22%',



    rating:'4.6',



    mrp:'31,999',



    condition:'Good',



    stock:4,



    description:

      'Quality checked PlayStation 5 gaming console with tested storage and connectivity.',



    searchText:

      'sony playstation ps5 rental console gaming good refurbished'

  },





  /* =========================

     ACCESSORIES

  ========================= */



  {

    id:'accessory-1',



    category:'Accessories',



    brand:'Apple',



    model:'Wireless Earbuds',



    storage:'',



    ram:'',



    color:'',



    name:

      'Premium Wireless Earbuds',



    image:

      builder+

      'd5a0ca0dd00e4291939f33651efcc942.webp',



    saving:'5,000',



    price:'14,999',



    discount:'25%',



    rating:'4.5',



    mrp:'19,999',



    condition:'Superb',



    stock:12,



    description:

      'Verified wireless audio accessory with tested charging case.',



    searchText:

      'premium wireless earbuds apple audio accessories superb'

  },



  {

    id:'accessory-2',



    category:'Accessories',



    brand:'Accessories',



    model:'Mobile Accessories',



    storage:'',



    ram:'',



    color:'',



    name:

      'New Mobile Accessories',



    image:

      builder+

      '75750a866d214239bf52a47ee57e6674.webp',



    saving:'2,500',



    price:'5,499',



    discount:'31%',



    rating:'4.3',



    mrp:'7,999',



    condition:'Good',



    stock:10,



    description:

      'Popular accessories selected for everyday mobile use.',



    searchText:

      'mobile phone smartphone accessories good'

  }



];


export const allProducts=
  baseProducts.map(
    enrichProduct
  );





/* =========================================================

   CATEGORIES

\========================================================= */



export const categories = [



  {

    name:'Phones',



    slug:'phones',



    image:

      services.find(

        x=>x.title==='Buy Phone'

      )?.image

  },



  {

    name:'Laptops',



    slug:'laptops',



    image:

      services.find(

        x=>x.title==='Buy Laptops'

      )?.image

  },



  {

    name:'Smartwatches',



    slug:'smartwatches',



    image:

      services.find(

        x=>x.title==='Buy Smartwatches'

      )?.image

  },



  {

    name:'Tablets',



    slug:'tablets',



    image:

      services.find(

        x=>x.title==='Buy Tablets'

      )?.image

  },



  {

    name:'Gaming',



    slug:'gaming',



    image:

      services.find(

        x=>x.title==='Buy Gaming Consoles'

      )?.image

  },



  {

    name:'Accessories',



    slug:'accessories',



    image:

      services.find(

        x=>x.title==='New Accessories'

      )?.image

  }



];





/* =========================================================

   ARTICLES



   AdminPage.jsx imports this.

   DO NOT REMOVE.

\========================================================= */



export const articles = [



  {

    id:'macbook-ultra-2026',



    title:

      'All Details About Apple Macbook Ultra Launching In 2026!',



    date:

      '13th Mar 2026',



    image:

      'https://s3bg.cashify.in/gpro/uploads/2026/03/09081716/Best-Refurbished-Laptops-Compared-MacBook-Pro-2019-vs-Lenovo-ThinkPad-E14-Gen-2.webp',



    excerpt:

      'A compact overview of launch expectations, positioning and what buyers should watch.',



    body:

      'The refurbished and new-device market changes quickly. This article demonstrates the article-detail layout, related content and responsive typography used throughout the site.'

  },



  {

    id:'iqoo-z11x-vs-oppo-k13',



    title:

      'iQOO Z11x vs OPPO K13: Confusion Solved',



    date:

      '13th Mar 2026',



    image:

      'https://s3bg.cashify.in/gpro/uploads/2026/03/12183532/iphone-17e-vs-google-pixel.png',



    excerpt:

      'Compare the key buying considerations in the budget smartphone segment.',



    body:

      'Use this CMS-driven page for editorial content. Admin users can create, edit, publish, unpublish and remove posts while keeping the public layout consistent.'

  },



  {

    id:'oppo-find-n6',



    title:

      'Oppo Find N6 Launch Date, Specs, Price, And More',



    date:

      '13th Mar 2026',



    image:

      'https://s3bg.cashify.in/gpro/uploads/2026/03/13040714/Xiaomi-17-Ultra-vs-Samsung-S26-Ultra-Which-Is-Better.jpg',



    excerpt:

      'A quick look at what matters in the latest foldable category.',



    body:

      'Article content can be stored in Firestore and rendered through this reusable detail template.'

  }



];