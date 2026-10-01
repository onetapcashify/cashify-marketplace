import { phones, laptops, services } from './siteData.js';
const builder='https://s3n.cashify.in/builder/';

export const allProducts = [
  ...phones.map((p,i)=>({ ...p, id:`phone-${i+1}`, category:'Phones', brand:['OPPO','Samsung','Samsung','Samsung','OnePlus','Apple'][i]||'Phone', condition:'Superb', stock:8+i, description:'Quality checked refurbished smartphone with warranty and verified functionality.' })),
  ...laptops.map((p,i)=>({ ...p, id:`laptop-${i+1}`, category:'Laptops', brand:['Dell','Lenovo','Dell','Dell','HP','Lenovo'][i]||'Laptop', condition:'Good', stock:5+i, description:'Professionally inspected refurbished laptop with reliable performance and warranty.' })),
  {id:'tablet-1',category:'Tablets',brand:'Apple',name:'Apple iPad 10th Gen - Refurbished',image:builder+'c70b7fed4eb64d5793f44f2eaa96d6b0.webp',saving:'8,500',price:'24,999',discount:'25%',rating:'4.6',mrp:'33,499',condition:'Superb',stock:7,description:'Quality checked refurbished tablet suitable for work, entertainment and study.'},
  {id:'tablet-2',category:'Tablets',brand:'Samsung',name:'Samsung Galaxy Tab S8 - Refurbished',image:builder+'a12ac14b386b4b5286d424a83db4cad5.webp',saving:'12,000',price:'31,999',discount:'27%',rating:'4.5',mrp:'43,999',condition:'Good',stock:5,description:'Refurbished Android tablet with inspected display, battery and connectivity.'},
  {id:'watch-1',category:'Smartwatches',brand:'Apple',name:'Apple Watch Series 8 - Refurbished',image:builder+'f1f0df2917bd410b8da95675c63be2d1.webp',saving:'7,000',price:'19,999',discount:'26%',rating:'4.7',mrp:'26,999',condition:'Superb',stock:6,description:'Refurbished smartwatch with tested sensors, display and charging.'},
  {id:'watch-2',category:'Smartwatches',brand:'Samsung',name:'Samsung Galaxy Watch 6 - Refurbished',image:builder+'b6a95f2838184c9889711ea20f6ff468.webp',saving:'5,500',price:'13,499',discount:'29%',rating:'4.4',mrp:'18,999',condition:'Good',stock:9,description:'Quality checked smartwatch with tested connectivity and battery performance.'},
  {id:'gaming-1',category:'Gaming',brand:'Sony',name:'Sony PlayStation 5 Console - Refurbished',image:builder+'0c3495851c3a4cce993176d995c53ab4.webp',saving:'10,000',price:'39,999',discount:'20%',rating:'4.8',mrp:'49,999',condition:'Superb',stock:4,description:'Refurbished gaming console inspected for ports, controller pairing and performance.'},
  {id:'gaming-2',category:'Gaming',brand:'Sony',name:'PlayStation 5 Rental / Refurbished',image:builder+'9a52376f2c3648dbb61eb213444793cb.gif',saving:'7,000',price:'24,999',discount:'22%',rating:'4.6',mrp:'31,999',condition:'Good',stock:4,description:'Quality checked gaming console with tested storage and connectivity.'},
  {id:'accessory-1',category:'Accessories',brand:'Apple',name:'Premium Wireless Earbuds',image:builder+'d5a0ca0dd00e4291939f33651efcc942.webp',saving:'5,000',price:'14,999',discount:'25%',rating:'4.5',mrp:'19,999',condition:'Superb',stock:12,description:'Verified wireless audio accessory with tested charging case.'},
  {id:'accessory-2',category:'Accessories',brand:'Accessories',name:'New Mobile Accessories',image:builder+'75750a866d214239bf52a47ee57e6674.webp',saving:'2,500',price:'5,499',discount:'31%',rating:'4.3',mrp:'7,999',condition:'Good',stock:10,description:'Popular accessories selected for everyday mobile use.'}
];

export const categories = [
  {name:'Phones',slug:'phones',image:services.find(x=>x.title==='Buy Phone')?.image},
  {name:'Laptops',slug:'laptops',image:services.find(x=>x.title==='Buy Laptops')?.image},
  {name:'Smartwatches',slug:'smartwatches',image:services.find(x=>x.title==='Buy Smartwatches')?.image},
  {name:'Tablets',slug:'tablets',image:services.find(x=>x.title==='Buy Tablets')?.image},
  {name:'Gaming',slug:'gaming',image:services.find(x=>x.title==='Buy Gaming Consoles')?.image},
  {name:'Accessories',slug:'accessories',image:services.find(x=>x.title==='New Accessories')?.image},
];

export const articles = [
  {id:'macbook-ultra-2026',title:'All Details About Apple Macbook Ultra Launching In 2026!',date:'13th Mar 2026',image:'https://s3bg.cashify.in/gpro/uploads/2026/03/09081716/Best-Refurbished-Laptops-Compared-MacBook-Pro-2019-vs-Lenovo-ThinkPad-E14-Gen-2.webp',excerpt:'A compact overview of launch expectations, positioning and what buyers should watch.',body:'The refurbished and new-device market changes quickly. This article demonstrates the article-detail layout, related content and responsive typography used throughout the site.'},
  {id:'iqoo-z11x-vs-oppo-k13',title:'iQOO Z11x vs OPPO K13: Confusion Solved',date:'13th Mar 2026',image:'https://s3bg.cashify.in/gpro/uploads/2026/03/12183532/iphone-17e-vs-google-pixel.png',excerpt:'Compare the key buying considerations in the budget smartphone segment.',body:'Use this CMS-driven page for editorial content. Admin users can create, edit, publish, unpublish and remove posts while keeping the public layout consistent.'},
  {id:'oppo-find-n6',title:'Oppo Find N6 Launch Date, Specs, Price, And More',date:'13th Mar 2026',image:'https://s3bg.cashify.in/gpro/uploads/2026/03/13040714/Xiaomi-17-Ultra-vs-Samsung-S26-Ultra-Which-Is-Better.jpg',excerpt:'A quick look at what matters in the latest foldable category.',body:'Article content can be stored in Firestore and rendered through this reusable detail template.'}
];
