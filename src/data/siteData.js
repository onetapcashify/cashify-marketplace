const builder = 'https://s3n.cashify.in/builder/';
const web = 'https://s3n.cashify.in/cashify/web/';
const prod = 'https://s3ng.cashify.in/cashify/product/img/xxhdpi/';
const store = 'https://s3ng.cashify.in/cashify/store/product/';
const estore = 'https://s3ng.cashify.in/estore/';

// These URLs are taken directly from the supplied Cashify HTML source.
export const heroSlides = [
  { image:web+'f7266ab933a44b56a6d296fa3746ed55.webp', type:'dynamic', title:'Sell old phone', subtitle:'From your doorstep or at any of our 200 stores pan-India', cta:'Sell Now', to:'/sell/phone', color:'#42c8b7' },
  { image:web+'d2cb287292b443ba8dc28a5a74cfd85f.webp', type:'static', title:'Apple Exchange Offers', to:'/buy/phones' },
  { image:web+'acef5b9b2d8d41dda5c59ea2fcba77be.webp', type:'static', title:'Smart Upgrade Days', to:'/buy/phones' },
  { image:web+'d3c8434acf16440aa4bd72099ecd0ee4.png', type:'static', title:'Repair Offers', to:'/repair' },
  { image:web+'ae6dfa07f9eb4b8aa0be446913e67c00.webp', type:'static', title:'Pixel Upgrade', to:'/buy/phones' },
  { image:web+'f72a52782e844f13b38fac8f8f2851b6.webp', type:'static', title:'Rent PlayStation 5', to:'/buy/gaming' }
];

export const services = [
  ['Sell Phone','cd13764b153e46e19f9c6551ee52b5e6.webp','/sell/phone'],
  ['Buy Gadgets','19025a0f739948159cb2f8d029ba2b0d.webp','/buy/all'],
  ['Buy Phone','caa3a1efa51541a5aa37fd292790ea81.webp','/buy/phones'],
  ['Buy Laptops','3e1f26febd3f4056a7ac5104a122aa94.webp','/buy/laptops'],
  ['Rent PS5','9a52376f2c3648dbb61eb213444793cb.gif','/buy/gaming'],
  ['Buy Cameras & Lenses','16ee94e787b24915847842a6fee6b26a.webp','/buy/accessories'],
  ['Pixel Upgrade','0b9b080e1b32415f9e0c14fd2b453f75.webp','/buy/phones'],
  ['Buy Gaming Consoles','0c3495851c3a4cce993176d995c53ab4.webp','/buy/gaming'],
  ['Repair Phone','b35c134330e5422699aed92d1254789d.webp','/repair/phone'],
  ['Repair Laptop','16f1d0a9fb4448f8a971e259dc612f54.webp','/repair/laptop'],
  ['Find New Phone','4060695bca3447c2b7296aa5ba9ce827.webp','/buy/phones'],
  ['Nearby Stores','522d89598f594f0ca6f9d22e40517db6.webp','/stores'],
  ['New Accessories','75750a866d214239bf52a47ee57e6674.webp','/buy/accessories'],
  ['Buy Smartwatches','f1f0df2917bd410b8da95675c63be2d1.webp','/buy/smartwatches'],
  ['Recycle','ed7d743ec18f40f6b0cbb58bc6783d5b.webp','/sell'],
  ['Buy Tablets','c70b7fed4eb64d5793f44f2eaa96d6b0.webp','/buy/tablets'],
  ['Sell Your Car','59ac716944da403faf28ddc15e188ac3.gif','/sell']
].map(([title,file,to])=>({title,image:builder+file,to}));

export const sellDevices = [
  ['Sell Phone','81c3c74f0683463da548ae2cbe1fec28.webp','/sell/phone'],
  ['Sell Laptop','e6ba507509994216936925bdfeb6cfa8.webp','/sell/laptop'],
  ['Sell TV','1a1126c5c49f47b29cbb3aa63e6b385e.webp','/sell/tv'],
  ['Sell Tablet','a12ac14b386b4b5286d424a83db4cad5.webp','/sell/tablet'],
  ['Sell Gaming Consoles','5aba5b44686349a4a54d457016a257ac.webp','/sell/gaming'],
  ['Sell Smartwatch','b6a95f2838184c9889711ea20f6ff468.webp','/sell/smartwatch'],
  ['Sell Smart Speakers','abd3c512bbac4232a95e0e15f5d3bbaf.webp','/sell/speaker'],
  ['Sell More','fac6a787400b4107994d11ddd7b23fed.webp','/sell']
].map(([title,file,to])=>({title,image:builder+file,to}));

