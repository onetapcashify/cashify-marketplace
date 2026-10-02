import { phones, laptops, services } from './siteData.js';

const builder='https://s3n.cashify.in/builder/';

const toNumber=value=>{
  const n=Number(String(value??0).replace(/[^\d.]/g,''));
  return Number.isFinite(n)?n:0;
};

const formatPrice=value=>
  Math.round(value).toLocaleString('en-IN');

const getBrand=name=>{
  const text=String(name||'').toLowerCase();

  if(text.includes('iphone')||text.includes('apple')) return 'Apple';
  if(text.includes('samsung')) return 'Samsung';
  if(text.includes('oneplus')) return 'OnePlus';
  if(text.includes('oppo')) return 'OPPO';
  if(text.includes('vivo')) return 'Vivo';
  if(text.includes('realme')) return 'Realme';
  if(text.includes('xiaomi')||text.includes('redmi')) return 'Xiaomi';
  if(text.includes('motorola')||text.includes('moto')) return 'Motorola';
  if(text.includes('pixel')||text.includes('google')) return 'Google';
  if(text.includes('nothing')) return 'Nothing';

  return 'Other';
};

const cleanModel=name=>
  String(name||'')
    .replace(/\s*-\s*Refurbished/gi,'')
    .replace(/\s*\(Refurbished\)/gi,'')
    .trim();

const variantTemplates=[
  {storage:'128 GB',condition:'Good',color:'Black',factor:0.94},
  {storage:'128 GB',condition:'Superb',color:'Blue',factor:1},
  {storage:'256 GB',condition:'Good',color:'Black',factor:1.07},
  {storage:'256 GB',condition:'Superb',color:'Blue',factor:1.13},
  {storage:'512 GB',condition:'Good',color:'White',factor:1.21},
  {storage:'512 GB',condition:'Superb',color:'Black',factor:1.28}
];

const ramFor=(brand,storage,index)=>{
  if(brand==='Apple') return '';

  if(storage==='128 GB'){
    return index===0?'6 GB':'8 GB';
  }

  if(storage==='256 GB'){
    return '8 GB';
  }

  return '12 GB';
};

const phoneProducts=phones.flatMap((p,phoneIndex)=>{
  const brand=getBrand(p.name);
  const model=cleanModel(p.name);

  const basePrice=toNumber(p.price)||19999;
  const baseMrp=toNumber(p.mrp)||Math.round(basePrice*1.3);

  return variantTemplates.map((variant,variantIndex)=>{
    const price=Math.round(basePrice*variant.factor);
    const mrp=Math.max(
      Math.round(baseMrp*variant.factor),
      price+3000
    );

    const saving=Math.max(mrp-price,0);
    const discount=Math.round((saving/mrp)*100);
    const ram=ramFor(brand,variant.storage,variantIndex);

    return {
      ...p,

      id:`phone-${phoneIndex+1}-v${variantIndex+1}`,

      category:'Phones',

      brand,

      model,

      storage:variant.storage,

      ram,

      color:variant.color,

      condition:variant.condition,

      name:[
        model,
        ram?`${ram} RAM`:'',
        variant.storage,
        variant.color,
        'Refurbished'
      ].filter(Boolean).join(' - '),

      /*
        IMPORTANT:
        We intentionally keep p.image.
        This means every variant of the same model uses that model's
        actual image instead of borrowing another brand's image.
      */
      image:p.image,

      saving:formatPrice(saving),

      price:formatPrice(price),

      mrp:formatPrice(mrp),

      discount:`${discount}%`,

      rating:p.rating||'4.5',

      stock:Math.max(2,8+phoneIndex-variantIndex),

      description:
        `${brand} ${model} refurbished smartphone in ${variant.color}. `+
        `${ram?`${ram} RAM with `:''}${variant.storage} storage, `+
        `${variant.condition} condition, quality checked functionality and warranty.`,

      searchText:[
        brand,
        model,
        p.name,
        ram,
        variant.storage,
        variant.color,
        variant.condition,
        'phone',
        'mobile',
        'smartphone',
        'refurbished'
      ].filter(Boolean).join(' ').toLowerCase()
    };
  });
});

const laptopProducts=laptops.map((p,i)=>{
  const brand=getBrand(p.name);

  return {
    ...p,

    id:`laptop-${i+1}`,

    category:'Laptops',

    brand:brand==='Other'
      ? ['Dell','Lenovo','Dell','Dell','HP','Lenovo'][i]||'Laptop'
      : brand,

    model:cleanModel(p.name),

    condition:'Good',

    stock:5+i,

    description:
      'Professionally inspected refurbished laptop with reliable performance and warranty.',

    searchText:[
      p.name,
      brand,
      'laptop',
      'refurbished'
    ].join(' ').toLowerCase()
  };
});

