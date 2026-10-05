/* =========================================================
   PRODUCT-SPECIFIC DETAIL PROFILES

   Keep shared catalogue pricing / IDs in catalog.js.
   This file only supplies model/category-specific PDP content.

   Product data always wins over this profile when a field
   already exists in catalog/admin.
========================================================= */

const MODEL_PROFILES={

  'latitude 3000 series 3410':{
    type:'laptop',
    title:'Dell Latitude 3000 Series 3410',

    coverImage:
      'https://s3n.cashify.in/cashify/store/product/a47655db25e5461b96802413497cf575.png',

    gallery:[
      'https://s3n.cashify.in/cashify/store/product/a47655db25e5461b96802413497cf575.png',
      'https://s3n.cashify.in/cashify/store/product/60ee3c0ba2b54467aff8b2bc7f10af66.png',
      'https://s3n.cashify.in/cashify/store/product/079ba81fbab445de8a1144fc7ba10963.png',
      'https://s3n.cashify.in/cashify/store/product/5310c76f663140028cf2b887b8eaea50.png'
    ],

    extendedWarrantyAmount:1499,

    salesPackage:[
      'Laptop',
      'Compatible charger',
      'Warranty card'
    ],

    specifications:{
      brand:'Dell',
      model:'Latitude 3000 Series 3410',
      series:'Latitude',
      productType:'Laptop',
      dimensions:'322.5 x 214.8 x 17.9 mm',

      display:'35.56 cm (14 inch)',
      screen:'14 Inch',
      resolution:'1920 x 1080 Pixels',
      pixelDensity:'157 ppi',
      displayFeatures:'Full HD Anti-Glare LED-backlit display',
      touchscreen:'No',
      refreshRate:'60 Hz',

      processor:'Intel Core i5 10th Gen',
      processorName:'Intel Core i5',
      clockSpeed:'2.1 GHz',
      graphics:'Intel Iris Xe / UHD Graphics',

      ram:'8 GB',
      storage:'256 GB SSD',
      storageType:'SSD',

      battery:'Li-Ion',
      fastCharging:'Yes',

      wirelessLAN:'Wi-Fi 5 (802.11ac)',
      bluetooth:'Yes',
      bluetoothVersion:'4.2',

      speakers:'Built-In Stereo Speakers',
      microphone:'Digital Array Microphone',
      soundTechnology:'Stereo Speakers with Waves MaxxAudio Pro',

      keyboard:'Standard Ergonomic Chiclet Keyboard',
      fingerprint:'No',

      operatingSystem:'Windows',
      color:'Black',
      warranty:'6 Months Cashify Warranty',
      salesPackage:'Laptop, Compatible charger, warranty card'
    },

    topSpecs:[
      ['Intel Core i5 10th Gen','Processor'],
      ['14 Inch FHD','Display'],
      ['8 GB','RAM'],
      ['256 GB SSD','Storage'],
      ['Windows','Operating System']
    ],

    deviceVideos:[
      {
        url:
          'https://media.cashify.in/trc/optimised/10s/a75a1758f7f344f99e59261068ae9438.mp4',

        poster:
          'https://media.cashify.in/trc/optimised/thumbnail/a75a1758f7f344f99e59261068ae9438.webp',

        label:
          'Dell Latitude 3000 Series 3410 real device video'
      }
    ],

    gradeMedia:[
      {
        label:'Display',
        text:'Bright and clear display. No spots, lines, pressure marks, or discoloration.',
        images:[
          'https://s3n.cashify.in/estore/8388fc8b6dea4603b0ebd1e5cec60ff7.webp'
        ]
      },
      {
        label:'Body',
        text:'Very minimal scratches or dents. Clean keyboard, palm rest, and outer body.',
        images:[
          'https://s3n.cashify.in/estore/7c8dd2695b7b455ab33637e7df02971c.webp',
          'https://s3n.cashify.in/estore/6cae17ad51ba49498b2988f04eb9b1ee.webp',
          'https://s3n.cashify.in/estore/808b87dfdd2f44b0a4fcbc0489133090.webp'
        ]
      }
    ]
  },


  'apple watch ultra 2':{
    type:'watch',
    title:'Apple Watch Ultra 2 (49mm, GPS+Cellular)',
    coverImage:"https://s3n.cashify.in/cashify/store/product/6cf07e3836074a5c8688eabc7646df8f.png",
    gallery:[
      "https://s3n.cashify.in/cashify/store/product/6cf07e3836074a5c8688eabc7646df8f.png",
      "https://s3n.cashify.in/cashify/store/product/4a56ab8baaa64f6fbbed53dd956aae76.png",
      "https://s3n.cashify.in/cashify/store/product/bd09a2e031064993b032edc57d9499bb.png",
      "https://s3n.cashify.in/cashify/store/product/78ab402e6a544da1aad7855568110ac1.png",
      "https://s3n.cashify.in/cashify/store/product/2d4260f25c364f4288bc10f47e94c31e.png",
      "https://s3n.cashify.in/cashify/store/product/939b35dab158444d8e698d9855317594.png",
      "https://s3n.cashify.in/cashify/store/product/428622660e3449628230ecb0aae22cdf.png",
      "https://s3n.cashify.in/cashify/store/product/5451d686c0a645b9a0d48738084369b0.png",
      "https://s3n.cashify.in/cashify/store/product/8d2d02c0bd4e4be9889bff2fc55171b0.png",
      "https://s3n.cashify.in/cashify/store/product/9a9eb9e77a474a93906f0f8826768d41.png"
    ],
    description:"Refurbished Apple Apple Watch Ultra 2 (49mm, GPS+Cellular)- Refurbished at \u20b943699 on Cashify. Free shipping across India.",
    specifications:{
      brand:'Apple',
      series:'Apple Watch Ultra',
      dialSize:'49 mm',
      connectivity:'GPS+Cellular',
      dialType:'Natural-Titanium',
      strapType:'Blue Ocean Band',
      warranty:'6 Months Cashify Warranty',
      refurbishmentGrade:'Good'
    },
    topSpecs:[
      ['49 mm','Dial Size'],
      ['GPS+Cellular','Connectivity'],
      ['Apple Watch Ultra','Series'],
      ['Natural-Titanium','Dial'],
      ['6 Months','Warranty']
    ],
    deviceVideos:[
      {
        url:"https://media.cashify.in/trc/optimised/10s/5a6f9091d0334a1690bb430b3c26b39a.mp4",
        label:"Apple Watch Ultra 2 real device video"
      },
      {
        url:"https://media.cashify.in/trc/optimised/6s/5a6f9091d0334a1690bb430b3c26b39a.mp4",
        label:"Apple Watch Ultra 2 real device video"
      },
      {
        url:"https://media.cashify.in/trc/optimised/10s/297c4ba83a5446928fc317c188bca920.mp4",
        label:"Apple Watch Ultra 2 real device video"
      }
    ],
    packageItems:[
      'Apple Watch Ultra 2',
      'Compatible charging accessory',
      'Warranty information'
    ],
    contentHeading:'Buy Refurbished Apple Watch Ultra 2',
    contentText:"Buy Refurbished Apple Watch Ultra 2 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },


  'apple ipad 2020 8th generation':{
    type:'tablet',
    title:'Apple iPad 2020 8th Generation (10.2 inch, Wifi+Cellular)',
    coverImage:"https://s3n.cashify.in/cashify/store/product/37e9e13f1b404314918b7aedfe7d090a.png",
    gallery:[
      "https://s3n.cashify.in/cashify/store/product/37e9e13f1b404314918b7aedfe7d090a.png",
      "https://s3n.cashify.in/cashify/store/product/bfd2cb03c1124c5bb8451290b51f7688.png",
      "https://s3n.cashify.in/cashify/store/product/abaa7c4067414e38a84b201e03a11369.png",
      "https://s3n.cashify.in/cashify/store/product/40f25c0402124d21a476372cf17933a1.png",
      "https://s3n.cashify.in/cashify/store/product/00685477d1f548c1ae75e66a372d399d.png",
      "https://s3n.cashify.in/cashify/store/product/4857a8aaf78141068810cb6c03613808.png",
      "https://s3n.cashify.in/cashify/store/product/a1c45a49188140d2ac4eaa5d9bd41a2b.png",
      "https://s3n.cashify.in/cashify/store/product/14f447df951945a6b1c17cf9c00d8eb2.png",
      "https://s3n.cashify.in/cashify/store/product/a44c76727b8349fcaba0908cf9d04c77.png",
      "https://s3n.cashify.in/cashify/store/product/78411ff77ce14e29ac5ab42cf112c1ad.png"
    ],
    description:"Refurbished Apple Apple iPad 2020 8th Generation (10.2 inch, Wifi+Cellular)- Refurbished at \u20b921799 on Cashify. Free shipping across India.",
    specifications:{
      brand:'Apple',
      screen:'10.2 inch',
      ram:'3 GB',
      storage:'128 GB',
      connectivity:'Wi-Fi + Cellular',
      color:'Silver',
      warranty:'6 Months Cashify Warranty',
      refurbishmentGrade:'Fair'
    },
    topSpecs:[
      ['10.2 inch','Screen Size'],
      ['3 GB','RAM'],
      ['128 GB','Storage'],
      ['Wi-Fi + Cellular','Connectivity'],
      ['6 Months','Warranty']
    ],
    deviceVideos:[
      {
        url:"https://media.cashify.in/trc/optimised/6s/df0a0c9463764e87be3780924a64a50a.mp4",
        label:"Apple iPad 2020 real device video"
      },
      {
        url:"https://media.cashify.in/trc/optimised/10s/df0a0c9463764e87be3780924a64a50a.mp4",
        label:"Apple iPad 2020 real device video"
      },
      {
        url:"https://media.cashify.in/trc/optimised/6s/97319af3c9f944c3b595893851fa8bc5.mp4",
        label:"Apple iPad 2020 real device video"
      }
    ],
    packageItems:[
      'Apple iPad',
      'Compatible charging cable',
      'Warranty information'
    ],
    contentHeading:'Buy Refurbished iPad 10.2',
    contentText:"Buy Refurbished iPad 10.2 32 GB Wifi+Cellular (2020) online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },


  'sony playstation 4 slim gaming console':{
    type:'gaming',
    title:'Sony Playstation 4 Slim Gaming Console (PS4)',
    coverImage:"https://s3n.cashify.in/cashify/store/product/c49dc929340a4169ae03a94d40ea02ff.png",
    gallery:[
      "https://s3n.cashify.in/cashify/store/product/c49dc929340a4169ae03a94d40ea02ff.png",
      "https://s3n.cashify.in/cashify/store/product/8d370c4eabdd4f3b84215c47e858389c.png",
      "https://s3n.cashify.in/cashify/store/product/ae9e651455a2441690689944322f0aba.png",
      "https://s3n.cashify.in/cashify/store/product/5967d5a6f180484ea7263d162e620cca.png"
    ],
    description:"Refurbished Sony Sony Playstation 4 Slim Gaming Console (PS4)- Refurbished at \u20b924599 on Cashify. Free shipping across India.",
    specifications:{
      brand:'Sony',
      productType:'Gaming Console',
      storage:'500 GB',
      color:'Black',
      warranty:'6 Months Cashify Warranty',
      refurbishmentGrade:'Fair'
    },
    topSpecs:[
      ['Sony','Brand'],
      ['PlayStation 4 Slim','Console'],
      ['500 GB','Storage'],
      ['Black','Colour'],
      ['6 Months','Warranty']
    ],
    packageItems:[
      'Sony PlayStation 4 Slim console',
      'Compatible power cable',
      'Warranty information'
    ],
    contentHeading:'Buy Refurbished PS4 Slim',
    contentText:"Buy Refurbished and Second Hand PS4 Slim 1 TB online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },


  'sugato ultracharge 10000mah':{
    type:'accessory',
    title:'Sugato Ultracharge 10000mah - Powerbank - New - Orange',
    coverImage:"https://s3n.cashify.in/cashify/store/product/5d614837a03d4fdeaf975dc3ec2b3a25.jpg",
    gallery:[
      "https://s3n.cashify.in/cashify/store/product/5d614837a03d4fdeaf975dc3ec2b3a25.jpg",
      "https://s3n.cashify.in/cashify/store/product/227cbc5d40f84c0fbceb62e648af72fb.jpg",
      "https://s3n.cashify.in/cashify/store/product/a1a8e8d8886c467197846f1859c13533.jpg",
      "https://s3n.cashify.in/cashify/store/product/c58c8aafc24249c5a4299a209b8f3192.jpg",
      "https://s3n.cashify.in/cashify/store/product/9031627f75064082b0ae977f92442183.jpg",
      "https://s3n.cashify.in/cashify/store/product/5f4dc6f1246c42d59426a0bbea111447.jpg"
    ],
    description:"Sugato Sugato Ultracharge 10000mah - Powerbank - New - Orange at \u20b91499 on Cashify. Free shipping across India.",
    specifications:{
      brand:'Sugato',
      productType:'Power Bank',
      capacity:'10000 mAh',
      color:'Orange',
      condition:'New',
      warranty:'12 Months Cashify Warranty'
    },
    topSpecs:[
      ['10000 mAh','Capacity'],
      ['Power Bank','Product Type'],
      ['Orange','Colour'],
      ['New','Condition'],
      ['12 Months','Warranty']
    ],
    packageItems:[
      'Sugato Ultracharge 10000mAh Power Bank',
      'Charging accessory as supplied with the product',
      'Warranty information'
    ],
    contentHeading:'Buy Sugato Ultracharge 10000mah',
    contentText:"Buy Sugato Ultracharge 10000mah online in India at best price! Get benefits like EMI options, free home delivery and more!"
  },


  "apple iphone 13":{
    type:"phone",
    title:"Apple iPhone 13",
    coverImage:"https://s3n.cashify.in/cashify/store/product//1ef835d0bf424d518e94a8c2278477b7-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//1ef835d0bf424d518e94a8c2278477b7-box.jpg", "https://s3n.cashify.in/cashify/store/product//5948221e203e48c48b8233dfe9c1480e-box.jpg", "https://s3n.cashify.in/cashify/store/product//20cf3aba9edd4100977f8d80a4c5ffd3-box.jpg", "https://s3n.cashify.in/cashify/store/product//ddfdf4afd47a4fa78f07c576d660e460-box.jpg", "https://s3n.cashify.in/cashify/store/product//5d801ebf0cd743e8a8cdc73350413ba0-box.jpg", "https://s3n.cashify.in/cashify/store/product//c28fd847c0f746bf82724fae407fcb8c-box.jpg"],
    galleryByColor:{"Red": ["https://s3n.cashify.in/cashify/store/product//1ef835d0bf424d518e94a8c2278477b7-box.jpg"], "Pink": ["https://s3n.cashify.in/cashify/store/product//5948221e203e48c48b8233dfe9c1480e-box.jpg"], "Blue": ["https://s3n.cashify.in/cashify/store/product//20cf3aba9edd4100977f8d80a4c5ffd3-box.jpg"], "Green": ["https://s3n.cashify.in/cashify/store/product//ddfdf4afd47a4fa78f07c576d660e460-box.jpg"], "MIDNIGHT": ["https://s3n.cashify.in/cashify/store/product//5d801ebf0cd743e8a8cdc73350413ba0-box.jpg"], "STARLIGHT": ["https://s3n.cashify.in/cashify/store/product//c28fd847c0f746bf82724fae407fcb8c-box.jpg"]},
    description:"Buy Refurbished Apple iPhone 13 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "17-Sep-21", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A2633", "priceStatus": "Confirmed", "price": "Rs. 48,999", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1170 x 2532 pixels", "pixelDensity": "457 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "86.89%", "screenDesign": "Bezel-less", "screenRefreshRate": "60 Hz", "screenQuality": "FHD+", "peakBrightness": "800 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual LED Flash", "rearVideoRecording": "4k @60 fps, Full HD @240 fps", "rearCameraFeatures": "5 x Digital Zoom, 2 x Optical Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 12MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.6, Wide Angle, Primary Camera", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.4, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length", "rearSensor": "Sensor-shift Image Stabilization", "rearAperture": "f/1.6", "frontCameraVideo": "4k @60 fps, Full HD @120 fps", "frontCameraFeatures": "Retina Flash", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "f/2.2", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (four-core graphics)", "osGp": "iOS v15", "chipsetGp": "Apple A15 Bionic", "cpuGp": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)", "clockSpeed": "3.23 GHz", "architecture": "64 bit", "processTechnology": "5 nm", "weight": "173 grams", "colorGp": "Blue, Green, Pink, Red, Starlight, Midnight", "build": "Back: Gorilla Glass", "dimensions": "146.7 x 71.5 x 7.6 mm", "sarValue": "Head: 1.18 W/kg, Body: 1.19 W/kg", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "4 GB", "storage": "4 GB / 128 GB", "color": "Midnight", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "17-Sep-21"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A2633"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 48,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1170 x 2532 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "457 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "86.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Bezel-less"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "60 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "800 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @60 fps, Full HD @240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "5 x Digital Zoom, 2 x Optical Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.6, Wide Angle, Primary Camera"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.4, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.6"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @60 fps, Full HD @120 fps"}, {"key": "frontCameraFeatures", "name": "Front Camera Features", "value": "Retina Flash"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/2.2"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (four-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v15"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A15 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.23 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "5 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "173 grams"}, {"key": "colorGp", "name": "Colors", "value": "Blue, Green, Pink, Red, Starlight, Midnight"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "146.7 x 71.5 x 7.6 mm"}, {"key": "sarValue", "name": "SAR Value", "value": "Head: 1.18 W/kg, Body: 1.19 W/kg"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A15 Bionic", "Chipset"], ["457 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/204d11313a5e4e4c9861c32e70d22855.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/402c7c2dcd4943ec9828750c78a967a8.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/aa23cd22abcf43ddb3e06dcea850685d.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/6669e775666c45358a27d695adb68eff.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/fe206f0d578642018a67127f5b812b42.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/e06e41f587c84674aeb5d27afde1a481.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/9883654c4c3747919ca5c6ff55dbc1c6.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/68b41e658c014298b56c92d1a29842c7.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/8ab249949a344e839357cd18f701adbc.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/0b3358b177934b7b9a1f923cc5050bfa.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f425d5bdecaa4656bb9b437e28fde802.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/c6fb9bb6f0e74dc78b99421f15ecf140.mp4", "label": "Apple iPhone 13 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f65585697c3344ff86f0733d239935d5.mp4", "label": "Apple iPhone 13 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 13",
    contentText:"Buy Refurbished Apple iPhone 13 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 15":{
    type:"phone",
    title:"Apple iPhone 15",
    coverImage:"https://s3n.cashify.in/cashify/store/product/1bcf3dcfd61549b8a1dda56a7170477a.jpeg",
    gallery:["https://s3n.cashify.in/cashify/store/product/1bcf3dcfd61549b8a1dda56a7170477a.jpeg", "https://s3n.cashify.in/cashify/store/product/c9143e69da0a4454a596950e17a00b37.jpeg", "https://s3n.cashify.in/cashify/store/product/7c3479dcede44ca6af359c967e5e8e55.jpeg", "https://s3n.cashify.in/cashify/store/product/111a7698ce424a9ca668d09e05f787d8.jpeg", "https://s3n.cashify.in/cashify/store/product/6d09edf171444c31acfadf59c97de63c.jpeg", "https://s3n.cashify.in/cashify/store/product/fd080337b4ea4724bb22043d67290158.png", "https://s3n.cashify.in/cashify/store/product/4d7822dc93ef44738bec4171a1b9c1c0.png", "https://s3n.cashify.in/cashify/store/product/b3206805c03e4424810e9390c4b41020.png", "https://s3n.cashify.in/cashify/store/product/b1834b3487cb4f9f812f1a4125171a55.png", "https://s3n.cashify.in/cashify/store/product/cae47242483148aa89f988fb08bfd208.png", "https://s3n.cashify.in/cashify/store/product/9c0a2b9284a64afdb873307f7b9ccc03.png", "https://s3n.cashify.in/cashify/store/product/192b4eb097914c79b8efcaaaff94fa38.png", "https://s3n.cashify.in/cashify/store/product/948b79e531264f85880e2512ff5f77a5.png", "https://s3n.cashify.in/cashify/store/product/2b420e67a3f94b8791e878cabe250283.png", "https://s3n.cashify.in/cashify/store/product/caa8e3bfc7ac426fb1188e88ff72882a.png", "https://s3n.cashify.in/cashify/store/product/c03e586f80a44cc69689a07031be2bd4.png", "https://s3n.cashify.in/cashify/store/product/fbb7a4702855419caf787a66e1a492c1.png", "https://s3n.cashify.in/cashify/store/product/97d0401b52bc4d8ea858a197916d32be.png", "https://s3n.cashify.in/cashify/store/product/1c39b6aafe214b8291e3c122bca785b7.png", "https://s3n.cashify.in/cashify/store/product/16e7b433e87c4265960e4e278970606a.png", "https://s3n.cashify.in/cashify/store/product/054bb2dec364411488a2b811d28adf14.png", "https://s3n.cashify.in/cashify/store/product/e3c9a142120840a49fb6d5bfdb400204.png"],
    galleryByColor:{"Blue": ["https://s3n.cashify.in/cashify/store/product/1bcf3dcfd61549b8a1dda56a7170477a.jpeg", "https://s3n.cashify.in/cashify/store/product/4d7822dc93ef44738bec4171a1b9c1c0.png", "https://s3n.cashify.in/cashify/store/product/9c0a2b9284a64afdb873307f7b9ccc03.png", "https://s3n.cashify.in/cashify/store/product/97d0401b52bc4d8ea858a197916d32be.png", "https://s3n.cashify.in/cashify/store/product/e3c9a142120840a49fb6d5bfdb400204.png"], "Pink": ["https://s3n.cashify.in/cashify/store/product/c9143e69da0a4454a596950e17a00b37.jpeg", "https://s3n.cashify.in/cashify/store/product/cae47242483148aa89f988fb08bfd208.png", "https://s3n.cashify.in/cashify/store/product/192b4eb097914c79b8efcaaaff94fa38.png", "https://s3n.cashify.in/cashify/store/product/c03e586f80a44cc69689a07031be2bd4.png"], "Green": ["https://s3n.cashify.in/cashify/store/product/7c3479dcede44ca6af359c967e5e8e55.jpeg", "https://s3n.cashify.in/cashify/store/product/b3206805c03e4424810e9390c4b41020.png", "https://s3n.cashify.in/cashify/store/product/caa8e3bfc7ac426fb1188e88ff72882a.png", "https://s3n.cashify.in/cashify/store/product/1c39b6aafe214b8291e3c122bca785b7.png", "https://s3n.cashify.in/cashify/store/product/054bb2dec364411488a2b811d28adf14.png"], "Black": ["https://s3n.cashify.in/cashify/store/product/111a7698ce424a9ca668d09e05f787d8.jpeg", "https://s3n.cashify.in/cashify/store/product/fd080337b4ea4724bb22043d67290158.png", "https://s3n.cashify.in/cashify/store/product/948b79e531264f85880e2512ff5f77a5.png", "https://s3n.cashify.in/cashify/store/product/fbb7a4702855419caf787a66e1a492c1.png"], "Yellow": ["https://s3n.cashify.in/cashify/store/product/6d09edf171444c31acfadf59c97de63c.jpeg", "https://s3n.cashify.in/cashify/store/product/b1834b3487cb4f9f812f1a4125171a55.png", "https://s3n.cashify.in/cashify/store/product/2b420e67a3f94b8791e878cabe250283.png", "https://s3n.cashify.in/cashify/store/product/16e7b433e87c4265960e4e278970606a.png"]},
    description:"Buy Refurbished Apple iPhone 15 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "12-Sep-23", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A3090", "priceStatus": "Confirmed", "price": "Rs. 79,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1179 x 2556 pixels", "pixelDensity": "461 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "86.24%", "screenDesign": "Punch hole", "screenRefreshRate": "60 Hz", "screenQuality": "FHD+", "peakBrightness": "2000 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual-color LED Flash", "rearVideoRecording": "4k @60 fps, Full HD @240 fps", "rearCameraFeatures": "10 x Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 48MP + 12MP", "rearCamera1Resolution": "48 MP", "rearCamera1Type": "f/1.6, Wide Angle, Primary Camera", "rearCamera1Lens": "26 mm focal length, Sensor-shift Image Stabilization, 1 micrometre pixel size", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.4, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length", "rearSensor": "Sensor-shift Image Stabilization", "rearAperture": "f/1.6", "frontCameraVideo": "4k @60 fps, Full HD @120 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/1.9, Wide Angle, Primary Camera", "frontCamera1Lens": "23 mm focal length", "frontAperture": "f/1.9", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (Five-core graphics)", "osGp": "iOS v17", "chipsetGp": "Apple A16 Bionic", "cpuGp": "Hexa Core (3.46 GHz, Dual core, Everest + 2.02 GHz, Quad core, Sawtooth)", "clockSpeed": "3.46 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "171 grams", "colorGp": "Black, Blue, Green, Pink, Yellow", "build": "Back: Gorilla Glass", "dimensions": "147.6 x 71.6 x 7.8 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "6 GB RAM", "storage": "6 GB RAM / 128 GB", "color": "Black", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "12-Sep-23"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A3090"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 79,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1179 x 2556 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "461 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "86.24%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "60 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2000 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual-color LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @60 fps, Full HD @240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "10 x Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 48MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "48 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.6, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "26 mm focal length, Sensor-shift Image Stabilization, 1 micrometre pixel size"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.4, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.6"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @60 fps, Full HD @120 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/1.9, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "23 mm focal length"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/1.9"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (Five-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v17"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A16 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.46 GHz, Dual core, Everest + 2.02 GHz, Quad core, Sawtooth)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.46 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "171 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black, Blue, Green, Pink, Yellow"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "147.6 x 71.6 x 7.8 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A16 Bionic", "Chipset"], ["461 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/b998ca7e38e149589e16442a5283f5d9.mp4", "label": "Apple iPhone 15 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 15",
    contentText:"Buy Refurbished Apple iPhone 15 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 14":{
    type:"phone",
    title:"Apple iPhone 14",
    coverImage:"https://s3n.cashify.in/cashify/store/product//efb9761fc4674032921a636eb605b1d5-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//efb9761fc4674032921a636eb605b1d5-box.jpg", "https://s3n.cashify.in/cashify/store/product//52645ae73a6641cf832231e46c7bffd5-box.jpg", "https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc-box.jpg", "https://s3n.cashify.in/cashify/store/product//6db9d15244c844fe96d0d38658bbfc30-box.jpg", "https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd-box.jpg", "https://s3n.cashify.in/cashify/store/product/9b9c563216ae42b09a88d3e7ba13bd6b.jpg", "https://s3n.cashify.in/cashify/store/product/f4fb5d956708415990f28a1cb4c9fef7.jpg", "https://s3n.cashify.in/cashify/store/product//53da62ad80494a0ba40a8d02eefb5d81.jpg", "https://s3n.cashify.in/cashify/store/product//9ac7879c5eb94d94bdfd04433bfd7817.jpg", "https://s3n.cashify.in/cashify/store/product//0fedc8b28b924d23b7c4a8e324509ad7.jpg", "https://s3n.cashify.in/cashify/store/product//63e25cb39e4141cea7279b3cfeb5afa0.jpg", "https://s3n.cashify.in/cashify/store/product/7db87fd7063442f1ab667fe63f82f390.jpg", "https://s3n.cashify.in/cashify/store/product//a8df1e212e8d49b585b0e45bc25b9012.jpg", "https://s3n.cashify.in/cashify/store/product/4655541f00994a9a9a96d59a8681b24c.jpg", "https://s3n.cashify.in/cashify/store/product/b061d83f08b94c6892ac6634768d0ced.jpg", "https://s3n.cashify.in/cashify/store/product//52645ae73a6641cf832231e46c7bffd5.jpg", "https://s3n.cashify.in/cashify/store/product//6db9d15244c844fe96d0d38658bbfc30.jpg", "https://s3n.cashify.in/cashify/store/product//efb9761fc4674032921a636eb605b1d5.jpg", "https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd.jpg", "https://s3n.cashify.in/cashify/store/product/b149679c93654de48ca6e4639eab4517.jpg", "https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc.jpg", "https://s3n.cashify.in/cashify/store/product/54d809be63f141f1b027d3ef3d0caf34.webp", "https://s3n.cashify.in/cashify/store/product/3d645bb3f3e94515b059dea81425d2a4.jpg", "https://s3n.cashify.in/cashify/store/product//0647035d83e949c48678c3d310a061c7.jpg", "https://s3n.cashify.in/cashify/store/product//987fb8cafe0944279636790757687a20.jpg", "https://s3n.cashify.in/cashify/store/product//7bc8d0b303b349f8bbe4b03db74539b4.jpg", "https://s3n.cashify.in/cashify/store/product/a34b06d398174d0dbbdae7668a5b449c.jpg", "https://s3n.cashify.in/cashify/store/product//cee0f5d8e0ec4fc2915242adb656e862.jpg", "https://s3n.cashify.in/cashify/store/product//905409cd934b4eaaaf64b8c24a99538f.jpg"],
    galleryByColor:{"Red": ["https://s3n.cashify.in/cashify/store/product//efb9761fc4674032921a636eb605b1d5-box.jpg", "https://s3n.cashify.in/cashify/store/product//0fedc8b28b924d23b7c4a8e324509ad7.jpg", "https://s3n.cashify.in/cashify/store/product//efb9761fc4674032921a636eb605b1d5.jpg", "https://s3n.cashify.in/cashify/store/product//905409cd934b4eaaaf64b8c24a99538f.jpg"], "Purple": ["https://s3n.cashify.in/cashify/store/product//52645ae73a6641cf832231e46c7bffd5-box.jpg", "https://s3n.cashify.in/cashify/store/product//9ac7879c5eb94d94bdfd04433bfd7817.jpg", "https://s3n.cashify.in/cashify/store/product//52645ae73a6641cf832231e46c7bffd5.jpg", "https://s3n.cashify.in/cashify/store/product//7bc8d0b303b349f8bbe4b03db74539b4.jpg"], "Midnight": ["https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc-box.jpg", "https://s3n.cashify.in/cashify/store/product//53da62ad80494a0ba40a8d02eefb5d81.jpg", "https://s3n.cashify.in/cashify/store/product//22ad60a248394e8885520d22ead642dc.jpg", "https://s3n.cashify.in/cashify/store/product/54d809be63f141f1b027d3ef3d0caf34.webp", "https://s3n.cashify.in/cashify/store/product//0647035d83e949c48678c3d310a061c7.jpg"], "Starlight": ["https://s3n.cashify.in/cashify/store/product//6db9d15244c844fe96d0d38658bbfc30-box.jpg", "https://s3n.cashify.in/cashify/store/product//63e25cb39e4141cea7279b3cfeb5afa0.jpg", "https://s3n.cashify.in/cashify/store/product//6db9d15244c844fe96d0d38658bbfc30.jpg", "https://s3n.cashify.in/cashify/store/product//cee0f5d8e0ec4fc2915242adb656e862.jpg"], "Blue": ["https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd-box.jpg", "https://s3n.cashify.in/cashify/store/product//a8df1e212e8d49b585b0e45bc25b9012.jpg", "https://s3n.cashify.in/cashify/store/product//09ae90684d4f44f7a4bf7c945d6fd6cd.jpg", "https://s3n.cashify.in/cashify/store/product//987fb8cafe0944279636790757687a20.jpg"], "Product Red": ["https://s3n.cashify.in/cashify/store/product/9b9c563216ae42b09a88d3e7ba13bd6b.jpg", "https://s3n.cashify.in/cashify/store/product/7db87fd7063442f1ab667fe63f82f390.jpg", "https://s3n.cashify.in/cashify/store/product/b149679c93654de48ca6e4639eab4517.jpg", "https://s3n.cashify.in/cashify/store/product/a34b06d398174d0dbbdae7668a5b449c.jpg"], "Yellow": ["https://s3n.cashify.in/cashify/store/product/f4fb5d956708415990f28a1cb4c9fef7.jpg", "https://s3n.cashify.in/cashify/store/product/4655541f00994a9a9a96d59a8681b24c.jpg", "https://s3n.cashify.in/cashify/store/product/b061d83f08b94c6892ac6634768d0ced.jpg", "https://s3n.cashify.in/cashify/store/product/3d645bb3f3e94515b059dea81425d2a4.jpg"]},
    description:"Buy Refurbished Apple iPhone 14 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "7-Sep-22", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A2882", "priceStatus": "Confirmed", "price": "Rs. 79,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1170 x 2532 pixels", "pixelDensity": "457 ppi", "aspectratio": "19.5:9", "protection": "Corning Gorilla Glass", "screenToBodyRatio": "86.89%", "screenDesign": "Regular notch", "screenRefreshRate": "60 Hz", "screenQuality": "FHD+", "peakBrightness": "1200 nits", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "4k @24 fps, Full HD @30 fps", "rearCameraFeatures": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 12MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.5, Wide Angle, Primary Camera", "rearCamera1Lens": "26 mm focal length", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.4, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length", "rearSensor": "Sensor-shift Image Stabilization", "rearAperture": "f/1.5", "frontCameraVideo": "4k @24 fps, Full HD @30 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/1.9, Wide Angle, Primary Camera", "frontCamera1Lens": "f/1.9", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (Five-core graphics)", "osGp": "iOS v16", "chipsetGp": "Apple A15 Bionic", "cpuGp": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)", "clockSpeed": "3.23 GHz", "architecture": "64 bit", "processTechnology": "5 nm", "weight": "172 grams", "colorGp": "Blue, Purple, Midnight, Starlight, Product Red, Yellow", "build": "Ceramic Shield front, Glass back and aluminium design", "dimensions": "146.7 x 71.5 x 7.8 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Face ID, Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "6 GB", "storage": "6 GB / 128 GB", "color": "Purple", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "7-Sep-22"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A2882"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 79,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1170 x 2532 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "457 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Corning Gorilla Glass"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "86.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Regular notch"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "60 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "1200 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @24 fps, Full HD @30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.5, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "26 mm focal length"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.4, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.5"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @24 fps, Full HD @30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/1.9, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/1.9"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (Five-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v16"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A15 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.23 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "5 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "172 grams"}, {"key": "colorGp", "name": "Colors", "value": "Blue, Purple, Midnight, Starlight, Product Red, Yellow"}, {"key": "build", "name": "Build", "value": "Ceramic Shield front, Glass back and aluminium design"}, {"key": "dimensions", "name": "Dimensions", "value": "146.7 x 71.5 x 7.8 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Face ID, Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A15 Bionic", "Chipset"], ["457 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/bdc59fa0649648478cabe56f5df56d68.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/314791294abd4d3e9df5879ee9219edb.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/c961aa332e484362a7dc333b83472cd4.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/369c2faffc9143b295bcf92da922646c.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/c8f2d513a5c34055a1465a03fd538525.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/4048db139c3e4f9aaba1edf80b090d76.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/fb6fc9dba6ca45b28346d8815a2b0469.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/667c63bbeb1443c69d58f3a74801950d.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/d7bc9d1817af44b7a99f1ee27dff5a7f.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/b5f920fb6c7247eca6d1506afcd2373c.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/7772d47cc3cb4f45bc6c0201ba339581.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/8a3663b45b7443e3aa2ceecdd65692c7.mp4", "label": "Apple iPhone 14 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/8db45a63e3734cc5a8581be734f96f73.mp4", "label": "Apple iPhone 14 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 14",
    contentText:"Buy Refurbished Apple iPhone 14 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 12":{
    type:"phone",
    title:"Apple iPhone 12",
    coverImage:"https://s3n.cashify.in/cashify/store/product//095e6ab838494890823c1d21f83167b8-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//095e6ab838494890823c1d21f83167b8-box.jpg", "https://s3n.cashify.in/cashify/store/product//d0c14d73bf8a47c084450e3d146a8cdb-box.jpg", "https://s3n.cashify.in/cashify/store/product//122d9596dd4a4034a9192e5e8ba30c4f-box.jpg", "https://s3n.cashify.in/cashify/store/product//f4cfb6ff9e1a45b79e8b82aad693e5d4-box.jpg", "https://s3n.cashify.in/cashify/store/product//ecd366a2fa9a4bdf9b121b9ab621a149-box.jpg", "https://s3n.cashify.in/cashify/store/product//928eaf33238f4df3a238833e626a9556-box.jpg", "https://s3n.cashify.in/cashify/store/product/782549758c024db689d4d4504bc5a405.png", "https://s3n.cashify.in/cashify/store/product/6554e7fc096e4d458cf45420d6892955.png", "https://s3n.cashify.in/cashify/store/product/79ca5699bc844e9ebecb08a531b2deba.png", "https://s3n.cashify.in/cashify/store/product/4fb405e793304e17911334cbfced3bae.png", "https://s3n.cashify.in/cashify/store/product/f73d33d529fa4dc2b5472d2067e2411e.png", "https://s3n.cashify.in/cashify/store/product/a0802a88e7bd4e5382fed01090c17640.png"],
    galleryByColor:{"Red": ["https://s3n.cashify.in/cashify/store/product//095e6ab838494890823c1d21f83167b8-box.jpg", "https://s3n.cashify.in/cashify/store/product/4fb405e793304e17911334cbfced3bae.png"], "Purple": ["https://s3n.cashify.in/cashify/store/product//d0c14d73bf8a47c084450e3d146a8cdb-box.jpg", "https://s3n.cashify.in/cashify/store/product/f73d33d529fa4dc2b5472d2067e2411e.png"], "Black": ["https://s3n.cashify.in/cashify/store/product//122d9596dd4a4034a9192e5e8ba30c4f-box.jpg", "https://s3n.cashify.in/cashify/store/product/a0802a88e7bd4e5382fed01090c17640.png"], "Blue": ["https://s3n.cashify.in/cashify/store/product//f4cfb6ff9e1a45b79e8b82aad693e5d4-box.jpg", "https://s3n.cashify.in/cashify/store/product/782549758c024db689d4d4504bc5a405.png"], "Green": ["https://s3n.cashify.in/cashify/store/product//ecd366a2fa9a4bdf9b121b9ab621a149-box.jpg", "https://s3n.cashify.in/cashify/store/product/79ca5699bc844e9ebecb08a531b2deba.png"], "White": ["https://s3n.cashify.in/cashify/store/product//928eaf33238f4df3a238833e626a9556-box.jpg", "https://s3n.cashify.in/cashify/store/product/6554e7fc096e4d458cf45420d6892955.png"]},
    description:"Buy Refurbished Apple iPhone 12 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "13-Oct-20", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A2403", "priceStatus": "Confirmed", "price": "Rs. 79,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1170 x 2532 pixels", "pixelDensity": "457 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "86.89%", "screenDesign": "Bezel-less", "screenRefreshRate": "60 Hz", "screenQuality": "FHD+", "peakBrightness": "625 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual LED Flash", "rearVideoRecording": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps, 1280x720 @ 30 fps", "rearCameraFeatures": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 12MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.6, Wide Angle, Primary Camera", "rearCamera1Lens": "26 mm focal length", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.4, Ultra-Wide Angle Camera", "rearCamera2Lens": "f/1.6", "frontCameraVideo": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps", "frontCameraFeatures": "HDR", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "f/2.2", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (four-core graphics)", "osGp": "iOS v14", "chipsetGp": "Apple A14 Bionic", "cpuGp": "Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz, Quad core, Icestorm)", "clockSpeed": "3.1 GHz", "architecture": "64 bit", "processTechnology": "5 nm", "weight": "162 grams", "colorGp": "Black, Blue, Green, Purple, Red, White", "build": "Back: Gorilla Glass", "dimensions": "146.7 x 71.5 x 7.4 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "4 GB", "storage": "4 GB / 64 GB", "color": "Blue", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "13-Oct-20"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A2403"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 79,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1170 x 2532 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "457 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "86.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Bezel-less"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "60 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "625 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps, 1280x720 @ 30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.6, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "26 mm focal length"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.4, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "f/1.6"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps"}, {"key": "frontCameraFeatures", "name": "Front Camera Features", "value": "HDR"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/2.2"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (four-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v14"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A14 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz, Quad core, Icestorm)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.1 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "5 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "162 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black, Blue, Green, Purple, Red, White"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "146.7 x 71.5 x 7.4 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A14 Bionic", "Chipset"], ["457 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/f95125ac5338480496205846536121fb.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/fb4d68263e6a4dc78a2052e5f608cbdb.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f5a293b3db5b4a5a9b712853af00e949.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/a315b611fa404906afd92da14bfd6ebc.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/ef9b408e17a1445db8390d41218c902b.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/11ee384ba9e9449698e725255c575cf5.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/9387172f201c4062a351804b6c4254ab.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/f6f0a98ec4c244d4a660f786cb25420f.mp4", "label": "Apple iPhone 12 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/fc65556e5cb446559efb3c856751263d.mp4", "label": "Apple iPhone 12 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 12",
    contentText:"Buy Refurbished Apple iPhone 12 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 11":{
    type:"phone",
    title:"Apple iPhone 11",
    coverImage:"https://s3n.cashify.in/cashify/store/product//3a1b4277eafa4882b5d2b9f6e838b6ec-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//3a1b4277eafa4882b5d2b9f6e838b6ec-box.jpg", "https://s3n.cashify.in/cashify/store/product//c18df15ff3554c769a4567624aa952a1-box.jpg", "https://s3n.cashify.in/cashify/store/product//0b5eab069de84b6f8c9690f8203da29b-box.jpg", "https://s3n.cashify.in/cashify/store/product//f7c2eae3f65f4ac4aa04529a14cce3a5-box.jpg", "https://s3n.cashify.in/cashify/store/product//05e49dc79d8a471fa0d46fbda8e657a5-box.jpg", "https://s3n.cashify.in/cashify/store/product//764ea685c0744ff2afdf3013bca3ff5d-box.jpg", "https://s3n.cashify.in/cashify/store/product/21787615a3dd4795b5288e99bff3570a.webp", "https://s3n.cashify.in/cashify/store/product/0af255daa3b54ef881d58cb3dbfe2613.webp", "https://s3n.cashify.in/cashify/store/product/b87c4a99b3a44d9396bf338fadd755df.webp", "https://s3n.cashify.in/cashify/store/product/6967e49f4e744b0a915ee7d88c8cda2e.webp", "https://s3n.cashify.in/cashify/store/product/9115f67cdf2747008b686239e10e8d44.webp", "https://s3n.cashify.in/cashify/store/product/42ddba3fea55400ba5875652ce525f11.webp", "https://s3n.cashify.in/cashify/store/product/24e90fddc4104fa4a3f9fec68a32152b.webp", "https://s3n.cashify.in/cashify/store/product/fae388736f3a41aa820de2834d12da65.webp", "https://s3n.cashify.in/cashify/store/product/5f2274d048884b2b92c1cfaf32ede7c1.webp", "https://s3n.cashify.in/cashify/store/product/bd35102ba62a42238c5481b31da7d274.webp", "https://s3n.cashify.in/cashify/store/product/da0be3e9632e40e9b1f89548b812ada1.webp", "https://s3n.cashify.in/cashify/store/product/53244a35531042679de7782fedb39581.webp", "https://s3n.cashify.in/cashify/store/product/9a44e54dc706410ba687981d1ee58829.webp", "https://s3n.cashify.in/cashify/store/product/0165f55939de4db69e4660c312ee242e.webp", "https://s3n.cashify.in/cashify/store/product/84241e53423f4a8e9a88b4da572e5067.webp", "https://s3n.cashify.in/cashify/store/product/be750dbd9d674ced9429fb861d4ae356.webp", "https://s3n.cashify.in/cashify/store/product/f5ee6470b2b74d4f8447de6d1ff80da5.webp", "https://s3n.cashify.in/cashify/store/product/b2d20c7c7b5e42b3ad48895da00deac4.webp"],
    galleryByColor:{"Red": ["https://s3n.cashify.in/cashify/store/product//3a1b4277eafa4882b5d2b9f6e838b6ec-box.jpg", "https://s3n.cashify.in/cashify/store/product/21787615a3dd4795b5288e99bff3570a.webp", "https://s3n.cashify.in/cashify/store/product/5f2274d048884b2b92c1cfaf32ede7c1.webp", "https://s3n.cashify.in/cashify/store/product/84241e53423f4a8e9a88b4da572e5067.webp"], "Purple": ["https://s3n.cashify.in/cashify/store/product//c18df15ff3554c769a4567624aa952a1-box.jpg", "https://s3n.cashify.in/cashify/store/product/0af255daa3b54ef881d58cb3dbfe2613.webp", "https://s3n.cashify.in/cashify/store/product/bd35102ba62a42238c5481b31da7d274.webp", "https://s3n.cashify.in/cashify/store/product/be750dbd9d674ced9429fb861d4ae356.webp"], "Black": ["https://s3n.cashify.in/cashify/store/product//0b5eab069de84b6f8c9690f8203da29b-box.jpg", "https://s3n.cashify.in/cashify/store/product/42ddba3fea55400ba5875652ce525f11.webp", "https://s3n.cashify.in/cashify/store/product/53244a35531042679de7782fedb39581.webp", "https://s3n.cashify.in/cashify/store/product/f5ee6470b2b74d4f8447de6d1ff80da5.webp"], "Green": ["https://s3n.cashify.in/cashify/store/product//f7c2eae3f65f4ac4aa04529a14cce3a5-box.jpg", "https://s3n.cashify.in/cashify/store/product/6967e49f4e744b0a915ee7d88c8cda2e.webp", "https://s3n.cashify.in/cashify/store/product/fae388736f3a41aa820de2834d12da65.webp", "https://s3n.cashify.in/cashify/store/product/0165f55939de4db69e4660c312ee242e.webp"], "White": ["https://s3n.cashify.in/cashify/store/product//05e49dc79d8a471fa0d46fbda8e657a5-box.jpg", "https://s3n.cashify.in/cashify/store/product/9115f67cdf2747008b686239e10e8d44.webp", "https://s3n.cashify.in/cashify/store/product/da0be3e9632e40e9b1f89548b812ada1.webp", "https://s3n.cashify.in/cashify/store/product/9a44e54dc706410ba687981d1ee58829.webp"], "Yellow": ["https://s3n.cashify.in/cashify/store/product//764ea685c0744ff2afdf3013bca3ff5d-box.jpg", "https://s3n.cashify.in/cashify/store/product/b87c4a99b3a44d9396bf338fadd755df.webp", "https://s3n.cashify.in/cashify/store/product/24e90fddc4104fa4a3f9fec68a32152b.webp", "https://s3n.cashify.in/cashify/store/product/b2d20c7c7b5e42b3ad48895da00deac4.webp"]},
    description:"Buy Refurbished Apple iPhone 11 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "10-Sep-19", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A2221", "priceStatus": "Confirmed", "price": "Rs. 54,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "IPS LCD", "displayResolutionGp": "828 x 1792 pixels", "pixelDensity": "324 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "79.79%", "screenDesign": "Regular notch", "screenRefreshRate": "60 Hz", "screenQuality": "HD", "peakBrightness": "625 nits", "bcOis": "Yes", "rearFlash": "Yes, Quad LED True Tone Flash", "rearVideoRecording": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps", "rearCameraFeatures": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 12MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.8, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.4, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length", "rearSensor": "Exmor-RS CMOS Sensor", "rearAperture": "f/1.8", "frontCameraVideo": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps", "frontCameraFeatures": "HDR", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Primary Camera", "frontAperture": "f/2.2", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (four-core graphics)", "osGp": "iOS v13.0", "chipsetGp": "Apple A13 Bionic", "cpuGp": "Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder)", "clockSpeed": "2.65 GHz", "architecture": "64 bit", "processTechnology": "7 nm", "weight": "194 grams", "colorGp": "Black, Green, Purple, Red, White, Yellow", "build": "Back: Gorilla Glass", "dimensions": "150.9 x 75.7 x 8.3 mm", "sarValue": "Head: 1.09 W/kg, Body: 1.18 W/kg", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Face ID, Light sensor, Proximity sensor, Accelerometer, Barometer, Gyroscope", "ram": "4 GB", "storage": "4 GB / 64 GB", "color": "Purple", "grade": "Superb"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "10-Sep-19"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A2221"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 54,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "IPS LCD"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "828 x 1792 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "324 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "79.79%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Regular notch"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "60 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "HD"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "625 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Quad LED True Tone Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "5 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.8, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.4, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Exmor-RS CMOS Sensor"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.8"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps"}, {"key": "frontCameraFeatures", "name": "Front Camera Features", "value": "HDR"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Primary Camera"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (four-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v13.0"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A13 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz, Quad core, Thunder)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "2.65 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "7 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "194 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black, Green, Purple, Red, White, Yellow"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "150.9 x 75.7 x 8.3 mm"}, {"key": "sarValue", "name": "SAR Value", "value": "Head: 1.09 W/kg, Body: 1.18 W/kg"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Face ID, Light sensor, Proximity sensor, Accelerometer, Barometer, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A13 Bionic", "Chipset"], ["324 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/de5a3182ebb147b39f983b810ca30a4f.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/0eaefd46aae749e5a836e81d61a5cc85.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f8ea9a134f614bf39291c9e85431bd27.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/4a10e014ce824620935ae53e912bfcab.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/e8b167025f1c4d66833bfca5be56afe7.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/c5900791afb84f099712eb0662c8a043.mp4", "label": "Apple iPhone 11 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/de50e92582b149b09bc12ae9480549c2.mp4", "label": "Apple iPhone 11 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 11",
    contentText:"Buy Refurbished Apple iPhone 11 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 16 pro":{
    type:"phone",
    title:"Apple iPhone 16 Pro",
    coverImage:"https://s3n.cashify.in/cashify/store/product/5c35c2c8a1a840c29b5bfa530eb64d76.jpeg",
    gallery:["https://s3n.cashify.in/cashify/store/product/5c35c2c8a1a840c29b5bfa530eb64d76.jpeg", "https://s3n.cashify.in/cashify/store/product/1204263573514e618baedf37f76331ec.jpeg", "https://s3n.cashify.in/cashify/store/product/504047f1ddaa4ea59ca1516e3da2ab97.jpeg", "https://s3n.cashify.in/cashify/store/product/1d697989c88e44608ab919f5eba459e2.jpeg", "https://s3n.cashify.in/cashify/store/product/c0666c6106f74636ba8956373acfd48c.png", "https://s3n.cashify.in/cashify/store/product/1239e2b1504e429ba4a57b51ba557ff4.png", "https://s3n.cashify.in/cashify/store/product/560d1338f45540c0b4e9823cf7098488.png", "https://s3n.cashify.in/cashify/store/product/782403856a534d1baffcd716d7eaca93.png", "https://s3n.cashify.in/cashify/store/product/e1279dd3abfe4911a8a77675c462c59b.png", "https://s3n.cashify.in/cashify/store/product/ac2c67f7834746fa82aa0c3aeefde61b.png", "https://s3n.cashify.in/cashify/store/product/76bc18234d04409e827eab24377560cd.png", "https://s3n.cashify.in/cashify/store/product/41d14fc2417743b2890d4a65a2776e22.png", "https://s3n.cashify.in/cashify/store/product/0d7bb5aa8901462e9179c62862fd6210.png", "https://s3n.cashify.in/cashify/store/product/da27dd6b82cc4dea8f69d51888a82479.png", "https://s3n.cashify.in/cashify/store/product/03ccbd05d6b1447ab82bfb364b010ecf.png", "https://s3n.cashify.in/cashify/store/product/a127287c601e4355857f2076b7c391a3.png", "https://s3n.cashify.in/cashify/store/product/468d7f5a2efc456da9cbea7934f32c0d.png", "https://s3n.cashify.in/cashify/store/product/61429746dd284009b959e6e6c5e34f2d.png", "https://s3n.cashify.in/cashify/store/product/ea068d4e465c4027a949bdda7d8173a6.png", "https://s3n.cashify.in/cashify/store/product/117e36f7a0f048fcaea2710f53a85905.png"],
    galleryByColor:{"Desert Titanium": ["https://s3n.cashify.in/cashify/store/product/5c35c2c8a1a840c29b5bfa530eb64d76.jpeg", "https://s3n.cashify.in/cashify/store/product/560d1338f45540c0b4e9823cf7098488.png", "https://s3n.cashify.in/cashify/store/product/ac2c67f7834746fa82aa0c3aeefde61b.png", "https://s3n.cashify.in/cashify/store/product/0d7bb5aa8901462e9179c62862fd6210.png", "https://s3n.cashify.in/cashify/store/product/ea068d4e465c4027a949bdda7d8173a6.png"], "Natural Titanium": ["https://s3n.cashify.in/cashify/store/product/1204263573514e618baedf37f76331ec.jpeg", "https://s3n.cashify.in/cashify/store/product/c0666c6106f74636ba8956373acfd48c.png", "https://s3n.cashify.in/cashify/store/product/76bc18234d04409e827eab24377560cd.png", "https://s3n.cashify.in/cashify/store/product/da27dd6b82cc4dea8f69d51888a82479.png", "https://s3n.cashify.in/cashify/store/product/61429746dd284009b959e6e6c5e34f2d.png"], "White Titanium": ["https://s3n.cashify.in/cashify/store/product/504047f1ddaa4ea59ca1516e3da2ab97.jpeg", "https://s3n.cashify.in/cashify/store/product/782403856a534d1baffcd716d7eaca93.png", "https://s3n.cashify.in/cashify/store/product/e1279dd3abfe4911a8a77675c462c59b.png", "https://s3n.cashify.in/cashify/store/product/03ccbd05d6b1447ab82bfb364b010ecf.png", "https://s3n.cashify.in/cashify/store/product/468d7f5a2efc456da9cbea7934f32c0d.png"], "Black Titanium": ["https://s3n.cashify.in/cashify/store/product/1d697989c88e44608ab919f5eba459e2.jpeg", "https://s3n.cashify.in/cashify/store/product/1239e2b1504e429ba4a57b51ba557ff4.png", "https://s3n.cashify.in/cashify/store/product/41d14fc2417743b2890d4a65a2776e22.png", "https://s3n.cashify.in/cashify/store/product/a127287c601e4355857f2076b7c391a3.png", "https://s3n.cashify.in/cashify/store/product/117e36f7a0f048fcaea2710f53a85905.png"]},
    description:"Buy Refurbished Apple iPhone 16 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "9-Sep-24", "launchStatus": "Available", "brand": "Apple", "modelNumber": "MYND3HN/A", "priceStatus": "Confirmed", "price": "Rs. 119,900", "screen_size": "15.93 cm (6.3 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1206 x 2622 pixels", "pixelDensity": "460 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "90.89%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD+", "peakBrightness": "2000 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual-color LED Flash", "rearVideoRecording": "4k @120 fps, Full HD @240 fps", "rearCameraFeatures": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 48MP + 48MP + 12MP", "rearCamera1Resolution": "48 MP", "rearCamera1Type": "f/1.78, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length, 0.7 micrometre pixel size", "rearCamera3Resolution": "12 MP", "rearCamera3Type": "f/2.8, Telephoto Camera", "rearCamera3Lens": "Sensor-shift Image Stabilization", "rearAperture": "f/1.6", "frontCameraVideo": "4k @60 fps, Full HD @120 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/1.9, Wide Angle, Primary Camera", "frontCamera1Lens": "f/2.2", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (six-core graphics)", "osGp": "iOS v18, OS Updates, 5 Years, Security Updates, 5 Years", "chipsetGp": "Apple A18 Pro", "cpuGp": "Hexa Core (4.05 GHz, Dual core + 2.42 GHz, Quad core)", "clockSpeed": "4.05 GHz", "architecture": "64 bit", "processTechnology": "3 nm", "weight": "199 grams", "colorGp": "Black Titanium, White Titanium, Natural Titanium, Desert Titanium", "build": "Back: Textured Matt Glass", "dimensions": "149.6 x 71.5 x 8.25 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "8 GB RAM", "storage": "8 GB RAM / 128 GB", "color": "Natural Titanium", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "9-Sep-24"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "MYND3HN/A"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 119,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.93 cm (6.3 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1206 x 2622 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "460 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "90.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2000 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual-color LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @120 fps, Full HD @240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 48MP + 48MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "48 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.78, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length, 0.7 micrometre pixel size"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.8, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.6"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @60 fps, Full HD @120 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/1.9, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/2.2"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (six-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v18, OS Updates, 5 Years, Security Updates, 5 Years"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A18 Pro"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (4.05 GHz, Dual core + 2.42 GHz, Quad core)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "4.05 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "3 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "199 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black Titanium, White Titanium, Natural Titanium, Desert Titanium"}, {"key": "build", "name": "Build", "value": "Back: Textured Matt Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "149.6 x 71.5 x 8.25 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.93 cm (6.3 inch)", "Screen Size"], ["Apple A18 Pro", "Chipset"], ["460 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/b63790baeaeb48999ebe8fe640e2093d.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/9d4f727198434c028f1350c3405c1977.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f8c87c84aaee4f4e9ea3315b8c885778.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/1c97da8528c64dfb87a4d89479269a0a.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/dfa8e5054a8346c1b9f742f6c9161383.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/4161adab829248379ec722f137594b5c.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/e5c3be83f7ba4bf5bfd6de65993a96d9.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/026a2fd010b9406d953f6d305d07ec16.mp4", "label": "Apple iPhone 16 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/9f093183798f4fecb2c6648fa5668b25.mp4", "label": "Apple iPhone 16 Pro real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 16 Pro",
    contentText:"Buy Refurbished Apple iPhone 16 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 15 pro":{
    type:"phone",
    title:"Apple iPhone 15 Pro",
    coverImage:"https://s3n.cashify.in/cashify/store/product/777a5b0fca824368bdd2fc45758e1469.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/777a5b0fca824368bdd2fc45758e1469.jpg", "https://s3n.cashify.in/cashify/store/product/0a806fb2ad7d4d7c8888251b154aab87.jpg", "https://s3n.cashify.in/cashify/store/product/14d578e2903d4ff78f7516177672c452.jpg", "https://s3n.cashify.in/cashify/store/product/f01727339dc441479dd944c4a995e697.jpg", "https://s3n.cashify.in/cashify/store/product/707b01698cbf49ed9e9e015137a09620.jpg", "https://s3n.cashify.in/cashify/store/product/8864e82b925a4fce81fc678675d6ce45.jpg", "https://s3n.cashify.in/cashify/store/product/d84ac10c7dd7475abbc6c8c5db905926.jpg", "https://s3n.cashify.in/cashify/store/product/7f0404e778ce48f1bf5bbe019bacc5bf.jpg", "https://s3n.cashify.in/cashify/store/product/ce9b5790a29149489cbcf886956c8553.jpg", "https://s3n.cashify.in/cashify/store/product/24a87d92f58f49858185b7cbdca494f6.jpg", "https://s3n.cashify.in/cashify/store/product/ec22478cc6e74ef68a03f62e86062290.jpg", "https://s3n.cashify.in/cashify/store/product/71b8afabe90e405595d31e57144e0944.jpg", "https://s3n.cashify.in/cashify/store/product/cbdbd33cdf864165a9ffa84707c0d7f5.jpg", "https://s3n.cashify.in/cashify/store/product/e80e948dbeee42e6b83062e9213f1e1c.jpg", "https://s3n.cashify.in/cashify/store/product/3ecaa94d077c4eaab447a6f3f367922f.jpg", "https://s3n.cashify.in/cashify/store/product/38229087068647659397fa6ca55e2c78.jpg"],
    galleryByColor:{"Natural Titanium": ["https://s3n.cashify.in/cashify/store/product/777a5b0fca824368bdd2fc45758e1469.jpg", "https://s3n.cashify.in/cashify/store/product/707b01698cbf49ed9e9e015137a09620.jpg", "https://s3n.cashify.in/cashify/store/product/24a87d92f58f49858185b7cbdca494f6.jpg", "https://s3n.cashify.in/cashify/store/product/e80e948dbeee42e6b83062e9213f1e1c.jpg"], "Blue Titanium": ["https://s3n.cashify.in/cashify/store/product/0a806fb2ad7d4d7c8888251b154aab87.jpg", "https://s3n.cashify.in/cashify/store/product/8864e82b925a4fce81fc678675d6ce45.jpg", "https://s3n.cashify.in/cashify/store/product/71b8afabe90e405595d31e57144e0944.jpg", "https://s3n.cashify.in/cashify/store/product/cbdbd33cdf864165a9ffa84707c0d7f5.jpg", "https://s3n.cashify.in/cashify/store/product/38229087068647659397fa6ca55e2c78.jpg"], "White Titanium": ["https://s3n.cashify.in/cashify/store/product/14d578e2903d4ff78f7516177672c452.jpg", "https://s3n.cashify.in/cashify/store/product/7f0404e778ce48f1bf5bbe019bacc5bf.jpg", "https://s3n.cashify.in/cashify/store/product/ce9b5790a29149489cbcf886956c8553.jpg", "https://s3n.cashify.in/cashify/store/product/3ecaa94d077c4eaab447a6f3f367922f.jpg"], "Black Titanium": ["https://s3n.cashify.in/cashify/store/product/f01727339dc441479dd944c4a995e697.jpg", "https://s3n.cashify.in/cashify/store/product/d84ac10c7dd7475abbc6c8c5db905926.jpg", "https://s3n.cashify.in/cashify/store/product/ec22478cc6e74ef68a03f62e86062290.jpg"]},
    description:"Buy Refurbished Apple iPhone 15 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "12-Sep-23", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A3102", "priceStatus": "Confirmed", "price": "Rs. 134,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1179 x 2556 pixels", "pixelDensity": "461 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "88.06%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD+", "peakBrightness": "2000 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual-color LED Flash", "rearVideoRecording": "4k @24 fps, Full HD @30 fps", "rearCameraFeatures": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 48MP + 12MP + 12MP", "rearCamera1Resolution": "48 MP", "rearCamera1Type": "f/1.78, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "12 MP", "rearCamera3Type": "f/2.8, Telephoto Camera", "rearCamera3Lens": "77 mm focal length, 1 micrometre pixel size", "rearSensor": "Sensor-shift Image Stabilization", "rearAperture": "f/1.78", "frontCameraVideo": "4k @24 fps, Full HD @30 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/1.9, Wide Angle, Primary Camera", "frontCamera1Lens": "f/1.9", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (six-core graphics)", "osGp": "iOS v17", "chipsetGp": "Apple A17 Pro", "cpuGp": "Hexa Core (3.78 GHz, Dual core + 2.11 GHz, Quad core)", "clockSpeed": "3.78 GHz", "architecture": "64 bit", "processTechnology": "3 nm", "weight": "187 grams", "colorGp": "Black Titanium, White Titanium, Blue Titanium, Natural Titanium", "build": "Back: Gorilla Glass", "dimensions": "146.6 x 70.6 x 8.2 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "8 GB RAM", "storage": "8 GB RAM / 128 GB", "color": "Black Titanium", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "12-Sep-23"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A3102"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 134,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1179 x 2556 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "461 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "88.06%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2000 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual-color LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @24 fps, Full HD @30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 48MP + 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "48 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.78, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.8, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "77 mm focal length, 1 micrometre pixel size"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.78"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @24 fps, Full HD @30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/1.9, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/1.9"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (six-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v17"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A17 Pro"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.78 GHz, Dual core + 2.11 GHz, Quad core)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.78 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "3 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "187 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black Titanium, White Titanium, Blue Titanium, Natural Titanium"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "146.6 x 70.6 x 8.2 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A17 Pro", "Chipset"], ["461 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/f87fb44460e1472da8bcc0d439170f5e.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/9d4f727198434c028f1350c3405c1977.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f8c87c84aaee4f4e9ea3315b8c885778.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/1c97da8528c64dfb87a4d89479269a0a.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/dfa8e5054a8346c1b9f742f6c9161383.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/4161adab829248379ec722f137594b5c.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/e5c3be83f7ba4bf5bfd6de65993a96d9.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/026a2fd010b9406d953f6d305d07ec16.mp4", "label": "Apple iPhone 15 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/9f093183798f4fecb2c6648fa5668b25.mp4", "label": "Apple iPhone 15 Pro real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 15 Pro",
    contentText:"Buy Refurbished Apple iPhone 15 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 16 pro max":{
    type:"phone",
    title:"Apple iPhone 16 Pro Max",
    coverImage:"https://s3n.cashify.in/cashify/store/product/8bca8cc487354843a493efeaac42b31a.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/8bca8cc487354843a493efeaac42b31a.jpg", "https://s3n.cashify.in/cashify/store/product/4d8c3247e16e4419a34a8fc9d6c90eb6.jpg", "https://s3n.cashify.in/cashify/store/product/4d3df45d0ad14a27b90c6f2960d3a466.jpg", "https://s3n.cashify.in/cashify/store/product/7c85ebc13afc428b8fb3b1adf8321269.jpg", "https://s3n.cashify.in/cashify/store/product/0488735fe2f244c9b6dc41ca1f63e450.jpg", "https://s3n.cashify.in/cashify/store/product/4e85472946e14a8f985c33109797b311.jpg", "https://s3n.cashify.in/cashify/store/product/6c6084f4d8234486a80c5ab4008263a2.jpg", "https://s3n.cashify.in/cashify/store/product/32cceca2616a426993eaa2f14fa65139.jpg", "https://s3n.cashify.in/cashify/store/product/695f79e8115841e6b71b47530a28a4c2.jpg", "https://s3n.cashify.in/cashify/store/product/81b46f3c4db445d2956f43e58653e2ba.jpg", "https://s3n.cashify.in/cashify/store/product/cabc02eaa0ae469a8e803787ce9073f7.jpg", "https://s3n.cashify.in/cashify/store/product/cde7ed294d024ffb921f35dfefbecd35.jpg", "https://s3n.cashify.in/cashify/store/product/d2b81121d0d1409f8d14bab660e11535.jpg", "https://s3n.cashify.in/cashify/store/product/654e972ad40341b39b96833af689f4bf.jpg", "https://s3n.cashify.in/cashify/store/product/7fc8280f6dd840a4a6ba0a085258abfd.jpg", "https://s3n.cashify.in/cashify/store/product/780c2d0bd16f409e9d5837f53015660b.jpg", "https://s3n.cashify.in/cashify/store/product/91bc53bfe77b41cdb2ba784ebbc21bab.jpg", "https://s3n.cashify.in/cashify/store/product/7d51ebafbc56476ea8250f30172278b9.jpg", "https://s3n.cashify.in/cashify/store/product/9bc7349a9b7a4142a098cbe50abd4aac.jpg", "https://s3n.cashify.in/cashify/store/product/1c5d3d01ebfb484487cf8867db88e99d.jpg"],
    galleryByColor:{"Desert Titanium": ["https://s3n.cashify.in/cashify/store/product/8bca8cc487354843a493efeaac42b31a.jpg", "https://s3n.cashify.in/cashify/store/product/6c6084f4d8234486a80c5ab4008263a2.jpg", "https://s3n.cashify.in/cashify/store/product/81b46f3c4db445d2956f43e58653e2ba.jpg", "https://s3n.cashify.in/cashify/store/product/d2b81121d0d1409f8d14bab660e11535.jpg", "https://s3n.cashify.in/cashify/store/product/7d51ebafbc56476ea8250f30172278b9.jpg"], "Natural Titanium": ["https://s3n.cashify.in/cashify/store/product/4d8c3247e16e4419a34a8fc9d6c90eb6.jpg", "https://s3n.cashify.in/cashify/store/product/0488735fe2f244c9b6dc41ca1f63e450.jpg", "https://s3n.cashify.in/cashify/store/product/cabc02eaa0ae469a8e803787ce9073f7.jpg", "https://s3n.cashify.in/cashify/store/product/654e972ad40341b39b96833af689f4bf.jpg", "https://s3n.cashify.in/cashify/store/product/9bc7349a9b7a4142a098cbe50abd4aac.jpg"], "White Titanium": ["https://s3n.cashify.in/cashify/store/product/4d3df45d0ad14a27b90c6f2960d3a466.jpg", "https://s3n.cashify.in/cashify/store/product/32cceca2616a426993eaa2f14fa65139.jpg", "https://s3n.cashify.in/cashify/store/product/695f79e8115841e6b71b47530a28a4c2.jpg", "https://s3n.cashify.in/cashify/store/product/7fc8280f6dd840a4a6ba0a085258abfd.jpg", "https://s3n.cashify.in/cashify/store/product/91bc53bfe77b41cdb2ba784ebbc21bab.jpg"], "Black Titanium": ["https://s3n.cashify.in/cashify/store/product/7c85ebc13afc428b8fb3b1adf8321269.jpg", "https://s3n.cashify.in/cashify/store/product/4e85472946e14a8f985c33109797b311.jpg", "https://s3n.cashify.in/cashify/store/product/cde7ed294d024ffb921f35dfefbecd35.jpg", "https://s3n.cashify.in/cashify/store/product/780c2d0bd16f409e9d5837f53015660b.jpg", "https://s3n.cashify.in/cashify/store/product/1c5d3d01ebfb484487cf8867db88e99d.jpg"]},
    description:"Buy Refurbished Apple iPhone 16 Pro Max online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "9-Sep-24", "launchStatus": "Available", "brand": "Apple", "modelNumber": "MYWV3HN/A", "priceStatus": "Confirmed", "price": "Rs. 1,44,900", "screen_size": "17.43 cm (6.9 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1320 x 2868 pixels", "pixelDensity": "458 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "90.89%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD+", "peakBrightness": "2000 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual-color LED Flash", "rearVideoRecording": "4k @120 fps, Full HD @240 fps", "rearCameraFeatures": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 48MP + 12MP + 48MP", "rearCamera1Resolution": "48 MP", "rearCamera1Type": "f/1.78, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length, 0.7micrometer pixel size", "rearCamera3Resolution": "12 MP", "rearCamera3Type": "f/2.8, Telephoto Camera", "rearCamera3Lens": "Sensor-shift Image Stabilization", "rearAperture": "f/1.78", "frontCameraVideo": "4k @60 fps, Full HD @120 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/1.9, Wide Angle, Primary Camera", "frontCamera1Lens": "f/1.9", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (six-core graphics)", "osGp": "iOS v18, OS Updates, 5 Years, Security Updates, 5 Years", "chipsetGp": "Apple A18 Pro", "cpuGp": "Hexa Core (4.05 GHz, Dual core + 2.42 GHz, Quad core)", "clockSpeed": "4.05 GHz", "architecture": "64 bit", "processTechnology": "3 nm", "weight": "227 grams", "colorGp": "Black Titanium, White Titanium, Natural Titanium, Desert Titanium", "build": "Back: Textured Matt Glass", "dimensions": "163 x 77.6 x 8.25 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "8 GB RAM", "storage": "8 GB RAM / 256 GB", "color": "White Titanium", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "9-Sep-24"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "MYWV3HN/A"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 1,44,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "17.43 cm (6.9 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1320 x 2868 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "458 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "90.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2000 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual-color LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @120 fps, Full HD @240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Apple ProRAW, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 48MP + 12MP + 48MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "48 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.78, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length, 0.7micrometer pixel size"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.8, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.78"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @60 fps, Full HD @120 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/1.9, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "f/1.9"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (six-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v18, OS Updates, 5 Years, Security Updates, 5 Years"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A18 Pro"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (4.05 GHz, Dual core + 2.42 GHz, Quad core)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "4.05 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "3 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "227 grams"}, {"key": "colorGp", "name": "Colors", "value": "Black Titanium, White Titanium, Natural Titanium, Desert Titanium"}, {"key": "build", "name": "Build", "value": "Back: Textured Matt Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "163 x 77.6 x 8.25 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["17.43 cm (6.9 inch)", "Screen Size"], ["Apple A18 Pro", "Chipset"], ["458 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/fd8ac6807b204d73a7fa28022ec6b144.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/e33c6e2b77324a5eb0801d178ec04f2d.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/e33c6e2b77324a5eb0801d178ec04f2d.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/ef6de0d08d9f413e8dfbd0f0fdb72e51.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/ef6de0d08d9f413e8dfbd0f0fdb72e51.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/ac17008943cc4b17b056df65284814ea.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/ac17008943cc4b17b056df65284814ea.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/df0b6ae506784194b0d077be3c5ee7ce.mp4", "label": "Apple iPhone 16 Pro Max real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/df0b6ae506784194b0d077be3c5ee7ce.mp4", "label": "Apple iPhone 16 Pro Max real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 16 Pro Max",
    contentText:"Buy Refurbished Apple iPhone 16 Pro Max online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "apple iphone 13 pro":{
    type:"phone",
    title:"Apple iPhone 13 Pro",
    coverImage:"https://s3n.cashify.in/cashify/store/product//00fa01ca92104f43829ee0c2c10314ab-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//00fa01ca92104f43829ee0c2c10314ab-box.jpg", "https://s3n.cashify.in/cashify/store/product//49c5f3f591184e36b60aca1758c02a72-box.jpg", "https://s3n.cashify.in/cashify/store/product//037ac504a15f499eb048748c8b2923a9-box.jpg", "https://s3n.cashify.in/cashify/store/product/7f05d767d8184306a6db7f8d1b2b5dfb.jpg", "https://s3n.cashify.in/cashify/store/product//8f27f54444154857b83b0e203c31426e-box.jpg", "https://s3n.cashify.in/cashify/store/product/5184b57bb9cd4341abcaec15cb6b697f.jpg", "https://s3n.cashify.in/cashify/store/product/5227aa1bc52f4d3089433a2ee654d097.jpg", "https://s3n.cashify.in/cashify/store/product/006cd2e6771c47c1a62915afbedfb721.jpg"],
    galleryByColor:{"Graphite": ["https://s3n.cashify.in/cashify/store/product//00fa01ca92104f43829ee0c2c10314ab-box.jpg"], "Gold": ["https://s3n.cashify.in/cashify/store/product//49c5f3f591184e36b60aca1758c02a72-box.jpg"], "Silver": ["https://s3n.cashify.in/cashify/store/product//037ac504a15f499eb048748c8b2923a9-box.jpg"], "Alpine Green": ["https://s3n.cashify.in/cashify/store/product/7f05d767d8184306a6db7f8d1b2b5dfb.jpg", "https://s3n.cashify.in/cashify/store/product/5184b57bb9cd4341abcaec15cb6b697f.jpg", "https://s3n.cashify.in/cashify/store/product/5227aa1bc52f4d3089433a2ee654d097.jpg", "https://s3n.cashify.in/cashify/store/product/006cd2e6771c47c1a62915afbedfb721.jpg"], "SIERRA BLUE": ["https://s3n.cashify.in/cashify/store/product//8f27f54444154857b83b0e203c31426e-box.jpg"]},
    description:"Buy Refurbished Apple iPhone 13 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "14-Sep-21", "launchStatus": "Available", "brand": "Apple", "modelNumber": "A2638", "priceStatus": "Confirmed", "price": "Rs. 119,900", "screen_size": "15.49 cm (6.1 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1170 x 2532 pixels", "pixelDensity": "457 ppi", "aspectratio": "19.5:9", "protection": "Yes", "screenToBodyRatio": "86.89%", "screenDesign": "Regular notch", "screenRefreshRate": "120 Hz", "screenQuality": "FHD+", "peakBrightness": "1000 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual LED Flash", "rearVideoRecording": "4k @24 fps, Full HD @30 fps, HD @30 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 12MP + 12MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.5, Wide Angle, Primary Camera", "rearCamera1Lens": "26 mm focal length", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/1.8, Ultra-Wide Angle Camera", "rearCamera2Lens": "13 mm focal length", "rearCamera3Resolution": "12 MP", "rearCamera3Type": "f/2.8, Telephoto Camera", "rearCamera3Lens": "77 mm focal length", "rearSensor": "IMX703, Exmor-RS CMOS Sensor, Sensor-shift Image Stabilization", "rearAperture": "f/1.5", "frontCameraVideo": "4k @24 fps, Full HD @30 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "Exmor RS", "frontAperture": "f/2.2", "frontFlash": "Yes, Retina Flash", "gpu": "Apple GPU (Five-core graphics)", "osGp": "iOS v15", "chipsetGp": "Apple A15 Bionic", "cpuGp": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)", "clockSpeed": "3.23 GHz", "architecture": "64 bit", "processTechnology": "5 nm", "weight": "203 grams", "colorGp": "Gold, Silver, Graphite, Sierra Blue, Alpine Green", "build": "Back: Gorilla Glass", "dimensions": "146.7 x 71.5 x 7.6 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "No", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "6 GB", "storage": "6 GB / 128 GB", "color": "Sierra Blue", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "14-Sep-21"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Apple"}, {"key": "modelNumber", "name": "Model Number", "value": "A2638"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 119,900"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "15.49 cm (6.1 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1170 x 2532 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "457 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "19.5:9"}, {"key": "protection", "name": "Screen Protection", "value": "Yes"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "86.89%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Regular notch"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "1000 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "4k @24 fps, Full HD @30 fps, HD @30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 12MP + 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.5, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "26 mm focal length"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/1.8, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "13 mm focal length"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.8, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "77 mm focal length"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "IMX703, Exmor-RS CMOS Sensor, Sensor-shift Image Stabilization"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.5"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "4k @24 fps, Full HD @30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "Exmor RS"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Retina Flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Apple GPU (Five-core graphics)"}, {"key": "osGp", "name": "Operating System", "value": "iOS v15"}, {"key": "chipsetGp", "name": "Chipset", "value": "Apple A15 Bionic"}, {"key": "cpuGp", "name": "CPU", "value": "Hexa Core (3.23 GHz, Dual core, Avalanche + 1.82 GHz, Quad core, Blizzard)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.23 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "5 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "203 grams"}, {"key": "colorGp", "name": "Colors", "value": "Gold, Silver, Graphite, Sierra Blue, Alpine Green"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "146.7 x 71.5 x 7.6 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "No"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["15.49 cm (6.1 inch)", "Screen Size"], ["Apple A15 Bionic", "Chipset"], ["457 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/5f2cf6ac811f48e48822b99ae1503d33.mp4", "label": "Apple iPhone 13 Pro real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Apple iPhone 13 Pro",
    contentText:"Buy Refurbished Apple iPhone 13 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "samsung galaxy s24 ultra 5g":{
    type:"phone",
    title:"Samsung Galaxy S24 Ultra 5G",
    coverImage:"https://s3n.cashify.in/cashify/store/product/5fcff80f229e41c8aef5ba7113d0e131.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/5fcff80f229e41c8aef5ba7113d0e131.jpg", "https://s3n.cashify.in/cashify/store/product/7d2172c161ba450aaba84eebe330ab39.jpg", "https://s3n.cashify.in/cashify/store/product/f3b0bd68d92c4950968e718666514a82.jpg", "https://s3n.cashify.in/cashify/store/product/56c63eb96db44a32afc9168ed89659b5.jpg", "https://s3n.cashify.in/cashify/store/product/00f23d5d79e84327854f279a502b6449.jpg", "https://s3n.cashify.in/cashify/store/product/d5a9ddb0cfd14213b739bc214f0ee086.jpg", "https://s3n.cashify.in/cashify/store/product/e9388f8db3984230b81f80530cf88992.jpg", "https://s3n.cashify.in/cashify/store/product/ccb2141a5bc549c991d86ef7e9feb03d.jpg", "https://s3n.cashify.in/cashify/store/product/69a72808aad740c29edecc11d1d7359d.jpg", "https://s3n.cashify.in/cashify/store/product/10f08972bb134f549dce3607d5ec85e9.jpg", "https://s3n.cashify.in/cashify/store/product/5390f6e7589a49fb95aa3505f7a22eef.jpg", "https://s3n.cashify.in/cashify/store/product/66b90879a2e44f16b17a4133a1983e4c.jpg", "https://s3n.cashify.in/cashify/store/product/be2514679dbf4300817c71ce620c2937.jpg", "https://s3n.cashify.in/cashify/store/product/78c3710afaaa4218a3e000df37938cf1.jpg", "https://s3n.cashify.in/cashify/store/product/95f9bcb03eb3430da039046596af7d66.jpg", "https://s3n.cashify.in/cashify/store/product/2d9c086750c54e4a9c80070b5f9ea8bb.jpg", "https://s3n.cashify.in/cashify/store/product/97c6032fa39b454bb7fa4709446460f6.jpg", "https://s3n.cashify.in/cashify/store/product/17cf079f05c9459e9b30d8a77811b53e.jpg", "https://s3n.cashify.in/cashify/store/product/5b8f296bf2da407ba5b3d81107edfe0f.jpg", "https://s3n.cashify.in/cashify/store/product/b2d28179b0534baeab316624ef0da377.jpg", "https://s3n.cashify.in/cashify/store/product/9b8b8a0ad5514dce9b6f0b25c910cec3.jpg", "https://s3n.cashify.in/cashify/store/product/64cd8d8811934779a9f509c637eb3fe1.jpg", "https://s3n.cashify.in/cashify/store/product/ed0eaee0a0e14894a2ebdd449cad7396.jpg", "https://s3n.cashify.in/cashify/store/product/092a86c32f464496b2f323f7baa277aa.jpg", "https://s3n.cashify.in/cashify/store/product/ede659ea6c3349b99b76e6d3b5d5767d.jpg", "https://s3n.cashify.in/cashify/store/product/39be0327c649465f84445cd7dc30100a.jpg", "https://s3n.cashify.in/cashify/store/product/5dc11895b3f241cea8e2b6452672edad.jpg", "https://s3n.cashify.in/cashify/store/product/18e31090c3854153895d45ca9fb6553d.jpg", "https://s3n.cashify.in/cashify/store/product/9fe21af16da04b328c1ad1b4ca0145b7.jpg", "https://s3n.cashify.in/cashify/store/product/654f2764db7d4483b15db5f48b59f1de.jpg", "https://s3n.cashify.in/cashify/store/product/6178834c329e44d592487d101a795527.jpg", "https://s3n.cashify.in/cashify/store/product/a9f1ad82b9c346c294c710f240c30615.jpg", "https://s3n.cashify.in/cashify/store/product/f93536e39bd3410e8f44c1837fa994e3.jpg", "https://s3n.cashify.in/cashify/store/product/d394d402d38e4d439fc6c3a35ba7bbaa.jpg"],
    galleryByColor:{"Titanium Green": ["https://s3n.cashify.in/cashify/store/product/5fcff80f229e41c8aef5ba7113d0e131.jpg", "https://s3n.cashify.in/cashify/store/product/e9388f8db3984230b81f80530cf88992.jpg", "https://s3n.cashify.in/cashify/store/product/5b8f296bf2da407ba5b3d81107edfe0f.jpg", "https://s3n.cashify.in/cashify/store/product/39be0327c649465f84445cd7dc30100a.jpg", "https://s3n.cashify.in/cashify/store/product/a9f1ad82b9c346c294c710f240c30615.jpg"], "Titanium Orange": ["https://s3n.cashify.in/cashify/store/product/7d2172c161ba450aaba84eebe330ab39.jpg", "https://s3n.cashify.in/cashify/store/product/ccb2141a5bc549c991d86ef7e9feb03d.jpg", "https://s3n.cashify.in/cashify/store/product/17cf079f05c9459e9b30d8a77811b53e.jpg", "https://s3n.cashify.in/cashify/store/product/ede659ea6c3349b99b76e6d3b5d5767d.jpg", "https://s3n.cashify.in/cashify/store/product/f93536e39bd3410e8f44c1837fa994e3.jpg"], "Titanium Gray": ["https://s3n.cashify.in/cashify/store/product/f3b0bd68d92c4950968e718666514a82.jpg", "https://s3n.cashify.in/cashify/store/product/69a72808aad740c29edecc11d1d7359d.jpg", "https://s3n.cashify.in/cashify/store/product/95f9bcb03eb3430da039046596af7d66.jpg", "https://s3n.cashify.in/cashify/store/product/654f2764db7d4483b15db5f48b59f1de.jpg"], "Titanium Violet": ["https://s3n.cashify.in/cashify/store/product/56c63eb96db44a32afc9168ed89659b5.jpg", "https://s3n.cashify.in/cashify/store/product/10f08972bb134f549dce3607d5ec85e9.jpg", "https://s3n.cashify.in/cashify/store/product/97c6032fa39b454bb7fa4709446460f6.jpg", "https://s3n.cashify.in/cashify/store/product/64cd8d8811934779a9f509c637eb3fe1.jpg", "https://s3n.cashify.in/cashify/store/product/d394d402d38e4d439fc6c3a35ba7bbaa.jpg"], "Titanium Black": ["https://s3n.cashify.in/cashify/store/product/00f23d5d79e84327854f279a502b6449.jpg", "https://s3n.cashify.in/cashify/store/product/5390f6e7589a49fb95aa3505f7a22eef.jpg", "https://s3n.cashify.in/cashify/store/product/b2d28179b0534baeab316624ef0da377.jpg", "https://s3n.cashify.in/cashify/store/product/ed0eaee0a0e14894a2ebdd449cad7396.jpg", "https://s3n.cashify.in/cashify/store/product/18e31090c3854153895d45ca9fb6553d.jpg"], "Titanium Yellow": ["https://s3n.cashify.in/cashify/store/product/d5a9ddb0cfd14213b739bc214f0ee086.jpg", "https://s3n.cashify.in/cashify/store/product/66b90879a2e44f16b17a4133a1983e4c.jpg", "https://s3n.cashify.in/cashify/store/product/2d9c086750c54e4a9c80070b5f9ea8bb.jpg", "https://s3n.cashify.in/cashify/store/product/5dc11895b3f241cea8e2b6452672edad.jpg", "https://s3n.cashify.in/cashify/store/product/6178834c329e44d592487d101a795527.jpg"], "Titanium Blue": ["https://s3n.cashify.in/cashify/store/product/be2514679dbf4300817c71ce620c2937.jpg", "https://s3n.cashify.in/cashify/store/product/78c3710afaaa4218a3e000df37938cf1.jpg", "https://s3n.cashify.in/cashify/store/product/9b8b8a0ad5514dce9b6f0b25c910cec3.jpg", "https://s3n.cashify.in/cashify/store/product/092a86c32f464496b2f323f7baa277aa.jpg", "https://s3n.cashify.in/cashify/store/product/9fe21af16da04b328c1ad1b4ca0145b7.jpg"]},
    description:"Buy Refurbished Samsung Galaxy S24 Ultra 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "17-Jan-24", "launchStatus": "Available", "brand": "Samsung", "modelNumber": "SM-S928BZKCINS", "priceStatus": "Confirmed", "price": "Rs. 129,999", "screen_size": "17.27 cm (6.8 inch)", "displayTypeGp": "AMOLED", "displayResolutionGp": "1440 x 3120 pixels", "pixelDensity": "505 ppi", "protection": "Corning Gorilla Glass", "screenToBodyRatio": "88.34%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "2K", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "7680x4320 @ 30 fps, 3840x2160 @ 60 fps, 1920x1080 @ 240 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Quad, 200MP + 12MP + 10MP + 50MP", "rearCamera1Resolution": "200 MP", "rearCamera1Type": "f/1.7, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "10 MP", "rearCamera3Type": "f/2.4, Telephoto Camera", "rearCamera3Lens": "50 MP", "rearCamera4Type": "f/3.4", "rearCamera4Lens": "111 mm focal length", "rearAperture": "f/1.7", "frontCameraVideo": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "26 mm focal length", "frontAperture": "f/2.2", "gpu": "Adreno 750", "osGp": "Android v14", "chipsetGp": "Qualcomm Snapdragon 8 Gen 3", "cpuGp": "Octa core (3.39 GHz, Single core, Cortex X4 + 3.1 GHz, Penta Core, Cortex A720 + 2.2 GHz, Dual core, Cortex A520)", "customUserInterface": "Samsung One UI", "clockSpeed": "3.39 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "232 grams", "colorGp": "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow, Titanium Blue, Titanium Green", "build": "Back: Gorilla Glass", "dimensions": "162.3 x 79 x 8.6 mm", "batteryType": "Li-ion", "chargingTime": "65 % in 30 minutes", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "On-Screen", "fingerprintScannerType": "Ultrasonic", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "12 GB RAM", "storage": "12 GB RAM / 256 GB", "color": "Titanium Gray", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "17-Jan-24"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Samsung"}, {"key": "modelNumber", "name": "Model Number", "value": "SM-S928BZKCINS"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 129,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "17.27 cm (6.8 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1440 x 3120 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "505 ppi"}, {"key": "protection", "name": "Screen Protection", "value": "Corning Gorilla Glass"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "88.34%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "2K"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "7680x4320 @ 30 fps, 3840x2160 @ 60 fps, 1920x1080 @ 240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Quad, 200MP + 12MP + 10MP + 50MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "200 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.7, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "10 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.4, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "50 MP"}, {"key": "rearCamera4Type", "name": "Rear Camera 4 Type", "value": "f/3.4"}, {"key": "rearCamera4Lens", "name": "Rear Camera 4 Lens", "value": "111 mm focal length"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.7"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "26 mm focal length"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Adreno 750"}, {"key": "osGp", "name": "Operating System", "value": "Android v14"}, {"key": "chipsetGp", "name": "Chipset", "value": "Qualcomm Snapdragon 8 Gen 3"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3.39 GHz, Single core, Cortex X4 + 3.1 GHz, Penta Core, Cortex A720 + 2.2 GHz, Dual core, Cortex A520)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Samsung One UI"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.39 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "232 grams"}, {"key": "colorGp", "name": "Colors", "value": "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow, Titanium Blue, Titanium Green"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "162.3 x 79 x 8.6 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "65 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "On-Screen"}, {"key": "fingerprintScannerType", "name": "Fingerprint Scanner Type", "value": "Ultrasonic"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["17.27 cm (6.8 inch)", "Screen Size"], ["Qualcomm Snapdragon 8 Gen 3", "Chipset"], ["505 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/d6eb930676dc4478bacf78f3bd0abd09.mp4", "label": "Samsung Galaxy S24 Ultra 5G real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Samsung Galaxy S24 Ultra 5G",
    contentText:"Buy Refurbished Samsung Galaxy S24 Ultra 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "samsung galaxy s20 fe 5g":{
    type:"phone",
    title:"Samsung Galaxy S20 FE 5G",
    coverImage:"https://s3n.cashify.in/cashify/store/product//e5a8fcee7bc24d0199b8d1b859ecec2c-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//e5a8fcee7bc24d0199b8d1b859ecec2c-box.jpg", "https://s3n.cashify.in/cashify/store/product/03f2f6d30c9a4f8cb2b8fd662ed54a58.jpg", "https://s3n.cashify.in/cashify/store/product/99fa2cac3ad94e4c892abd0a277af20f.jpg", "https://s3n.cashify.in/cashify/store/product//de24a1255eb847629d9b852a5e87f2c7-box.jpg", "https://s3n.cashify.in/cashify/store/product//30d40e145fd44f8d9a78b7bd20920f6f-box.jpg", "https://s3n.cashify.in/cashify/store/product/27d440945e054fc6ac3943332fe0a94f.jpg", "https://s3n.cashify.in/cashify/store/product/f0102fa4e4ce46a3baac814bc10d3d3f.jpg", "https://s3n.cashify.in/cashify/store/product/c3aba703ca414583953d94da4ff69dff.jpg", "https://s3n.cashify.in/cashify/store/product/7cf6b9a497724f58918abc12ddf8e707.jpg", "https://s3n.cashify.in/cashify/store/product/4691e1b6cfe04d5bbc5afa0b9d11016d.png", "https://s3n.cashify.in/cashify/store/product/a3383ef7b2b84493856f19613127777a.png", "https://s3n.cashify.in/cashify/store/product/1bdee37aaf3d43e2ac8d5acf449fd3d3.jpg", "https://s3n.cashify.in/cashify/store/product/4fe4e2bc0ad64426967f94de0b4667e0.jpg"],
    galleryByColor:{"Cloud Mint": ["https://s3n.cashify.in/cashify/store/product//e5a8fcee7bc24d0199b8d1b859ecec2c-box.jpg"], "Cloud White": ["https://s3n.cashify.in/cashify/store/product/03f2f6d30c9a4f8cb2b8fd662ed54a58.jpg", "https://s3n.cashify.in/cashify/store/product/27d440945e054fc6ac3943332fe0a94f.jpg", "https://s3n.cashify.in/cashify/store/product/7cf6b9a497724f58918abc12ddf8e707.jpg", "https://s3n.cashify.in/cashify/store/product/4691e1b6cfe04d5bbc5afa0b9d11016d.png", "https://s3n.cashify.in/cashify/store/product/4fe4e2bc0ad64426967f94de0b4667e0.jpg"], "Cloud Red": ["https://s3n.cashify.in/cashify/store/product/99fa2cac3ad94e4c892abd0a277af20f.jpg", "https://s3n.cashify.in/cashify/store/product/f0102fa4e4ce46a3baac814bc10d3d3f.jpg", "https://s3n.cashify.in/cashify/store/product/c3aba703ca414583953d94da4ff69dff.jpg", "https://s3n.cashify.in/cashify/store/product/a3383ef7b2b84493856f19613127777a.png", "https://s3n.cashify.in/cashify/store/product/1bdee37aaf3d43e2ac8d5acf449fd3d3.jpg"], "Cloud Lavender": ["https://s3n.cashify.in/cashify/store/product//de24a1255eb847629d9b852a5e87f2c7-box.jpg"], "Cloud Navy": ["https://s3n.cashify.in/cashify/store/product//30d40e145fd44f8d9a78b7bd20920f6f-box.jpg"]},
    description:"Buy Refurbished Samsung Galaxy S20 FE 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "31-Mar-21", "launchStatus": "Available", "brand": "Samsung", "modelNumber": "SM-G781BZBGINS", "priceStatus": "Confirmed", "price": "Rs. 47,999", "screen_size": "16.51 cm (6.5 inch)", "displayTypeGp": "Super AMOLED", "displayResolutionGp": "1080 x 2400 pixels", "pixelDensity": "405 ppi", "aspectratio": "20:09", "protection": "Gorilla Glass 3", "screenToBodyRatio": "85.68%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 12MP + 8MP + 12MP", "rearCamera1Resolution": "12 MP", "rearCamera1Type": "f/1.8, Wide Angle (79 degree field-of-view), Primary Camera", "rearCamera1Lens": "8 MP", "rearCamera2Type": "f/2.0, Telephoto Camera", "rearCamera2Lens": "73 mm focal length, 1 micrometre pixel size", "rearCamera3Resolution": "12 MP", "rearCamera3Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera3Lens": "ISOCELL Plus", "rearAperture": "f/1.8", "frontCameraVideo": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps", "frontCameraSetup": "Single, 32MP", "frontCamera1Resolution": "32 MP", "frontCamera1Type": "f/2.0, Wide Angle, Primary Camera", "frontCamera1Lens": "CMOS", "frontAperture": "f/2.0", "frontFlash": "Yes, Screen flash", "gpu": "Adreno 650", "osGp": "Android v11", "chipsetGp": "Qualcomm Snapdragon 865", "cpuGp": "Octa core (2.84 GHz, Single core, Kryo 585 + 2.42 GHz, Tri core, Kryo 585 + 1.8 GHz, Quad core, Kryo 585)", "customUserInterface": "Samsung One UI", "clockSpeed": "2.84 GHz", "architecture": "64 bit", "processTechnology": "7 nm", "weight": "190 grams", "colorGp": "Cloud Lavender, Cloud Mint, Cloud Navy", "build": "Back: Plastic", "dimensions": "159.8 x 74.5 x 8.4 mm", "batteryType": "Li-ion", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "On-Screen", "fingerprintScannerType": "Optical", "faceUnlock": "Yes", "sensors": "Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope", "ram": "8 GB", "storage": "8 GB / 128 GB", "color": "Cloud Navy", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "31-Mar-21"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Samsung"}, {"key": "modelNumber", "name": "Model Number", "value": "SM-G781BZBGINS"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 47,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "16.51 cm (6.5 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "Super AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1080 x 2400 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "405 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "20:09"}, {"key": "protection", "name": "Screen Protection", "value": "Gorilla Glass 3"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "85.68%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 12MP + 8MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "12 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.8, Wide Angle (79 degree field-of-view), Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "8 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.0, Telephoto Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "73 mm focal length, 1 micrometre pixel size"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "ISOCELL Plus"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.8"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 32MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "32 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.0, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "CMOS"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.0"}, {"key": "frontFlash", "name": "Front Flash", "value": "Yes, Screen flash"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Adreno 650"}, {"key": "osGp", "name": "Operating System", "value": "Android v11"}, {"key": "chipsetGp", "name": "Chipset", "value": "Qualcomm Snapdragon 865"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (2.84 GHz, Single core, Kryo 585 + 2.42 GHz, Tri core, Kryo 585 + 1.8 GHz, Quad core, Kryo 585)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Samsung One UI"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "2.84 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "7 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "190 grams"}, {"key": "colorGp", "name": "Colors", "value": "Cloud Lavender, Cloud Mint, Cloud Navy"}, {"key": "build", "name": "Build", "value": "Back: Plastic"}, {"key": "dimensions", "name": "Dimensions", "value": "159.8 x 74.5 x 8.4 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "On-Screen"}, {"key": "fingerprintScannerType", "name": "Fingerprint Scanner Type", "value": "Optical"}, {"key": "faceUnlock", "name": "Face Unlock", "value": "Yes"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope"}]}],
    topSpecs:[["16.51 cm (6.5 inch)", "Screen Size"], ["Qualcomm Snapdragon 865", "Chipset"], ["405 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/3196f1d17b0b4747b14338b403dbba83.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/d1ba1667d8224b64afbf249de864b7d1.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/310cc3561a844c7cbd5dc272beb8d2dc.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/fcd0d9abed3d4649a779d99e0fe9efc6.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/ab29d95f5e204924bdf776fa562840b2.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/e448b41bd1b0495c8d77051d712a50af.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/ad3b83dbc54b4c7ab4fc86ee8d4fa43f.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/a6454a3bb8174279ab46fbd44135ad92.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/clip/f790b1dd57224ee282b64ad88de9858b.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/f790b1dd57224ee282b64ad88de9858b.mp4", "label": "Samsung Galaxy S20 FE 5G real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Samsung Galaxy S20 FE 5G",
    contentText:"Buy Refurbished Samsung Galaxy S20 FE 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "oneplus nord 2 5g":{
    type:"phone",
    title:"OnePlus Nord 2 5G",
    coverImage:"https://s3n.cashify.in/cashify/store/product/ca5fb2daf3b94469937f667684f7b0bf.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/ca5fb2daf3b94469937f667684f7b0bf.jpg", "https://s3n.cashify.in/cashify/store/product//806002ed98c24fac8098618e5b746024-box.jpg", "https://s3n.cashify.in/cashify/store/product//6aec3bb19b054de397b7b0455d625528-box.jpg", "https://s3n.cashify.in/cashify/store/product/7ec0fb043e964b8388dfd510c100118a.jpg", "https://s3n.cashify.in/cashify/store/product//151f9a55d3a34dc9adab9d85de87c455-box.jpg", "https://s3n.cashify.in/cashify/store/product/2918c0cffc534b628c71b1b7cb316a38.jpg", "https://s3n.cashify.in/cashify/store/product//fa71cc64c1d44b7a8dc8c5d9bc9b5d57.jpg", "https://s3n.cashify.in/cashify/store/product/a8ff969625cf49b6b20904444aef8810.jpg", "https://s3n.cashify.in/cashify/store/product/ab605621290d4f738405fc0fc867e7fc.jpg", "https://s3n.cashify.in/cashify/store/product//87a00495f5734344bcbdffcf506d75da.jpg", "https://s3n.cashify.in/cashify/store/product/f5f3d1f2f9cd4bd9ba0a611be4c020a3.jpg", "https://s3n.cashify.in/cashify/store/product//8ee22fb837e741de9bd586ff3a2fc2bf.jpg", "https://s3n.cashify.in/cashify/store/product/792018e360a640fca9a020a7fb86dabb.jpg", "https://s3n.cashify.in/cashify/store/product/8e99f2ce43fb40188f7d532695b02333.jpg", "https://s3n.cashify.in/cashify/store/product//806002ed98c24fac8098618e5b746024.jpg", "https://s3n.cashify.in/cashify/store/product//6aec3bb19b054de397b7b0455d625528.jpg", "https://s3n.cashify.in/cashify/store/product//151f9a55d3a34dc9adab9d85de87c455.jpg", "https://s3n.cashify.in/cashify/store/product/d4ca42ce4a2c4b778c0d672bfcc68092.jpg", "https://s3n.cashify.in/cashify/store/product/3e7932f5ae094e0c84c9b2a763a12c7a.jpg", "https://s3n.cashify.in/cashify/store/product/c772015fb4e9479fb78bfe46ae62e6cb.jpg", "https://s3n.cashify.in/cashify/store/product//9cb0c8c855624078ad26028cdff2753a.jpg", "https://s3n.cashify.in/cashify/store/product//c8f5093995ed40c98758ef69443e5356.jpg", "https://s3n.cashify.in/cashify/store/product/d0a1a276e9db4a54b40e8b4b08539145.jpg", "https://s3n.cashify.in/cashify/store/product//b8c1fdd7056b4fb995d54c974c64a6db.jpg", "https://s3n.cashify.in/cashify/store/product/e8683129eb6b44789d9ae9ffa1fc3a10.jpg"],
    galleryByColor:{"Pac-Man Edition": ["https://s3n.cashify.in/cashify/store/product/ca5fb2daf3b94469937f667684f7b0bf.jpg", "https://s3n.cashify.in/cashify/store/product/a8ff969625cf49b6b20904444aef8810.jpg", "https://s3n.cashify.in/cashify/store/product/8e99f2ce43fb40188f7d532695b02333.jpg", "https://s3n.cashify.in/cashify/store/product/d0a1a276e9db4a54b40e8b4b08539145.jpg"], "Blue Haze": ["https://s3n.cashify.in/cashify/store/product//806002ed98c24fac8098618e5b746024-box.jpg", "https://s3n.cashify.in/cashify/store/product//fa71cc64c1d44b7a8dc8c5d9bc9b5d57.jpg", "https://s3n.cashify.in/cashify/store/product//806002ed98c24fac8098618e5b746024.jpg", "https://s3n.cashify.in/cashify/store/product//c8f5093995ed40c98758ef69443e5356.jpg"], "Gray Sierra": ["https://s3n.cashify.in/cashify/store/product//6aec3bb19b054de397b7b0455d625528-box.jpg", "https://s3n.cashify.in/cashify/store/product//87a00495f5734344bcbdffcf506d75da.jpg", "https://s3n.cashify.in/cashify/store/product//6aec3bb19b054de397b7b0455d625528.jpg", "https://s3n.cashify.in/cashify/store/product//b8c1fdd7056b4fb995d54c974c64a6db.jpg"], "Grey Sierra": ["https://s3n.cashify.in/cashify/store/product/7ec0fb043e964b8388dfd510c100118a.jpg", "https://s3n.cashify.in/cashify/store/product/ab605621290d4f738405fc0fc867e7fc.jpg", "https://s3n.cashify.in/cashify/store/product/d4ca42ce4a2c4b778c0d672bfcc68092.jpg", "https://s3n.cashify.in/cashify/store/product/c772015fb4e9479fb78bfe46ae62e6cb.jpg"], "Green Woods": ["https://s3n.cashify.in/cashify/store/product//151f9a55d3a34dc9adab9d85de87c455-box.jpg", "https://s3n.cashify.in/cashify/store/product//8ee22fb837e741de9bd586ff3a2fc2bf.jpg", "https://s3n.cashify.in/cashify/store/product//151f9a55d3a34dc9adab9d85de87c455.jpg", "https://s3n.cashify.in/cashify/store/product//9cb0c8c855624078ad26028cdff2753a.jpg"], "Green Wood": ["https://s3n.cashify.in/cashify/store/product/2918c0cffc534b628c71b1b7cb316a38.jpg", "https://s3n.cashify.in/cashify/store/product/f5f3d1f2f9cd4bd9ba0a611be4c020a3.jpg", "https://s3n.cashify.in/cashify/store/product/792018e360a640fca9a020a7fb86dabb.jpg", "https://s3n.cashify.in/cashify/store/product/3e7932f5ae094e0c84c9b2a763a12c7a.jpg"], "All": ["https://s3n.cashify.in/cashify/store/product/e8683129eb6b44789d9ae9ffa1fc3a10.jpg"]},
    description:"Buy Refurbished OnePlus Nord 2 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "26-Jul-21", "launchStatus": "Available", "brand": "OnePlus", "modelNumber": "DN2101", "priceStatus": "Confirmed", "price": "Rs. 29,999", "screen_size": "16.33 cm (6.43 inch)", "displayTypeGp": "AMOLED", "displayResolutionGp": "1080 x 2400 pixels", "pixelDensity": "410 ppi", "aspectratio": "20:09", "protection": "Gorilla Glass 5", "screenToBodyRatio": "85.59%", "screenDesign": "Punch hole", "screenRefreshRate": "90 Hz", "screenQuality": "FHD", "bcOis": "Yes", "rearFlash": "Yes, Dual LED Flash", "rearVideoRecording": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps, 1280x720 @ 240 fps", "rearCameraFeatures": "10 x Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 50MP + 8MP + 2MP", "rearCamera1Resolution": "50 MP", "rearCamera1Type": "f/1.88 (upto 10x Digital Zoom), Wide Angle Primary Camera", "rearCamera1Lens": "8 MP", "rearCamera2Type": "f/2.25, Wide Angle, Ultra-Wide Angle Camera", "rearCamera3Resolution": "2 MP", "rearCamera3Type": "f/2.4 Mono Camera", "rearSensor": "Exmor-RS CMOS Sensor", "rearAperture": "f/1.88", "frontCameraVideo": "1920x1080 @ 30 fps, 1280x720 @ 30 fps", "frontCameraSetup": "Single, 32MP", "frontCamera1Resolution": "32 MP", "frontCamera1Type": "f/2.45, Wide Angle Primary Camera", "frontCamera1Lens": "Exmor RS", "frontAperture": "f/2.45", "gpu": "Mali-G77 MC9", "osGp": "Android v11", "chipsetGp": "MediaTek Dimensity 1200 MT6893", "cpuGp": "Octa core (3 GHz, Single core, Cortex A78 + 2.6 GHz, Tri core, Cortex A78 + 2 GHz, Quad core, Cortex A55)", "customUserInterface": "Oxygen OS", "clockSpeed": "3 GHz", "architecture": "64 bit", "processTechnology": "6 nm", "weight": "189 grams", "colorGp": "Grey Sierra, Blue Haze, Green Woods", "build": "Back: Gorilla Glass", "dimensions": "159.1 x 73.3 x 8.2 mm", "batteryType": "Li-ion", "chargingTime": "100 % in 30 minutes", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "On-Screen", "fingerprintScannerType": "Optical", "faceUnlock": "Yes", "sensors": "Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope", "ram": "8 GB", "storage": "8 GB / 128 GB", "color": "Blue Haze", "grade": "Good"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "26-Jul-21"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "OnePlus"}, {"key": "modelNumber", "name": "Model Number", "value": "DN2101"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 29,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "16.33 cm (6.43 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1080 x 2400 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "410 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "20:09"}, {"key": "protection", "name": "Screen Protection", "value": "Gorilla Glass 5"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "85.59%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "90 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps, 1280x720 @ 240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "10 x Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 50MP + 8MP + 2MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "50 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.88 (upto 10x Digital Zoom), Wide Angle Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "8 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.25, Wide Angle, Ultra-Wide Angle Camera"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "2 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.4 Mono Camera"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "Exmor-RS CMOS Sensor"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.88"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "1920x1080 @ 30 fps, 1280x720 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 32MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "32 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.45, Wide Angle Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "Exmor RS"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.45"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Mali-G77 MC9"}, {"key": "osGp", "name": "Operating System", "value": "Android v11"}, {"key": "chipsetGp", "name": "Chipset", "value": "MediaTek Dimensity 1200 MT6893"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3 GHz, Single core, Cortex A78 + 2.6 GHz, Tri core, Cortex A78 + 2 GHz, Quad core, Cortex A55)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Oxygen OS"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "6 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "189 grams"}, {"key": "colorGp", "name": "Colors", "value": "Grey Sierra, Blue Haze, Green Woods"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass"}, {"key": "dimensions", "name": "Dimensions", "value": "159.1 x 73.3 x 8.2 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "100 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "On-Screen"}, {"key": "fingerprintScannerType", "name": "Fingerprint Scanner Type", "value": "Optical"}, {"key": "faceUnlock", "name": "Face Unlock", "value": "Yes"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope"}]}],
    topSpecs:[["16.33 cm (6.43 inch)", "Screen Size"], ["MediaTek Dimensity 1200 MT6893", "Chipset"], ["410 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/f770a876130647f79e38a5a80a0d4891.mp4", "label": "OnePlus Nord 2 5G real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy OnePlus Nord 2 5G",
    contentText:"Buy Refurbished OnePlus Nord 2 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "samsung galaxy z fold5":{
    type:"phone",
    title:"Samsung Galaxy Z Fold5",
    coverImage:"https://s3n.cashify.in/cashify/store/product/398911ac29444837bb6c9cfebc4e2771.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/398911ac29444837bb6c9cfebc4e2771.jpg", "https://s3n.cashify.in/cashify/store/product/137d2b6f3e8d48738e3bbf7a53552af9.jpg", "https://s3n.cashify.in/cashify/store/product/a63f35eef14a4c6984fb20b965d2f4bd.jpg", "https://s3n.cashify.in/cashify/store/product/cca16676754040eb854535e61e32b227.jpg", "https://s3n.cashify.in/cashify/store/product/38d6645d1eae4de9bf0d553d0fc78ca2.jpg", "https://s3n.cashify.in/cashify/store/product/92db56cc61054001975b6c3d6c34d6c3.jpg", "https://s3n.cashify.in/cashify/store/product/3d56219c1d8c4d13b2b8ca21fc2eccb7.jpg", "https://s3n.cashify.in/cashify/store/product/efb0726492514288aeba6d849f997e36.jpg", "https://s3n.cashify.in/cashify/store/product/2dd20867527c49afb03bae3e95319f73.jpg", "https://s3n.cashify.in/cashify/store/product/4f9f93df024741e697cfc8d51f2af873.jpg", "https://s3n.cashify.in/cashify/store/product/8d8604c8de7849c688a9d1e0641c54d6.jpg", "https://s3n.cashify.in/cashify/store/product/bc282b3300194330b3d7c3c23f824cd4.jpg", "https://s3n.cashify.in/cashify/store/product/a71b6e25ea9f4e9d81702197591d9bd5.jpg", "https://s3n.cashify.in/cashify/store/product/830b2887c9cb4b7bb2db10711672e71f.jpg", "https://s3n.cashify.in/cashify/store/product/de8de0b7e22c477da82b1272aa864ee3.jpg", "https://s3n.cashify.in/cashify/store/product/9c0908e1fee44a659950150230228ac4.jpg"],
    galleryByColor:{"Gray": ["https://s3n.cashify.in/cashify/store/product/398911ac29444837bb6c9cfebc4e2771.jpg", "https://s3n.cashify.in/cashify/store/product/92db56cc61054001975b6c3d6c34d6c3.jpg", "https://s3n.cashify.in/cashify/store/product/bc282b3300194330b3d7c3c23f824cd4.jpg", "https://s3n.cashify.in/cashify/store/product/de8de0b7e22c477da82b1272aa864ee3.jpg"], "Icy Blue": ["https://s3n.cashify.in/cashify/store/product/137d2b6f3e8d48738e3bbf7a53552af9.jpg", "https://s3n.cashify.in/cashify/store/product/38d6645d1eae4de9bf0d553d0fc78ca2.jpg", "https://s3n.cashify.in/cashify/store/product/8d8604c8de7849c688a9d1e0641c54d6.jpg", "https://s3n.cashify.in/cashify/store/product/830b2887c9cb4b7bb2db10711672e71f.jpg"], "Phantom Black": ["https://s3n.cashify.in/cashify/store/product/a63f35eef14a4c6984fb20b965d2f4bd.jpg", "https://s3n.cashify.in/cashify/store/product/3d56219c1d8c4d13b2b8ca21fc2eccb7.jpg", "https://s3n.cashify.in/cashify/store/product/2dd20867527c49afb03bae3e95319f73.jpg", "https://s3n.cashify.in/cashify/store/product/9c0908e1fee44a659950150230228ac4.jpg"], "Cream": ["https://s3n.cashify.in/cashify/store/product/cca16676754040eb854535e61e32b227.jpg", "https://s3n.cashify.in/cashify/store/product/efb0726492514288aeba6d849f997e36.jpg", "https://s3n.cashify.in/cashify/store/product/4f9f93df024741e697cfc8d51f2af873.jpg", "https://s3n.cashify.in/cashify/store/product/a71b6e25ea9f4e9d81702197591d9bd5.jpg"]},
    description:"Buy Refurbished Samsung Galaxy Z Fold5 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "26-Jul-23", "launchStatus": "Available", "brand": "Samsung", "modelNumber": "SM-F946BZEDINS", "priceStatus": "Confirmed", "price": "Rs. 154,999", "screen_size": "19.30 cm (7.6 inch)", "displayTypeGp": "AMOLED", "displayResolutionGp": "1812 x 2176 pixels", "pixelDensity": "373 ppi", "protection": "Gorilla Glass Victus", "screenToBodyRatio": "176.20%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "7680x4320 @ 24 fps, 3840x2160 @ 60 fps, 1920x1080 @ 240 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 50MP + 12MP + 12MP", "rearCamera1Resolution": "50 MP", "rearCamera1Type": "f/1.8, Wide Angle, Primary Camera", "rearCamera1Lens": "23 mm focal length, 1 micrometre pixel size", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "12 mm focal length, 1.12 micrometre pixel size", "rearCamera3Resolution": "12 MP", "rearCamera3Type": "f/2.4, Telephoto Camera", "rearAperture": "f/1.8", "frontCameraVideo": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps", "frontCameraSetup": "Dual, 10MP + 4MP", "frontCamera1Resolution": "10 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "4 MP", "frontCamera2Type": "f/1.8, Wide Angle Camera", "frontCamera2Lens": "26 mm focal length, 2.0 micrometre pixel size", "frontAperture": "f/2.2", "gpu": "Adreno 740", "osGp": "Android v13", "chipsetGp": "Qualcomm Snapdragon 8 Gen 2", "cpuGp": "Octa core (3.36 GHz, Single core, Cortex X3 + 2.8 GHz, Quad core, Cortex A715 + 2 GHz, Tri core, Cortex A510)", "customUserInterface": "Samsung One UI", "clockSpeed": "3.36 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "253 grams", "colorGp": "Icy Blue, Phantom Black, Cream", "build": "Back: Gorilla Glass Victus 2", "dimensions": "154.9 x 67.1 x 13.4 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "reverseWirelessCharging": "Yes, 4.5W", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "Side", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "12 GB RAM", "storage": "12 GB RAM / 512 GB", "color": "Phantom Black", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "26-Jul-23"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Samsung"}, {"key": "modelNumber", "name": "Model Number", "value": "SM-F946BZEDINS"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 154,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "19.30 cm (7.6 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1812 x 2176 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "373 ppi"}, {"key": "protection", "name": "Screen Protection", "value": "Gorilla Glass Victus"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "176.20%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "7680x4320 @ 24 fps, 3840x2160 @ 60 fps, 1920x1080 @ 240 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 50MP + 12MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "50 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.8, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "23 mm focal length, 1 micrometre pixel size"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "12 mm focal length, 1.12 micrometre pixel size"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "12 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.4, Telephoto Camera"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.8"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 60 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Dual, 10MP + 4MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "10 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "4 MP"}, {"key": "frontCamera2Type", "name": "Front Camera 2 Type", "value": "f/1.8, Wide Angle Camera"}, {"key": "frontCamera2Lens", "name": "Front Camera 2 Lens", "value": "26 mm focal length, 2.0 micrometre pixel size"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Adreno 740"}, {"key": "osGp", "name": "Operating System", "value": "Android v13"}, {"key": "chipsetGp", "name": "Chipset", "value": "Qualcomm Snapdragon 8 Gen 2"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3.36 GHz, Single core, Cortex X3 + 2.8 GHz, Quad core, Cortex A715 + 2 GHz, Tri core, Cortex A510)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Samsung One UI"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.36 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "253 grams"}, {"key": "colorGp", "name": "Colors", "value": "Icy Blue, Phantom Black, Cream"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass Victus 2"}, {"key": "dimensions", "name": "Dimensions", "value": "154.9 x 67.1 x 13.4 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}, {"key": "reverseWirelessCharging", "name": "Reverse Wireless Charging", "value": "Yes, 4.5W"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "Side"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["19.30 cm (7.6 inch)", "Screen Size"], ["Qualcomm Snapdragon 8 Gen 2", "Chipset"], ["373 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/7500aa66229143e89165543f64d67907.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/573d77f4517a4fdd9848c2d01d901230.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/573d77f4517a4fdd9848c2d01d901230.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/4c4865d6eb1342c99b3830a72223def6.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/4c4865d6eb1342c99b3830a72223def6.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/741f6a9ce43a46688a9d531d5b30b17c.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/741f6a9ce43a46688a9d531d5b30b17c.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/8cd0a5cecba14a6b9a884ab76fb93e44.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/8cd0a5cecba14a6b9a884ab76fb93e44.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/5966951c697b4801a908714a38e208f9.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/5966951c697b4801a908714a38e208f9.mp4", "label": "Samsung Galaxy Z Fold5 real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Samsung Galaxy Z Fold5",
    contentText:"Buy Refurbished Samsung Galaxy Z Fold5 online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "samsung galaxy z flip6 5g":{
    type:"phone",
    title:"Samsung Galaxy Z Flip6 5G",
    coverImage:"https://s3n.cashify.in/cashify/store/product/083fbea57a47461587ea869d743c9d33.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/083fbea57a47461587ea869d743c9d33.jpg", "https://s3n.cashify.in/cashify/store/product/2ac722288c9a45d490c131d9fbb3cd39.jpg", "https://s3n.cashify.in/cashify/store/product/3ad60bfa20d640d0ae70c9ee2fd5255d.jpg", "https://s3n.cashify.in/cashify/store/product/df1bd5ab602046a19f5da62e00e50255.jpg", "https://s3n.cashify.in/cashify/store/product/cd1ac647b6304d76b7567509d78e1472.jpg", "https://s3n.cashify.in/cashify/store/product/f5f37439566940819a5cc736d82adab8.jpg", "https://s3n.cashify.in/cashify/store/product/7d420a0e45904639b705e3e7a40093c3.jpg", "https://s3n.cashify.in/cashify/store/product/70f6798970434ef6a50d71a432c76609.jpg", "https://s3n.cashify.in/cashify/store/product/b3b5d51913944e1bb04cb6b01ecaa9f6.jpg", "https://s3n.cashify.in/cashify/store/product/95b9301c8ad84200bcb627be02edfe36.jpg", "https://s3n.cashify.in/cashify/store/product/75d41d98d95b4dd3a837db6aa29bc2a9.jpg", "https://s3n.cashify.in/cashify/store/product/dee756b7c0d44ff2b277592efe2d85b9.jpg", "https://s3n.cashify.in/cashify/store/product/37382341342d4dbf9efb4cd78564ab0f.jpg", "https://s3n.cashify.in/cashify/store/product/2469de7333eb415fb23f19ae183f4c4c.jpg", "https://s3n.cashify.in/cashify/store/product/678e7f0c1b43497da722a17eeb19d00a.jpg", "https://s3n.cashify.in/cashify/store/product/ce1cc6d1ff6449c9801d56db2b1fe886.jpg", "https://s3n.cashify.in/cashify/store/product/90bfd003106242b6a6b1a5d15d956dde.jpg", "https://s3n.cashify.in/cashify/store/product/8fabc0bc22ad480b94642ed68e7c57b9.jpg", "https://s3n.cashify.in/cashify/store/product/6a8f87fe1f4a4bd28e2a8937acfaaa74.jpg", "https://s3n.cashify.in/cashify/store/product/75ea9ea34c5f411ebc8a046604458f9b.jpg", "https://s3n.cashify.in/cashify/store/product/121701fe869442bc86ed15752837e25c.jpg", "https://s3n.cashify.in/cashify/store/product/6759e4ced6d4445691cb91372fa2197e.jpg", "https://s3n.cashify.in/cashify/store/product/2d77d6978c1f4062a6c8d8610f4f7829.jpg", "https://s3n.cashify.in/cashify/store/product/3b39393187c745c7aa0eca06f426714f.jpg", "https://s3n.cashify.in/cashify/store/product/a2ab60042b5e43b4930cd7bf1e497818.jpg", "https://s3n.cashify.in/cashify/store/product/c1edfcb326c54532a2a627303fe1d4d1.jpg", "https://s3n.cashify.in/cashify/store/product/25b886e4bdfb44fcbf833fce21b80382.jpg", "https://s3n.cashify.in/cashify/store/product/fecfc10f14794529a5a9796947fe9209.jpg"],
    galleryByColor:{"Crafted Black": ["https://s3n.cashify.in/cashify/store/product/083fbea57a47461587ea869d743c9d33.jpg", "https://s3n.cashify.in/cashify/store/product/b3b5d51913944e1bb04cb6b01ecaa9f6.jpg", "https://s3n.cashify.in/cashify/store/product/6a8f87fe1f4a4bd28e2a8937acfaaa74.jpg", "https://s3n.cashify.in/cashify/store/product/3b39393187c745c7aa0eca06f426714f.jpg"], "Silver Shadow": ["https://s3n.cashify.in/cashify/store/product/2ac722288c9a45d490c131d9fbb3cd39.jpg", "https://s3n.cashify.in/cashify/store/product/75d41d98d95b4dd3a837db6aa29bc2a9.jpg", "https://s3n.cashify.in/cashify/store/product/ce1cc6d1ff6449c9801d56db2b1fe886.jpg", "https://s3n.cashify.in/cashify/store/product/25b886e4bdfb44fcbf833fce21b80382.jpg"], "Peach": ["https://s3n.cashify.in/cashify/store/product/3ad60bfa20d640d0ae70c9ee2fd5255d.jpg", "https://s3n.cashify.in/cashify/store/product/70f6798970434ef6a50d71a432c76609.jpg", "https://s3n.cashify.in/cashify/store/product/75ea9ea34c5f411ebc8a046604458f9b.jpg", "https://s3n.cashify.in/cashify/store/product/fecfc10f14794529a5a9796947fe9209.jpg"], "Blue": ["https://s3n.cashify.in/cashify/store/product/df1bd5ab602046a19f5da62e00e50255.jpg", "https://s3n.cashify.in/cashify/store/product/dee756b7c0d44ff2b277592efe2d85b9.jpg", "https://s3n.cashify.in/cashify/store/product/121701fe869442bc86ed15752837e25c.jpg", "https://s3n.cashify.in/cashify/store/product/2d77d6978c1f4062a6c8d8610f4f7829.jpg"], "White": ["https://s3n.cashify.in/cashify/store/product/cd1ac647b6304d76b7567509d78e1472.jpg", "https://s3n.cashify.in/cashify/store/product/95b9301c8ad84200bcb627be02edfe36.jpg", "https://s3n.cashify.in/cashify/store/product/8fabc0bc22ad480b94642ed68e7c57b9.jpg", "https://s3n.cashify.in/cashify/store/product/6759e4ced6d4445691cb91372fa2197e.jpg"], "Yellow": ["https://s3n.cashify.in/cashify/store/product/f5f37439566940819a5cc736d82adab8.jpg", "https://s3n.cashify.in/cashify/store/product/37382341342d4dbf9efb4cd78564ab0f.jpg", "https://s3n.cashify.in/cashify/store/product/90bfd003106242b6a6b1a5d15d956dde.jpg", "https://s3n.cashify.in/cashify/store/product/a2ab60042b5e43b4930cd7bf1e497818.jpg"], "Mint": ["https://s3n.cashify.in/cashify/store/product/7d420a0e45904639b705e3e7a40093c3.jpg", "https://s3n.cashify.in/cashify/store/product/2469de7333eb415fb23f19ae183f4c4c.jpg", "https://s3n.cashify.in/cashify/store/product/678e7f0c1b43497da722a17eeb19d00a.jpg", "https://s3n.cashify.in/cashify/store/product/c1edfcb326c54532a2a627303fe1d4d1.jpg"]},
    description:"Buy Refurbished Samsung Galaxy Z Flip6 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "10-Jul-24", "launchStatus": "Available", "brand": "Samsung", "modelNumber": "SM-F741BLBAINS", "priceStatus": "Confirmed", "price": "Rs. 109,999", "screen_size": "17.02 cm (6.7 inch)", "displayTypeGp": "AMOLED", "displayResolutionGp": "1080 x 2460 pixels", "pixelDensity": "426 ppi", "protection": "Corning Gorilla Glass", "screenToBodyRatio": "85.63%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD", "peakBrightness": "2600 nits", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "3840x2160 @ 60 fps, 1920x1080 @ 120 fps", "rearCameraFeatures": "10 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Dual, 50MP + 12MP", "rearCamera1Resolution": "50 MP", "rearCamera1Type": "f/1.8, Wide Angle, Primary Camera", "rearCamera1Lens": "23 mm focal length, 1 micrometre pixel size", "rearCamera2Resolution": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "23 mm focal length, 1.22 micrometre pixel size", "rearAperture": "f/1.8", "frontCameraVideo": "3840x2160 @ 30 fps", "frontCameraSetup": "Single, 10MP", "frontCamera1Resolution": "10 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "23 mm focal length", "frontAperture": "f/2.2", "gpu": "Adreno 750", "osGp": "Android v14", "chipsetGp": "Qualcomm Snapdragon 8 Gen 3", "cpuGp": "Octa core (3.39 GHz, Single core, Cortex X4 + 3.1 GHz, Tri core, Cortex A720 + 2.9 GHz, Dual core, Cortex A720 + 2.2 GHz, Dual core, Cortex A520)", "customUserInterface": "Samsung One UI", "clockSpeed": "3.39 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "187 grams", "colorGp": "Blue, White, Silver Shadow, Mint, Crafted Black, Peach", "build": "Back: Gorilla Glass Victus 2", "dimensions": "165.1 x 71.9 x 6.9 mm", "batteryType": "Li-Polymer", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "Side", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "12 GB RAM", "storage": "12 GB RAM / 256 GB", "color": "Blue", "grade": "Fair"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "10-Jul-24"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Samsung"}, {"key": "modelNumber", "name": "Model Number", "value": "SM-F741BLBAINS"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 109,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "17.02 cm (6.7 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1080 x 2460 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "426 ppi"}, {"key": "protection", "name": "Screen Protection", "value": "Corning Gorilla Glass"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "85.63%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2600 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 60 fps, 1920x1080 @ 120 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "10 x Digital Zoom, 2 x Optical Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Dual, 50MP + 12MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "50 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.8, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "23 mm focal length, 1 micrometre pixel size"}, {"key": "rearCamera2Resolution", "name": "Rear Camera 2 Resolution", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "23 mm focal length, 1.22 micrometre pixel size"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.8"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 10MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "10 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "23 mm focal length"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Adreno 750"}, {"key": "osGp", "name": "Operating System", "value": "Android v14"}, {"key": "chipsetGp", "name": "Chipset", "value": "Qualcomm Snapdragon 8 Gen 3"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3.39 GHz, Single core, Cortex X4 + 3.1 GHz, Tri core, Cortex A720 + 2.9 GHz, Dual core, Cortex A720 + 2.2 GHz, Dual core, Cortex A520)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Samsung One UI"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.39 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "187 grams"}, {"key": "colorGp", "name": "Colors", "value": "Blue, White, Silver Shadow, Mint, Crafted Black, Peach"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass Victus 2"}, {"key": "dimensions", "name": "Dimensions", "value": "165.1 x 71.9 x 6.9 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-Polymer"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "Side"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["17.02 cm (6.7 inch)", "Screen Size"], ["Qualcomm Snapdragon 8 Gen 3", "Chipset"], ["426 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/78a5433b5fde4bb1915130dbe1f573dd.mp4", "label": "Samsung Galaxy Z Flip6 5G real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Samsung Galaxy Z Flip6 5G",
    contentText:"Buy Refurbished Samsung Galaxy Z Flip6 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "google pixel 8 pro":{
    type:"phone",
    title:"Google Pixel 8 Pro",
    coverImage:"https://s3n.cashify.in/cashify/store/product/d993534470bb423da54787ef403574ad.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/d993534470bb423da54787ef403574ad.jpg", "https://s3n.cashify.in/cashify/store/product/fc986a963bb04701898e8971d16c049b.jpg", "https://s3n.cashify.in/cashify/store/product/5355a7ebaa3e4b61908c63587e706800.jpg", "https://s3n.cashify.in/cashify/store/product/d84a82b18fdb4a11a7be45572d593438.jpg", "https://s3n.cashify.in/cashify/store/product/1461672ee91548359970cac6180bd1d3.jpg", "https://s3n.cashify.in/cashify/store/product/d9d64daba92643ce9841c3f1926eec4c.jpg", "https://s3n.cashify.in/cashify/store/product/7cfff13f430e45f68ac63c5f3532c7f0.jpg", "https://s3n.cashify.in/cashify/store/product/ece1af61c1cd40b4a83c701f3c395439.jpg", "https://s3n.cashify.in/cashify/store/product/82b8c7db479b47cb8b246d854d04c6bd.jpg", "https://s3n.cashify.in/cashify/store/product/0e3e8bbdee484ca5a9bb72576e23fcf5.jpg", "https://s3n.cashify.in/cashify/store/product/d51b3ee85076447fab4382af839babc9.jpg", "https://s3n.cashify.in/cashify/store/product/72f3c1938c144d03b3a5872b40a55f21.jpg", "https://s3n.cashify.in/cashify/store/product/5032328b29544443974315f26d3edc53.jpg", "https://s3n.cashify.in/cashify/store/product/5369a8e980b54fc488d00d4ff5e4a1f0.jpg", "https://s3n.cashify.in/cashify/store/product/ec6b98125c24460a888d14cb647db87b.jpg", "https://s3n.cashify.in/cashify/store/product/f46cf185622e4c4eaf3261d21ddc5019.jpg"],
    galleryByColor:{"Obsidian": ["https://s3n.cashify.in/cashify/store/product/d993534470bb423da54787ef403574ad.jpg", "https://s3n.cashify.in/cashify/store/product/d9d64daba92643ce9841c3f1926eec4c.jpg", "https://s3n.cashify.in/cashify/store/product/0e3e8bbdee484ca5a9bb72576e23fcf5.jpg", "https://s3n.cashify.in/cashify/store/product/5369a8e980b54fc488d00d4ff5e4a1f0.jpg"], "Bay": ["https://s3n.cashify.in/cashify/store/product/fc986a963bb04701898e8971d16c049b.jpg", "https://s3n.cashify.in/cashify/store/product/1461672ee91548359970cac6180bd1d3.jpg", "https://s3n.cashify.in/cashify/store/product/d51b3ee85076447fab4382af839babc9.jpg", "https://s3n.cashify.in/cashify/store/product/ec6b98125c24460a888d14cb647db87b.jpg"], "Porcelain": ["https://s3n.cashify.in/cashify/store/product/5355a7ebaa3e4b61908c63587e706800.jpg", "https://s3n.cashify.in/cashify/store/product/7cfff13f430e45f68ac63c5f3532c7f0.jpg", "https://s3n.cashify.in/cashify/store/product/72f3c1938c144d03b3a5872b40a55f21.jpg", "https://s3n.cashify.in/cashify/store/product/5032328b29544443974315f26d3edc53.jpg"], "Mint": ["https://s3n.cashify.in/cashify/store/product/d84a82b18fdb4a11a7be45572d593438.jpg", "https://s3n.cashify.in/cashify/store/product/ece1af61c1cd40b4a83c701f3c395439.jpg", "https://s3n.cashify.in/cashify/store/product/82b8c7db479b47cb8b246d854d04c6bd.jpg", "https://s3n.cashify.in/cashify/store/product/f46cf185622e4c4eaf3261d21ddc5019.jpg"]},
    description:"Buy Refurbished Google Pixel 8 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "4-Oct-23", "launchStatus": "Available", "brand": "Google", "modelNumber": "GC3VE", "priceStatus": "Confirmed", "price": "Rs. 106,999", "screen_size": "17.02 cm (6.7 inch)", "displayTypeGp": "OLED", "displayResolutionGp": "1344 x 2992 pixels", "pixelDensity": "490 ppi", "aspectratio": "20:09", "protection": "Gorilla Glass Victus 2", "screenToBodyRatio": "87.13%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "FHD+", "peakBrightness": "2400 nits", "bcOis": "Yes", "rearFlash": "Yes, Dual LED Flash", "rearVideoRecording": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Triple, 50MP + 48MP + 48MP", "rearCamera1Resolution": "50 MP", "rearCamera1Type": "f/1.6, Wide Angle (82 degree field-of-view), Primary Camera", "rearCamera1Lens": "48 MP", "rearCamera2Type": "f/1.9, Ultra-Wide Angle Camera", "rearCamera2Lens": "0.8 micrometre pixel size", "rearCamera3Resolution": "48 MP", "rearCamera3Type": "f/2.8, Telephoto Camera", "rearCamera3Lens": "0.7 micrometre pixel size", "rearSensor": "S5KGN2, ISOCELL Plus", "rearAperture": "f/1.6", "frontCameraVideo": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps", "frontCameraSetup": "Single, 10.5MP", "frontCamera1Resolution": "10.5 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "1.22 micrometre pixel size", "frontAperture": "f/2.2", "gpu": "Mali-G710 MC10", "osGp": "Android v14", "chipsetGp": "Google Tensor G3", "cpuGp": "Octa core (3 GHz, Single core, Cortex X3 + 2.45 GHz, Quad core, Cortex A715 + 2.15 GHz, Quad core, Cortex A510)", "clockSpeed": "3 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "213 grams", "colorGp": "Obsidian, Bay", "build": "Back: Gorilla Glass Victus 2", "dimensions": "162.6 x 76.5 x 8.8 mm", "batteryType": "Li-ion", "chargingTime": "50 % in 30 minutes", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "On-Screen", "fingerprintScannerType": "Optical", "faceUnlock": "Yes", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "12 GB RAM", "storage": "12 GB RAM / 256 GB", "color": "Porcelain", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "4-Oct-23"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Google"}, {"key": "modelNumber", "name": "Model Number", "value": "GC3VE"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 106,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "17.02 cm (6.7 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "OLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1344 x 2992 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "490 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "20:09"}, {"key": "protection", "name": "Screen Protection", "value": "Gorilla Glass Victus 2"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "87.13%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "FHD+"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "2400 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, Dual LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Triple, 50MP + 48MP + 48MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "50 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.6, Wide Angle (82 degree field-of-view), Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "48 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/1.9, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "0.8 micrometre pixel size"}, {"key": "rearCamera3Resolution", "name": "Rear Camera 3 Resolution", "value": "48 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.8, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "0.7 micrometre pixel size"}, {"key": "rearSensor", "name": "Rear Sensor", "value": "S5KGN2, ISOCELL Plus"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.6"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 24 fps, 1920x1080 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 10.5MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "10.5 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "1.22 micrometre pixel size"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Mali-G710 MC10"}, {"key": "osGp", "name": "Operating System", "value": "Android v14"}, {"key": "chipsetGp", "name": "Chipset", "value": "Google Tensor G3"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3 GHz, Single core, Cortex X3 + 2.45 GHz, Quad core, Cortex A715 + 2.15 GHz, Quad core, Cortex A510)"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "213 grams"}, {"key": "colorGp", "name": "Colors", "value": "Obsidian, Bay"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass Victus 2"}, {"key": "dimensions", "name": "Dimensions", "value": "162.6 x 76.5 x 8.8 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "50 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "On-Screen"}, {"key": "fingerprintScannerType", "name": "Fingerprint Scanner Type", "value": "Optical"}, {"key": "faceUnlock", "name": "Face Unlock", "value": "Yes"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["17.02 cm (6.7 inch)", "Screen Size"], ["Google Tensor G3", "Chipset"], ["490 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/e7a7c5412a2b486b9d4e2e700c27018c.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/be6cff26722041309b4e2ecc765c5dd0.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/be6cff26722041309b4e2ecc765c5dd0.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/a13633b03949475db930772133bbbf22.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/a13633b03949475db930772133bbbf22.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/6s/048a21a61fe44a93aa78e2e01ceb99a5.mp4", "label": "Google Pixel 8 Pro real product video"}, {"url": "https://media.cashify.in/trc/optimised/10s/048a21a61fe44a93aa78e2e01ceb99a5.mp4", "label": "Google Pixel 8 Pro real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Google Pixel 8 Pro",
    contentText:"Buy Refurbished Google Pixel 8 Pro online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "samsung galaxy s23 ultra 5g":{
    type:"phone",
    title:"Samsung Galaxy S23 Ultra 5G",
    coverImage:"https://s3n.cashify.in/cashify/store/product//2c631bcb79484a8195c0626b85d892c0-box.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product//2c631bcb79484a8195c0626b85d892c0-box.jpg", "https://s3n.cashify.in/cashify/store/product//a8ece108be224295b6dbd2be267e934a-box.jpg", "https://s3n.cashify.in/cashify/store/product//0501556c297049d4ad2f7c279f59334c-box.jpg", "https://s3n.cashify.in/cashify/store/product//710661c4f1a64afea13158343dbf7b33-box.jpg", "https://s3n.cashify.in/cashify/store/product/bc9283bf349f49bb9ed1bbe98d38bafb.jpg", "https://s3n.cashify.in/cashify/store/product//ee2a55278fb1461ba948e199e07f2355-box.jpg", "https://s3n.cashify.in/cashify/store/product//2a40f16b3e0247ceb5a38ee4ca46ed12-box.jpg", "https://s3n.cashify.in/cashify/store/product//cbc7e037f0574650858eaea90ce335b5-box.jpg", "https://s3n.cashify.in/cashify/store/product/88ef5e71b11c43ae81edcc26fc819d3e.jpg", "https://s3n.cashify.in/cashify/store/product/b3d7fcf68ede41a0a3f1e5d2ebaeaeed.jpg", "https://s3n.cashify.in/cashify/store/product/0c04689323e140b59d0ec7f67d9cb5bf.jpg", "https://s3n.cashify.in/cashify/store/product/b63d98a66d614318b041f8d7d3d73b83.jpg", "https://s3n.cashify.in/cashify/store/product/d0b84c6006b04f8c946051282b0c2f37.jpg", "https://s3n.cashify.in/cashify/store/product/210c9961154c48f1be19316433ae29be.jpg", "https://s3n.cashify.in/cashify/store/product/89c2a90d42aa4cb59209139555a633bb.jpg", "https://s3n.cashify.in/cashify/store/product/5199f198479248d3879408d255cd3bfd.jpg", "https://s3n.cashify.in/cashify/store/product/cbc7e037f0574650858eaea90ce335b5.jpg", "https://s3n.cashify.in/cashify/store/product/710661c4f1a64afea13158343dbf7b33.jpg", "https://s3n.cashify.in/cashify/store/product/a8ece108be224295b6dbd2be267e934a.jpg", "https://s3n.cashify.in/cashify/store/product/2a40f16b3e0247ceb5a38ee4ca46ed12.jpg", "https://s3n.cashify.in/cashify/store/product/2c631bcb79484a8195c0626b85d892c0.jpg", "https://s3n.cashify.in/cashify/store/product/163250cc7799440bb00b63dd93aa6528.jpg", "https://s3n.cashify.in/cashify/store/product/ee2a55278fb1461ba948e199e07f2355.jpg", "https://s3n.cashify.in/cashify/store/product/0501556c297049d4ad2f7c279f59334c.jpg", "https://s3n.cashify.in/cashify/store/product/303cf7d54b514f69a270eccedb497da5.jpg", "https://s3n.cashify.in/cashify/store/product/88f6280d00a64f6996a894503595985c.jpg", "https://s3n.cashify.in/cashify/store/product/c244d1d54b134e628194a8c214048291.jpg", "https://s3n.cashify.in/cashify/store/product/9e9cbe6ee24d4cb3b72ed1d3440421d8.jpg", "https://s3n.cashify.in/cashify/store/product/d2e9789b53174d80964f6e074fcb8fa9.jpg", "https://s3n.cashify.in/cashify/store/product/03f2270a2f044f308922ad7bede3d460.jpg", "https://s3n.cashify.in/cashify/store/product/38466d6b806e4d50b9eeebc9915feacd.jpg"],
    galleryByColor:{"Red": ["https://s3n.cashify.in/cashify/store/product//2c631bcb79484a8195c0626b85d892c0-box.jpg", "https://s3n.cashify.in/cashify/store/product/0c04689323e140b59d0ec7f67d9cb5bf.jpg", "https://s3n.cashify.in/cashify/store/product/2c631bcb79484a8195c0626b85d892c0.jpg", "https://s3n.cashify.in/cashify/store/product/88f6280d00a64f6996a894503595985c.jpg"], "Lime": ["https://s3n.cashify.in/cashify/store/product//a8ece108be224295b6dbd2be267e934a-box.jpg", "https://s3n.cashify.in/cashify/store/product/88ef5e71b11c43ae81edcc26fc819d3e.jpg", "https://s3n.cashify.in/cashify/store/product/a8ece108be224295b6dbd2be267e934a.jpg", "https://s3n.cashify.in/cashify/store/product/c244d1d54b134e628194a8c214048291.jpg"], "Graphite": ["https://s3n.cashify.in/cashify/store/product//0501556c297049d4ad2f7c279f59334c-box.jpg", "https://s3n.cashify.in/cashify/store/product/b3d7fcf68ede41a0a3f1e5d2ebaeaeed.jpg", "https://s3n.cashify.in/cashify/store/product/0501556c297049d4ad2f7c279f59334c.jpg", "https://s3n.cashify.in/cashify/store/product/d2e9789b53174d80964f6e074fcb8fa9.jpg"], "Phantom Black": ["https://s3n.cashify.in/cashify/store/product//710661c4f1a64afea13158343dbf7b33-box.jpg", "https://s3n.cashify.in/cashify/store/product/b63d98a66d614318b041f8d7d3d73b83.jpg", "https://s3n.cashify.in/cashify/store/product/710661c4f1a64afea13158343dbf7b33.jpg", "https://s3n.cashify.in/cashify/store/product/9e9cbe6ee24d4cb3b72ed1d3440421d8.jpg"], "Lavender": ["https://s3n.cashify.in/cashify/store/product/bc9283bf349f49bb9ed1bbe98d38bafb.jpg", "https://s3n.cashify.in/cashify/store/product/d0b84c6006b04f8c946051282b0c2f37.jpg", "https://s3n.cashify.in/cashify/store/product/163250cc7799440bb00b63dd93aa6528.jpg"], "Green": ["https://s3n.cashify.in/cashify/store/product//ee2a55278fb1461ba948e199e07f2355-box.jpg", "https://s3n.cashify.in/cashify/store/product/210c9961154c48f1be19316433ae29be.jpg", "https://s3n.cashify.in/cashify/store/product/ee2a55278fb1461ba948e199e07f2355.jpg", "https://s3n.cashify.in/cashify/store/product/303cf7d54b514f69a270eccedb497da5.jpg"], "Cream": ["https://s3n.cashify.in/cashify/store/product//2a40f16b3e0247ceb5a38ee4ca46ed12-box.jpg", "https://s3n.cashify.in/cashify/store/product/5199f198479248d3879408d255cd3bfd.jpg", "https://s3n.cashify.in/cashify/store/product/2a40f16b3e0247ceb5a38ee4ca46ed12.jpg", "https://s3n.cashify.in/cashify/store/product/03f2270a2f044f308922ad7bede3d460.jpg"], "Sky Blue": ["https://s3n.cashify.in/cashify/store/product//cbc7e037f0574650858eaea90ce335b5-box.jpg", "https://s3n.cashify.in/cashify/store/product/89c2a90d42aa4cb59209139555a633bb.jpg", "https://s3n.cashify.in/cashify/store/product/cbc7e037f0574650858eaea90ce335b5.jpg", "https://s3n.cashify.in/cashify/store/product/38466d6b806e4d50b9eeebc9915feacd.jpg"]},
    description:"Buy Refurbished Samsung Galaxy S23 Ultra 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more.",
    specifications:{"announcedOn": "1-Feb-23", "launchStatus": "Available", "brand": "Samsung", "modelNumber": "SM-S918B", "priceStatus": "Confirmed", "price": "Rs. 124,999", "screen_size": "17.27 cm (6.8 inch)", "displayTypeGp": "AMOLED", "displayResolutionGp": "1440 x 3088 pixels", "pixelDensity": "501 ppi", "aspectratio": "20:09", "protection": "Gorilla Glass Victus 2", "screenToBodyRatio": "89.99%", "screenDesign": "Punch hole", "screenRefreshRate": "120 Hz", "screenQuality": "2K", "peakBrightness": "1750 nits", "bcOis": "Yes", "rearFlash": "Yes, LED Flash", "rearVideoRecording": "7680x4320 @ 24 fps, 3840x2160 @ 30 fps, 1920x1080 @ 30 fps", "rearCameraFeatures": "Digital Zoom, Auto Flash, Face detection, Touch to focus", "rearCameraSetup": "Quad, 200MP + 12MP + 10MP + 10MP", "rearCamera1Resolution": "200 MP", "rearCamera1Type": "f/1.7, Wide Angle, Primary Camera", "rearCamera1Lens": "12 MP", "rearCamera2Type": "f/2.2, Ultra-Wide Angle Camera", "rearCamera2Lens": "10 MP", "rearCamera3Type": "f/2.4, Telephoto Camera", "rearCamera3Lens": "10 MP", "rearCamera4Type": "f/4.9", "rearCamera4Lens": "ISO-CELL", "rearAperture": "f/1.7", "frontCameraVideo": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps", "frontCameraSetup": "Single, 12MP", "frontCamera1Resolution": "12 MP", "frontCamera1Type": "f/2.2, Wide Angle, Primary Camera", "frontCamera1Lens": "26 mm focal length", "frontAperture": "f/2.2", "gpu": "Adreno 740", "osGp": "Android v13", "chipsetGp": "Qualcomm Snapdragon 8 Gen 2", "cpuGp": "Octa core (3.36 GHz, Single core, Cortex X3 + 2.8 GHz, Quad core, Cortex A715 + 2 GHz, Tri core, Cortex A510)", "customUserInterface": "Samsung One UI", "clockSpeed": "3.36 GHz", "architecture": "64 bit", "processTechnology": "4 nm", "weight": "234 grams", "colorGp": "Green, Red, Phantom Black, Cream, Graphite, Sky Blue, Lime, Lavender", "build": "Back: Gorilla Glass Victus 2", "dimensions": "163.4 x 78.1 x 8.9 mm", "batteryType": "Li-ion", "chargingTime": "65 % in 30 minutes", "fingerprintScanner": "Yes", "fingerprintScannerPosition": "On-Screen", "fingerprintScannerType": "Ultrasonic", "sensors": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope", "ram": "12 GB", "storage": "12 GB / 256 GB", "color": "Green", "grade": "Best Value"},
    specGroups:[{"name": "General", "specs": [{"key": "announcedOn", "name": "Announced On", "value": "1-Feb-23"}, {"key": "launchStatus", "name": "Market Status", "value": "Available"}, {"key": "brand", "name": "Brand", "value": "Samsung"}, {"key": "modelNumber", "name": "Model Number", "value": "SM-S918B"}, {"key": "priceStatus", "name": "Price Status", "value": "Confirmed"}, {"key": "price", "name": "Price", "value": "Rs. 124,999"}]}, {"name": "Display", "specs": [{"key": "screen_size", "name": "Screen Size", "value": "17.27 cm (6.8 inch)"}, {"key": "displayTypeGp", "name": "Screen Type", "value": "AMOLED"}, {"key": "displayResolutionGp", "name": "Screen Resolution", "value": "1440 x 3088 pixels"}, {"key": "pixelDensity", "name": "Pixel Density", "value": "501 ppi"}, {"key": "aspectratio", "name": "Aspect Ratio", "value": "20:09"}, {"key": "protection", "name": "Screen Protection", "value": "Gorilla Glass Victus 2"}, {"key": "screenToBodyRatio", "name": "Screen to Body Ratio", "value": "89.99%"}, {"key": "screenDesign", "name": "Screen Design", "value": "Punch hole"}, {"key": "screenRefreshRate", "name": "Screen Refresh Rate", "value": "120 Hz"}, {"key": "screenQuality", "name": "Screen Quality", "value": "2K"}, {"key": "peakBrightness", "name": "Peak Brightness", "value": "1750 nits"}]}, {"name": "Rear Camera", "specs": [{"key": "bcOis", "name": "OIS", "value": "Yes"}, {"key": "rearFlash", "name": "Rear Flash", "value": "Yes, LED Flash"}, {"key": "rearVideoRecording", "name": "Rear Video Recording", "value": "7680x4320 @ 24 fps, 3840x2160 @ 30 fps, 1920x1080 @ 30 fps"}, {"key": "rearCameraFeatures", "name": "Rear Camera Features", "value": "Digital Zoom, Auto Flash, Face detection, Touch to focus"}, {"key": "rearCameraSetup", "name": "Rear Camera Setup", "value": "Quad, 200MP + 12MP + 10MP + 10MP"}, {"key": "rearCamera1Resolution", "name": "Rear Camera 1 Resolution", "value": "200 MP"}, {"key": "rearCamera1Type", "name": "Rear Camera 1 Type", "value": "f/1.7, Wide Angle, Primary Camera"}, {"key": "rearCamera1Lens", "name": "Rear Camera 1 Lens", "value": "12 MP"}, {"key": "rearCamera2Type", "name": "Rear Camera 2 Type", "value": "f/2.2, Ultra-Wide Angle Camera"}, {"key": "rearCamera2Lens", "name": "Rear Camera 2 Lens", "value": "10 MP"}, {"key": "rearCamera3Type", "name": "Rear Camera 3 Type", "value": "f/2.4, Telephoto Camera"}, {"key": "rearCamera3Lens", "name": "Rear Camera 3 Lens", "value": "10 MP"}, {"key": "rearCamera4Type", "name": "Rear Camera 4 Type", "value": "f/4.9"}, {"key": "rearCamera4Lens", "name": "Rear Camera 4 Lens", "value": "ISO-CELL"}, {"key": "rearAperture", "name": "Rear Aperture", "value": "f/1.7"}]}, {"name": "Front Camera", "specs": [{"key": "frontCameraVideo", "name": "Front Video Recording", "value": "3840x2160 @ 30 fps, 1920x1080 @ 30 fps"}, {"key": "frontCameraSetup", "name": "Front Camera Setup", "value": "Single, 12MP"}, {"key": "frontCamera1Resolution", "name": "Front Camera 1 Resolution", "value": "12 MP"}, {"key": "frontCamera1Type", "name": "Front Camera 1 Type", "value": "f/2.2, Wide Angle, Primary Camera"}, {"key": "frontCamera1Lens", "name": "Front Camera 1 Lens", "value": "26 mm focal length"}, {"key": "frontAperture", "name": "Front Aperture", "value": "f/2.2"}]}, {"name": "Performance", "specs": [{"key": "gpu", "name": "GPU", "value": "Adreno 740"}, {"key": "osGp", "name": "Operating System", "value": "Android v13"}, {"key": "chipsetGp", "name": "Chipset", "value": "Qualcomm Snapdragon 8 Gen 2"}, {"key": "cpuGp", "name": "CPU", "value": "Octa core (3.36 GHz, Single core, Cortex X3 + 2.8 GHz, Quad core, Cortex A715 + 2 GHz, Tri core, Cortex A510)"}, {"key": "customUserInterface", "name": "Custom User Interface", "value": "Samsung One UI"}, {"key": "clockSpeed", "name": "Clock Speed", "value": "3.36 GHz"}, {"key": "architecture", "name": "Architecture", "value": "64 bit"}, {"key": "processTechnology", "name": "Process Technology", "value": "4 nm"}]}, {"name": "Design", "specs": [{"key": "weight", "name": "Weight", "value": "234 grams"}, {"key": "colorGp", "name": "Colors", "value": "Green, Red, Phantom Black, Cream, Graphite, Sky Blue, Lime, Lavender"}, {"key": "build", "name": "Build", "value": "Back: Gorilla Glass Victus 2"}, {"key": "dimensions", "name": "Dimensions", "value": "163.4 x 78.1 x 8.9 mm"}]}, {"name": "Battery", "specs": [{"key": "batteryType", "name": "Battery Type", "value": "Li-ion"}, {"key": "chargingTime", "name": "Charging Time", "value": "65 % in 30 minutes"}]}, {"name": "Sensors", "specs": [{"key": "fingerprintScanner", "name": "Fingerprint Scanner", "value": "Yes"}, {"key": "fingerprintScannerPosition", "name": "Fingerprint Scanner Position", "value": "On-Screen"}, {"key": "fingerprintScannerType", "name": "Fingerprint Scanner Type", "value": "Ultrasonic"}]}, {"name": "Miscellaneous Features", "specs": [{"key": "sensors", "name": "Sensors", "value": "Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, Gyroscope"}]}],
    topSpecs:[["17.27 cm (6.8 inch)", "Screen Size"], ["Qualcomm Snapdragon 8 Gen 2", "Chipset"], ["501 ppi", "Pixel Density"]],
    deviceVideos:[{"url": "https://media.cashify.in/trc/optimised/10s/c035508b62d242279b4ccc6348c0d70b.mp4", "label": "Samsung Galaxy S23 Ultra 5G real product video"}],
    extendedWarrantyAmount:0,
    warrantyDuration:6,
    contentHeading:"Buy Samsung Galaxy S23 Ultra 5G",
    contentText:"Buy Refurbished Samsung Galaxy S23 Ultra 5G online in India at best price! Get benefits like 6 months warranty, easy EMI, and more."
  },

  "dji osmo mobile 8 gimbal":{
    type:"accessory",
    title:"DJI OSMO Mobile 8 Gimbal",
    coverImage:"https://s3n.cashify.in/cashify/store/product/0b401bb5ea524e80812de9e3a8470df1.png",
    gallery:["https://s3n.cashify.in/cashify/store/product/0b401bb5ea524e80812de9e3a8470df1.png", "https://s3n.cashify.in/cashify/store/product/009ccb7e2ccc47a59b78af9fe504894c.webp", "https://s3n.cashify.in/cashify/store/product/4ff1f4a86cbf44e0874ef0569b406858.png", "https://s3n.cashify.in/cashify/store/product/7607c5d6393c4c9e9df6077d9988a750.webp", "https://s3n.cashify.in/cashify/store/product/4b63139db0214f709365e75d4dd99335.png", "https://s3n.cashify.in/cashify/store/product/6e418323bac24292bb0074b9a6eaeecd.webp", "https://s3n.cashify.in/cashify/store/product/30c682aa2137479bb5bfe1d19b218112.png", "https://s3n.cashify.in/cashify/store/product/e977fbe51221457b869fcbd542ef5652.webp"],
    galleryByColor:{"Black": ["https://s3n.cashify.in/cashify/store/product/0b401bb5ea524e80812de9e3a8470df1.png", "https://s3n.cashify.in/cashify/store/product/4ff1f4a86cbf44e0874ef0569b406858.png", "https://s3n.cashify.in/cashify/store/product/4b63139db0214f709365e75d4dd99335.png", "https://s3n.cashify.in/cashify/store/product/30c682aa2137479bb5bfe1d19b218112.png"], "Gray": ["https://s3n.cashify.in/cashify/store/product/009ccb7e2ccc47a59b78af9fe504894c.webp", "https://s3n.cashify.in/cashify/store/product/7607c5d6393c4c9e9df6077d9988a750.webp", "https://s3n.cashify.in/cashify/store/product/6e418323bac24292bb0074b9a6eaeecd.webp", "https://s3n.cashify.in/cashify/store/product/e977fbe51221457b869fcbd542ef5652.webp"]},
    description:"Buy Openbox DJI Osmo Mobile 8 online in India at best price! Get benefits up to 12 months warranty, easy EMI, and more.",
    specifications:{
      productType:'Openbox Accessories',
      brand:'DJI',
      color:'Black',
      grade:'Open Box',
      source:'Cashify Warranty',
      warranty:'3 Months',
      mrp:'₹15,990',
      sellingPrice:'₹9,999',
      availableInventory:'15',
      variantName:'Open Box / Black',
      sku:'MK-OBA-113946-BLA-OB',
      productDiscoveryId:'113946',
      variantId:'172144'
    },
    specGroups:[],
    topSpecs:[["Black", "Colour"], ["Open Box", "Condition"]],
    deviceVideos:[],
    extendedWarrantyAmount:0,
    warrantyDuration:3,
    contentHeading:"Buy DJI OSMO Mobile 8 Gimbal",
    contentText:"Buy Openbox DJI Osmo Mobile 8 online in India at best price! Get benefits up to 12 months warranty, easy EMI, and more."
  },

  "dji rs3 mini gimbal":{
    type:"accessory",
    title:"DJI RS3 Mini Gimbal",
    coverImage:"https://s3n.cashify.in/cashify/store/product/222639c9a3c94087882cdf668dfa0576.jpg",
    gallery:["https://s3n.cashify.in/cashify/store/product/222639c9a3c94087882cdf668dfa0576.jpg", "https://s3n.cashify.in/cashify/store/product/462a673c69284bf9bf868dc4ae782d55.jpg", "https://s3n.cashify.in/cashify/store/product/233ef84bfa9b49c7aacc8d0a084c0dd8.jpg", "https://s3n.cashify.in/cashify/store/product/f19f96aa207a4207a238f3592800e524.jpg"],
    galleryByColor:{"Black": ["https://s3n.cashify.in/cashify/store/product/222639c9a3c94087882cdf668dfa0576.jpg", "https://s3n.cashify.in/cashify/store/product/462a673c69284bf9bf868dc4ae782d55.jpg", "https://s3n.cashify.in/cashify/store/product/233ef84bfa9b49c7aacc8d0a084c0dd8.jpg", "https://s3n.cashify.in/cashify/store/product/f19f96aa207a4207a238f3592800e524.jpg"]},
    description:"Refurbished DJI DJI RS3 Mini Gimbal  - Unboxed at ₹16999 on Cashify. Free shipping across India.",
    specifications:{
      productType:'Openbox Accessories',
      brand:'DJI',
      color:'Black',
      grade:'Open Box',
      source:'Cashify Warranty',
      warranty:'3 Months',
      mrp:'₹35,990',
      sellingPrice:'₹16,999',
      availableInventory:'1',
      variantName:'Open Box / Black',
      sku:'MK-OBA-111954-BLK-OB',
      productDiscoveryId:'111954',
      variantId:'168659'
    },
    specGroups:[],
    topSpecs:[["Black", "Colour"], ["Open Box", "Condition"]],
    deviceVideos:[],
    extendedWarrantyAmount:0,
    warrantyDuration:3,
    contentHeading:"Buy DJI RS3 Mini Gimbal",
    contentText:"Refurbished DJI DJI RS3 Mini Gimbal  - Unboxed at ₹16999 on Cashify. Free shipping across India."
  },

  'oppo reno15 pro 5g':{
    type:'phone',
    title:'OPPO Reno15 Pro 5G',
    specifications:{
      screen:'6.78 inches',
      display:'AMOLED',
      resolution:'High-resolution AMOLED display',
      pixelDensity:'450 ppi',
      processor:'MediaTek Dimensity 8450',
      rearCamera:'50 MP',
      frontCamera:'50 MP',
      battery:'6200 mAh',
      network:'5G',
      sim:'Dual SIM, GSM+GSM',
      fingerprint:'Yes',
      operatingSystem:'Android',
      charging:'Fast charging'
    },
    topSpecs:[
      ['6.78 inches','Screen Size'],
      ['MediaTek Dimensity 8450','Chipset'],
      ['450 ppi','Pixel Density'],
      ['5G','Network Support'],
      ['Dual SIM, GSM+GSM','SIM Slot(s)']
    ],
    deviceVideos:[
      {
        url:'https://media.cashify.in/trc/optimised/6s/d075159b29054e2fbad16b276d76bea7.mp4',
        poster:'https://media.cashify.in/trc/optimised/thumbnail/d075159b29054e2fbad16b276d76bea7.webp',
        label:'OPPO Reno15 Pro 5G device video'
      }
    ]
  },

  'samsung galaxy s24 ultra 5g':{
    type:'phone',
    title:'Samsung Galaxy S24 Ultra 5G',
    specifications:{
      screen:'6.8 inches',
      display:'Dynamic AMOLED 2X, 120Hz',
      resolution:'QHD+',
      processor:'Snapdragon 8 Gen 3 for Galaxy',
      rearCamera:'200 MP + 50 MP + 12 MP + 10 MP',
      frontCamera:'12 MP',
      battery:'5000 mAh',
      network:'5G',
      sim:'Dual SIM / eSIM',
      fingerprint:'Ultrasonic fingerprint',
      operatingSystem:'Android 14 / One UI 6.1',
      charging:'45W wired charging',
      durability:'IP68'
    },
    topSpecs:[
      ['6.8 inches','Screen Size'],
      ['Snapdragon 8 Gen 3','Chipset'],
      ['200 MP','Main Camera'],
      ['5G','Network Support'],
      ['5000 mAh','Battery']
    ],
    deviceVideos:[
      {
        url:'https://media.cashify.in/trc/optimised/clip/d1068cecf5e24549bade4910a92d8681.mp4',
        label:'Samsung Galaxy S24 Ultra 5G device video'
      }
    ]
  },

  'samsung galaxy s21 ultra 5g':{
    type:'phone',
    title:'Samsung Galaxy S21 Ultra 5G',
    specifications:{
      screen:'6.8 inches',
      display:'Dynamic AMOLED 2X, 120Hz',
      resolution:'3200 × 1440',
      processor:'Exynos 2100',
      rearCamera:'108 MP + 12 MP + 10 MP + 10 MP',
      frontCamera:'40 MP',
      battery:'5000 mAh',
      network:'5G',
      sim:'Dual SIM',
      fingerprint:'Ultrasonic fingerprint',
      operatingSystem:'Android',
      charging:'Fast charging',
      durability:'IP68'
    },
    topSpecs:[
      ['6.8 inches','Screen Size'],
      ['Exynos 2100','Chipset'],
      ['108 MP','Main Camera'],
      ['5G','Network Support'],
      ['5000 mAh','Battery']
    ],
    deviceVideos:[
      {
        url:'https://media.cashify.in/trc/optimised/clip/b8f9c77e46d8430f86c2d43a5358bf6a.mp4',
        label:'Samsung Galaxy S21 Ultra 5G device video'
      }
    ]
  },

  'samsung galaxy s20 fe 5g':{
    type:'phone',
    title:'Samsung Galaxy S20 FE 5G',
    specifications:{
      screen:'6.5 inches',
      display:'Super AMOLED, 120Hz',
      resolution:'2400 × 1080',
      processor:'Snapdragon 865',
      rearCamera:'12 MP + 12 MP + 8 MP',
      frontCamera:'32 MP',
      battery:'4500 mAh',
      network:'5G',
      sim:'Dual SIM',
      fingerprint:'In-display fingerprint',
      operatingSystem:'Android',
      charging:'25W fast charging',
      durability:'IP68'
    },
    topSpecs:[
      ['6.5 inches','Screen Size'],
      ['Snapdragon 865','Chipset'],
      ['32 MP','Front Camera'],
      ['5G','Network Support'],
      ['4500 mAh','Battery']
    ]
  },

  'oneplus nord 2 5g':{
    type:'phone',
    title:'OnePlus Nord 2 5G',
    specifications:{
      screen:'6.43 inches',
      display:'Fluid AMOLED, 90Hz',
      resolution:'2400 × 1080, 410 ppi',
      processor:'MediaTek Dimensity 1200-AI',
      rearCamera:'50 MP + 8 MP + 2 MP',
      frontCamera:'32 MP',
      battery:'4500 mAh',
      network:'5G',
      sim:'Dual 5G SIM',
      fingerprint:'In-display fingerprint',
      operatingSystem:'OxygenOS 11.3',
      charging:'Warp Charge 65',
      storageType:'UFS 3.1'
    },
    topSpecs:[
      ['6.43 inches','Screen Size'],
      ['Dimensity 1200-AI','Chipset'],
      ['50 MP','Main Camera'],
      ['90Hz','Refresh Rate'],
      ['4500 mAh','Battery']
    ]
  },

  'oneplus 12':{
    type:'phone',
    title:'OnePlus 12',
    specifications:{
      screen:'6.82 inches',
      display:'120Hz ProXDR LTPO',
      resolution:'3168 × 1440, 510 ppi',
      processor:'Snapdragon 8 Gen 3',
      rearCamera:'50 MP + 64 MP + 48 MP',
      frontCamera:'32 MP',
      battery:'5400 mAh',
      network:'5G',
      sim:'Dual SIM',
      fingerprint:'In-display fingerprint',
      operatingSystem:'OxygenOS 14 / Android 14',
      charging:'100W SUPERVOOC + 50W AIRVOOC',
      storageType:'UFS 4.0'
    },
    topSpecs:[
      ['6.82 inches','Screen Size'],
      ['Snapdragon 8 Gen 3','Chipset'],
      ['50 MP','Main Camera'],
      ['5400 mAh','Battery'],
      ['100W','Wired Charging']
    ]
  },

  'iphone 14':{
    type:'phone',
    title:'Apple iPhone 14',
    specifications:{
      screen:'6.1 inches',
      display:'Super Retina XDR OLED',
      resolution:'2532 × 1170, 460 ppi',
      processor:'A15 Bionic',
      rearCamera:'12 MP Main + 12 MP Ultra Wide',
      frontCamera:'12 MP TrueDepth',
      battery:'Up to 20 hours video playback',
      network:'5G',
      sim:'Nano-SIM + eSIM',
      fingerprint:'Face ID',
      operatingSystem:'iOS',
      charging:'Lightning / MagSafe',
      durability:'IP68'
    },
    topSpecs:[
      ['6.1 inches','Screen Size'],
      ['A15 Bionic','Chipset'],
      ['12 MP Dual','Rear Camera'],
      ['5G','Network Support'],
      ['IP68','Water Resistance']
    ]
  },

  'ipad 10th gen':{
    type:'tablet',
    title:'Apple iPad 10th Gen',
    specifications:{
      screen:'10.9-inch Liquid Retina',
      resolution:'2360 × 1640, 264 ppi',
      processor:'A14 Bionic',
      rearCamera:'12 MP Wide',
      frontCamera:'12 MP landscape Ultra Wide',
      battery:'Up to 10 hours Wi-Fi web/video',
      network:'Wi-Fi 6 / optional 5G',
      biometric:'Touch ID',
      operatingSystem:'iPadOS',
      charging:'USB-C',
      speakers:'Landscape stereo speakers'
    },
    topSpecs:[
      ['10.9 inches','Display'],
      ['A14 Bionic','Chip'],
      ['12 MP','Rear Camera'],
      ['USB-C','Connector'],
      ['Wi-Fi 6','Wireless']
    ]
  },

  'galaxy tab s8':{
    type:'tablet',
    title:'Samsung Galaxy Tab S8',
    specifications:{
      screen:'11 inches',
      display:'LTPS TFT, up to 120Hz',
      resolution:'2560 × 1600, 276 ppi',
      processor:'Snapdragon 8 Gen 1',
      rearCamera:'13 MP + 6 MP',
      frontCamera:'12 MP Ultra Wide',
      battery:'8000 mAh',
      network:'Wi-Fi 6E / optional 5G',
      biometric:'Side fingerprint',
      operatingSystem:'Android',
      charging:'Up to 45W',
      speakers:'Quad speakers'
    },
    topSpecs:[
      ['11 inches','Display'],
      ['120Hz','Refresh Rate'],
      ['8000 mAh','Battery'],
      ['13 MP + 6 MP','Rear Camera'],
      ['Wi-Fi 6E','Wireless']
    ]
  },

  'watch series 8':{
    type:'watch',
    title:'Apple Watch Series 8',
    specifications:{
      display:'Always-On Retina LTPO OLED',
      caseSize:'41 mm / 45 mm',
      processor:'S8 SiP dual-core',
      storage:'32 GB',
      battery:'Up to 18 hours',
      network:'GPS / optional LTE',
      connectivity:'Wi-Fi + Bluetooth 5.3',
      sensors:'Temperature, heart rate, ECG, blood oxygen, accelerometer, gyro',
      charging:'USB-C magnetic fast charging',
      durability:'Water resistant'
    },
    topSpecs:[
      ['41 / 45 mm','Case Size'],
      ['S8 SiP','Chip'],
      ['32 GB','Storage'],
      ['18 hours','Battery'],
      ['Bluetooth 5.3','Connectivity']
    ]
  },

  'galaxy watch 6':{
    type:'watch',
    title:'Samsung Galaxy Watch6',
    specifications:{
      display:'Super AMOLED',
      caseSize:'40 mm / 44 mm',
      processor:'Exynos W930 dual-core 1.4GHz',
      ram:'2 GB',
      storage:'16 GB',
      battery:'300 / 425 mAh',
      network:'Bluetooth / optional LTE',
      connectivity:'Wi-Fi, Bluetooth 5.3, NFC, GPS',
      sensors:'BioActive sensor, temperature, accelerometer, barometer, gyro',
      operatingSystem:'Wear OS Powered by Samsung',
      durability:'5ATM + IP68 / MIL-STD-810H'
    },
    topSpecs:[
      ['40 / 44 mm','Case Size'],
      ['Exynos W930','Processor'],
      ['16 GB','Storage'],
      ['Bluetooth 5.3','Connectivity'],
      ['5ATM + IP68','Durability']
    ]
  },

  'playstation 5':{
    type:'gaming',
    title:'Sony PlayStation 5',
    specifications:{
      processor:'AMD Ryzen Zen 2, 8 cores / 16 threads',
      graphics:'AMD Radeon RDNA 2',
      memory:'16 GB GDDR6',
      storage:'825 GB / 1 TB Custom SSD',
      output:'4K 120Hz, VRR, HDMI 2.1',
      audio:'Tempest 3D AudioTech',
      connectivity:'Ethernet, Wi-Fi, Bluetooth',
      disc:'Ultra HD Blu-ray on disc model'
    },
    topSpecs:[
      ['Zen 2','CPU'],
      ['RDNA 2','GPU'],
      ['16 GB','GDDR6'],
      ['Custom SSD','Storage'],
      ['4K 120Hz','Video Output']
    ]
  },

  'wireless earbuds':{
    type:'accessory',
    title:'Premium Wireless Earbuds',
    specifications:{
      productType:'True wireless audio',
      connectivity:'Bluetooth',
      charging:'Charging case',
      controls:'Touch / button controls',
      useCase:'Calls, music and everyday listening'
    },
    topSpecs:[
      ['Bluetooth','Connectivity'],
      ['TWS','Form Factor'],
      ['Charging Case','Charging'],
      ['Stereo','Audio'],
      ['Portable','Use']
    ]
  },

  'mobile accessories':{
    type:'accessory',
    title:'Mobile Accessories',
    specifications:{
      productType:'Mobile accessory',
      compatibility:'Smartphones and compatible devices',
      useCase:'Everyday mobile use',
      condition:'Quality checked'
    },
    topSpecs:[
      ['Mobile','Category'],
      ['Quality Checked','Condition'],
      ['Everyday Use','Purpose']
    ]
  }

};

const normalize=value=>
  String(value||'')
    .toLowerCase()
    .replace(/\s*-\s*refurbished/gi,'')
    .replace(/\(refurbished\)/gi,'')
    .replace(/\s*-\s*unboxed/gi,'')
    .replace(/\(unboxed\)/gi,'')
    .replace(/\s*-\s*new/gi,'')
    .trim();

const genericCategoryProfile=product=>{

  const category=
    normalize(product?.category);

  if(category==='laptops'){
    return {
      type:'laptop',
      title:product.model||product.name,
      specifications:{
        ram:product.ram||'Configured per listing',
        storage:product.storage||'Configured per listing',
        processor:product.processor||product.cpu||'See model configuration',
        display:product.display||product.screen||'See model configuration',
        operatingSystem:product.os||product.operatingSystem||'See model configuration',
        connectivity:product.connectivity||'Wi-Fi / Bluetooth',
        battery:product.battery||'Battery tested during refurbishment'
      },
      topSpecs:[
        [product.ram||'Configured','RAM'],
        [product.storage||'Configured','Storage'],
        [product.processor||product.cpu||'Model specific','Processor'],
        [product.display||product.screen||'Model specific','Display']
      ]
    };
  }

  if(category==='tablets'){
    return {
      type:'tablet',
      title:product.model||product.name,
      specifications:{
        ram:product.ram||'Configured per listing',
        storage:product.storage||'Configured per listing',
        display:product.display||product.screen||'Tablet display',
        connectivity:product.connectivity||'Wi-Fi / Bluetooth',
        battery:product.battery||'Battery tested during refurbishment'
      },
      topSpecs:[
        [product.storage||'Configured','Storage'],
        [product.display||product.screen||'Tablet','Display']
      ]
    };
  }

  if(category==='smartwatches'){
    return {
      type:'watch',
      title:product.model||product.name,
      specifications:{
        display:product.display||'Smartwatch display',
        connectivity:product.connectivity||'Bluetooth / Wi-Fi',
        sensors:product.sensors||'Health and motion sensors',
        battery:product.battery||'Battery tested during refurbishment'
      },
      topSpecs:[
        [product.model||'Smartwatch','Model'],
        [product.connectivity||'Bluetooth','Connectivity']
      ]
    };
  }

  if(category==='gaming'){
    return {
      type:'gaming',
      title:product.model||product.name,
      specifications:{
        productType:'Gaming console',
        storage:product.storage||'Configured per listing',
        connectivity:product.connectivity||'Wi-Fi / Ethernet',
        output:product.output||'HDMI video output'
      },
      topSpecs:[
        [product.model||'Console','Model'],
        [product.storage||'Configured','Storage']
      ]
    };
  }


  if(category==='audio'){
    return {
      type:'accessory',
      title:product.model||product.name,
      specifications:{
        productType:
          product?.specifications?.productType||
          'Audio Device',
        brand:
          product.brand||
          product?.specifications?.brand||
          '',
        connectivity:
          product.connectivity||
          product?.specifications?.connectivity||
          'See product listing',
        condition:
          product.condition||
          product?.specifications?.condition||
          'Quality checked',
        warranty:
          product.warranty||
          product?.specifications?.warranty||
          'As listed'
      },
      topSpecs:[
        [
          product.model||
          product.name||
          'Audio Device',
          'Product'
        ],
        [
          product.condition||
          'Quality Checked',
          'Condition'
        ]
      ]
    };
  }

  if(category==='accessories'){
    return {
      type:'accessory',
      title:product.model||product.name,
      specifications:{
        productType:'Accessory',
        compatibility:product.compatibility||'Compatible devices',
        condition:product.condition||'Quality checked'
      },
      topSpecs:[
        [product.model||'Accessory','Product']
      ]
    };
  }

  return {
    type:'phone',
    title:product.model||product.name,
    specifications:{
      ram:product.ram||'Configured per listing',
      storage:product.storage||'Configured per listing',
      network:product.network||'Mobile network',
      condition:product.condition||'Refurbished'
    },
    topSpecs:[
      [product.ram||'Configured','RAM'],
      [product.storage||'Configured','Storage']
    ]
  };
};

export function getProductProfile(product){

  const text=normalize(
    `${product?.model||''} ${product?.name||''}`
  );

  const key=
    Object.keys(MODEL_PROFILES)
      .find(model=>
        text.includes(model)
      );

  const base=
    key
      ?MODEL_PROFILES[key]
      :genericCategoryProfile(product);

  const productGallery=
    Array.isArray(product?.gallery)
      ?product.gallery.filter(Boolean)
      :[];

  const baseGallery=
    Array.isArray(base?.gallery)
      ?base.gallery.filter(Boolean)
      :[];

  const productVideos=
    Array.isArray(product?.deviceVideos)
      ?product.deviceVideos.filter(
        item=>item&&item.url
      )
      :[];

  const baseVideos=
    Array.isArray(base?.deviceVideos)
      ?base.deviceVideos.filter(
        item=>item&&item.url
      )
      :[];

  const productSpecGroups=
    Array.isArray(product?.specGroups)
      ?product.specGroups
      :[];

  const baseSpecGroups=
    Array.isArray(base?.specGroups)
      ?base.specGroups
      :[];

  const productTopSpecs=
    Array.isArray(product?.topSpecs)
      ?product.topSpecs
      :[];

  const baseTopSpecs=
    Array.isArray(base?.topSpecs)
      ?base.topSpecs
      :[];

  const warrantyFromText=
    Number(
      String(
        product?.warranty||
        ''
      ).match(/\d+/)?.[0]||
      0
    );

  return {
    ...base,

    title:
      product?.model||
      base?.title||
      product?.name||
      '',

    coverImage:
      product?.image||
      productGallery[0]||
      base?.coverImage||
      baseGallery[0]||
      '',

    gallery:
      productGallery.length
        ?productGallery
        :baseGallery,

    galleryByColor:
      product?.galleryByColor&&
      typeof product.galleryByColor==='object'
        ?product.galleryByColor
        :base?.galleryByColor||{},

    description:
      product?.description||
      base?.description||
      '',

    specGroups:
      productSpecGroups.length
        ?productSpecGroups
        :baseSpecGroups,

    topSpecs:
      productTopSpecs.length
        ?productTopSpecs
        :baseTopSpecs,

    warrantyDuration:
      Number(
        product?.warrantyDuration||
        warrantyFromText||
        base?.warrantyDuration||
        0
      )||0,

    extendedWarrantyAmount:
      Number(
        product?.extendedWarrantyAmount||
        base?.extendedWarrantyAmount||
        0
      )||0,

    specifications:{
      ...(base?.specifications||{}),
      ...(product?.specifications||{}),

      ram:
        product?.ram||
        product?.specifications?.ram||
        base?.specifications?.ram||
        '',

      storage:
        product?.storage||
        product?.specifications?.storage||
        base?.specifications?.storage||
        '',

      color:
        product?.color||
        product?.specifications?.color||
        base?.specifications?.color||
        '',

      condition:
        product?.condition||
        product?.specifications?.condition||
        base?.specifications?.condition||
        ''
    },

    deviceVideos:
      productVideos.length
        ?productVideos
        :baseVideos
  };
}


export const CASHIFY_INFO_VIDEOS=[
  'https://www.youtube.com/embed/w4WfBYH9YQA',
  'https://www.youtube.com/embed/gMaInDX9tZE',
  'https://www.youtube.com/embed/RgmSWi_vhXA'
];