export const extraSellDevices = [
  ['Sell iMac','cc8cb8f956374059b0816815dd36b865.webp'],
  ['Sell Earbuds','d5a0ca0dd00e4291939f33651efcc942.webp'],
  ['Sell DSLR Camera','bdd27d377ce34bb0b73c8f1b4a860bbd.webp'],
  ['Sell AC','dd86b01438cb403fb4c01cef4a01d97a.webp'],
  ['Sell Refrigerator','b4faefec66da492b9b3bf8ff47d42041.webp'],
  ['Sell Washing Machine','a7c5f3ad01c64ab285a5b6bb019b47e1.webp']
].map(([title,file])=>({title,image:builder+file,to:'/sell'}));

export const phones = [
  [
    'OPPO Reno15 Pro 5G - Refurbished',
    'cd2da442-a50c.jpg',
    '19,400',
    '55,599',
    '26%',
    '4.0',
    '74,999'
  ],

  [
    'Samsung Galaxy S21 Ultra 5G - Refurbished',
    '5ab3d199-fdb7.jpg',
    '34,001',
    '39,599',
    '46%',
    '4.5',
    '73,600'
  ],

  [
    'Samsung Galaxy S24 Ultra 5G - Refurbished',
    'a69ef28f-fe68.jpg',
    '71,100',
    '63,899',
    '53%',
    '4.8',
    '1,34,999'
  ],

  [
    'Samsung Galaxy S20 FE 5G - Refurbished',
    'dcbaf057-2937.jpg',
    '17,800',
    '21,499',
    '29%',
    '4.5',
    '29,999'
  ],

  [
    'OnePlus Nord 2 5G - Refurbished',
    'f6bf429a-1a54.jpg',
    '14,000',
    '18,999',
    '26%',
    '4.4',
    '25,999'
  ],

  [
    'OnePlus 12 - Refurbished',
    '3ba10c91-7df6.jpg',
    '26,400',
    '38,599',
    '41%',
    '4.8',
    '64,999'
  ]
].map(
  ([name,file,saving,price,discount,rating,mrp])=>({
    name,
    image:prod+file,
    saving,
    price,
    discount,
    rating,
    mrp,
    assured:estore+'658f05797b2d4354a604fe75c5c0499a.webp'
  })
);
export const laptops = [
  ['Dell Latitude 3000 Series 3410 (Intel Core i5 10th Gen 14 Inch)','60ee3c0ba2b54467aff8b2bc7f10af66.png','15,500','26,499','37%','5.0','41,999'],
  ['Lenovo Thinkpad T Series T14 GEN 1','9d206927f0874a8897a771c4adc9c028.webp','17,850','29,999','37%','3.6','47,849'],
  ['Dell Latitude 5000 Series 5310','f068507f263a4c4db14669147351c953.png','12,700','26,299','33%','5.0','38,999'],
  ['Dell Latitude 5000 Series 5320','70dd9745f2a84dcd8e5e5714f75f88f6.png','13,200','31,799','29%','5.0','44,999'],
  ['Refurbished Laptop','d727f26cee564889987b8fa218718528.png','11,000','24,999','31%','4.5','35,999'],
  ['Refurbished Laptop','094811b0e8ea487bbfd18ef497c59a5b.webp','13,500','28,499','32%','4.6','41,999']
].map(([name,file,saving,price,discount,rating,mrp])=>({name,image:store+file,saving,price,discount,rating,mrp,assured:estore+'658f05797b2d4354a604fe75c5c0499a.webp'}));