export const allProducts = [
  ...phoneProducts,

  ...laptopProducts,

  {
    id:'tablet-1',
    category:'Tablets',
    brand:'Apple',
    model:'iPad 10th Gen',
    storage:'64 GB',
    name:'Apple iPad 10th Gen - 64 GB - Refurbished',
    image:builder+'c70b7fed4eb64d5793f44f2eaa96d6b0.webp',
    saving:'8,500',
    price:'24,999',
    discount:'25%',
    rating:'4.6',
    mrp:'33,499',
    condition:'Superb',
    stock:7,
    description:'Quality checked refurbished tablet suitable for work, entertainment and study.',
    searchText:'apple ipad 10th gen 64 gb tablet refurbished'
  },

  {
    id:'tablet-2',
    category:'Tablets',
    brand:'Samsung',
    model:'Galaxy Tab S8',
    storage:'128 GB',
    name:'Samsung Galaxy Tab S8 - 128 GB - Refurbished',
    image:builder+'a12ac14b386b4b5286d424a83db4cad5.webp',
    saving:'12,000',
    price:'31,999',
    discount:'27%',
    rating:'4.5',
    mrp:'43,999',
    condition:'Good',
    stock:5,
    description:'Refurbished Android tablet with inspected display, battery and connectivity.',
    searchText:'samsung galaxy tab s8 128 gb tablet refurbished'
  },

  {
    id:'watch-1',
    category:'Smartwatches',
    brand:'Apple',
    model:'Watch Series 8',
    name:'Apple Watch Series 8 - Refurbished',
    image:builder+'f1f0df2917bd410b8da95675c63be2d1.webp',
    saving:'7,000',
    price:'19,999',
    discount:'26%',
    rating:'4.7',
    mrp:'26,999',
    condition:'Superb',
    stock:6,
    description:'Refurbished smartwatch with tested sensors, display and charging.',
    searchText:'apple watch series 8 smartwatch refurbished'
  },

  {
    id:'watch-2',
    category:'Smartwatches',
    brand:'Samsung',
    model:'Galaxy Watch 6',
    name:'Samsung Galaxy Watch 6 - Refurbished',
    image:builder+'b6a95f2838184c9889711ea20f6ff468.webp',
    saving:'5,500',
    price:'13,499',
    discount:'29%',
    rating:'4.4',
    mrp:'18,999',
    condition:'Good',
    stock:9,
    description:'Quality checked smartwatch with tested connectivity and battery performance.',
    searchText:'samsung galaxy watch 6 smartwatch refurbished'
  },

  {
    id:'gaming-1',
    category:'Gaming',
    brand:'Sony',
    model:'PlayStation 5',
    name:'Sony PlayStation 5 Console - Refurbished',
    image:builder+'0c3495851c3a4cce993176d995c53ab4.webp',
    saving:'10,000',
    price:'39,999',
    discount:'20%',
    rating:'4.8',
    mrp:'49,999',
    condition:'Superb',
    stock:4,
    description:'Refurbished gaming console inspected for ports, controller pairing and performance.',
    searchText:'sony playstation ps5 console gaming refurbished'
  },

  {
    id:'gaming-2',
    category:'Gaming',
    brand:'Sony',
    model:'PlayStation 5',
    name:'PlayStation 5 Rental / Refurbished',
    image:builder+'9a52376f2c3648dbb61eb213444793cb.gif',
    saving:'7,000',
    price:'24,999',
    discount:'22%',
    rating:'4.6',
    mrp:'31,999',
    condition:'Good',
    stock:4,
    description:'Quality checked gaming console with tested storage and connectivity.',
    searchText:'sony playstation ps5 rental refurbished gaming'
  },

  {
    id:'accessory-1',
    category:'Accessories',
    brand:'Apple',
    model:'Wireless Earbuds',
    name:'Premium Wireless Earbuds',
    image:builder+'d5a0ca0dd00e4291939f33651efcc942.webp',
    saving:'5,000',
    price:'14,999',
    discount:'25%',
    rating:'4.5',
    mrp:'19,999',
    condition:'Superb',
    stock:12,
    description:'Verified wireless audio accessory with tested charging case.',
    searchText:'premium wireless earbuds apple accessories'
  },

  {
    id:'accessory-2',
    category:'Accessories',
    brand:'Accessories',
    model:'Mobile Accessories',
    name:'New Mobile Accessories',
    image:builder+'75750a866d214239bf52a47ee57e6674.webp',
    saving:'2,500',
    price:'5,499',
    discount:'31%',
    rating:'4.3',
    mrp:'7,999',
    condition:'Good',
    stock:10,
    description:'Popular accessories selected for everyday mobile use.',
    searchText:'mobile phone accessories'
  }
];

export const categories = [
  {
    name:'Phones',
    slug:'phones',
    image:services.find(x=>x.title==='Buy Phone')?.image
  },
  {
    name:'Laptops',
    slug:'laptops',
    image:services.find(x=>x.title==='Buy Laptops')?.image
  },
  {
    name:'Smartwatches',
    slug:'smartwatches',
    image:services.find(x=>x.title==='Buy Smartwatches')?.image
  },
  {
    name:'Tablets',
    slug:'tablets',
    image:services.find(x=>x.title==='Buy Tablets')?.image
  },
  {
    name:'Gaming',
    slug:'gaming',
    image:services.find(x=>x.title==='Buy Gaming Consoles')?.image
  },
  {
    name:'Accessories',
    slug:'accessories',
    image:services.find(x=>x.title==='New Accessories')?.image
  }
];