export const hotDeals = [
  {image:estore+'d2866450bd5d4aec83dbf61277ab5e3f.webp',title:'Buyback Offers',to:'/sell'},
  {image:estore+'60a36c0f312c4cb88bb7612ad7e583e8.webp',title:'Mobile Exchange Offers',to:'/buy/phones'},
  {image:estore+'8123d1f070bb49b6bc8bbae2dccbd4be.webp',title:'Refurbished Device Offers',to:'/buy/all'},
  {image:estore+'4ea9f5e5bb2648a4ad05395b0b8e7e20.webp',title:'Mobile Repair Offers',to:'/repair'}
];

export const buyArticles = [
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/13150131/iPhone-13-mini.webp',title:'Apple iPhone 13 Mini Refurbished Deal: Warranty Included',to:'/articles/macbook-ultra-2026'},
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/11181430/Get-Refurbished-Bose-Portable-Smart-Speaker-with-Alexa-Specs-Price-Performance.webp',title:'Get Refurbished Bose Portable Smart Speaker With Alexa',to:'/articles/iqoo-z11x-vs-oppo-k13'},
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/11121638/Best-Deal-On-Refurbished-Xiaomi-Redmi-Note-11S.webp',title:'Best Deal On Refurbished Xiaomi Redmi Note 11S',to:'/articles/oppo-find-n6'}
];

export const sellArticles = [
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/13152024/512GB-Phones-The-Sweet-Spot-for-Resale-Value-in-2025.webp',title:'512GB Phones: The Sweet Spot For Resale Value In 2026',to:'/articles/macbook-ultra-2026'},
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/13151735/Why-iPhones-Hold-15-More-Resale-Value-Than-Android-in-India.webp',title:'Why iPhones Hold More Resale Value Than Android In India',to:'/articles/iqoo-z11x-vs-oppo-k13'},
  {image:'https://s3bg.cashify.in/gpro/uploads/2026/03/13151556/Verify-Your-Phones-%E2%80%98Clean-Status-Before-Selling-Avoid-Surprises.webp',title:'Verify Your Phone’s Clean Status Before Selling',to:'/articles/oppo-find-n6'}
];

export const recentNews = [
  {image:'https://s3bg.cashify.in/cms/2f16b30f3119464993a487a4daa1bde8.png',title:'OPPO F35 Price Leak: Could Start At Rs 37,999',date:'30th Sep 2026'},
  {image:'https://s3bg.cashify.in/cms/4ea707ff9d104a97a3435a6494e1ddf5.jpg',title:'Redmi 17 Sale On Amazon: Price Comes Down To Rs 22749!',date:'30th Sep 2026'},
  {image:'https://s3bg.cashify.in/cms/3bb12958d7b24075bde6ab4f7d00b971.jpg',title:'Samsung S25 FE Big Billion Sale Price Revealed!',date:'30th Sep 2026'},
  {image:'https://s3bg.cashify.in/cms/9a7f849e338140f8bc120189e5bf3f13.png',title:'Apple Pay India Launch Is Live',date:'30th Sep 2026'}
];

export const appAssets = {
  android:'https://s3ng.cashify.in/cashify/web/images/landing/svgs/google-play.svg',
  ios:'https://s3ng.cashify.in/cashify/web/images/landing/svgs/apple-store.svg',
  banner:'https://s3ng.cashify.in/estore/0f23d2860f77401db5d650d9e4e06344.webp?w=600'
};

export const stores = [
  ['Cashify Mobile Phone Store Airia Mall Sec 68 Gurugram','Ground Floor, Reach, AIRIA MALL, Badshahpur Sohna Road','11:00 AM - 10:00 PM'],
  ['Cashify Buy, Sell and Repair Mobile Store Sushant Lok','GF 133, Sushant Vyapar Kendra, Sushant Lok','10:00 AM - 09:00 PM'],
  ['Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon','Shop No.13, Old Delhi road','10:00 AM - 09:00 PM'],
  ['Cashify Buy, Sell Store MG Road Gurgaon','MG Road Metro, Exit Gate no 2','09:00 AM - 09:00 PM']
];

export const faqs = [
  ['What should I do if my Amazon voucher shows “Already Redeemed”?','Please contact support with your order details and voucher screenshot so the team can verify it.'],
  ['What documents do you need to sell old mobile phone?','A valid identity document may be required depending on the transaction and local rules.'],
  ['What if my pickup is delayed?','You can reschedule the pickup or contact support from your order page.']
];
