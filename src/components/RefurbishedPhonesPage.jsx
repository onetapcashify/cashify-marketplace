import React,{useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  ArrowRight
} from 'lucide-react';

import {
  refurbishedPhonesPageData as page
} from '../data/refurbishedPhonesPageData.js';


const normalize=value=>
  String(value||'')
    .toLowerCase()
    .replace(/\([^)]*\)/g,' ')
    .replace(/\s*-\s*refurbished/gi,' ')
    .replace(/\s*-\s*unboxed/gi,' ')
    .replace(/\s*-\s*new/gi,' ')
    .replace(/\b\d+\s*gb\s*\/\s*\d+\s*gb\b/gi,' ')
    .replace(/\b\d+\s*gb\b/gi,' ')
    .replace(/\b(best value|fair|good|superb|open box)\b/gi,' ')
    .replace(/[^a-z0-9]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();


const pageProductId=item=>
  `ref-phonepage-${String(
    item?.model||
    item?.name||
    'product'
  )
    .toLowerCase()
    .replace(/\s*-\s*refurbished/gi,'')
    .replace(/\s*-\s*unboxed/gi,'')
    .replace(/\s*-\s*new/gi,'')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-|-$/g,'')}`;


function findLocalProduct(item,source){

  if(!item) return null;

  const stableId=
    item.localId||
    pageProductId(item);

  const stableMatch=
    source.find(
      product=>
        String(product.id)===
        String(stableId)
    );

  if(stableMatch){
    return stableMatch;
  }

  if(item.localId){
    const direct=
      source.find(
        product=>
          String(product.id)===
          String(item.localId)
      );

    if(direct) return direct;
  }

  const target=
    normalize(
      item.model||
      item.name
    );

  const exact=
    source.find(product=>{

      const candidate=
        normalize(
          product.model||
          product.name
        );

      return candidate===target;

    });

  if(exact) return exact;

  const partial=
    source.find(product=>{

      const candidate=
        normalize(
          product.model||
          product.name
        );

      if(!candidate||!target){
        return false;
      }

      return (
        candidate.includes(target) ||
        target.includes(candidate)
      );

    });

  return partial||null;
}


function SourceProductCard({
  item,
  source,
  onPlay
}){

  const local=
    useMemo(
      ()=>
        findLocalProduct(item,source),
      [item,source]
    );

  const body=(
    <>
      <div className="rfp-card-image">

        <img
          src={item.image}
          alt={item.name}
        />

        {item.video?.url&&(
          <button
            type="button"
            className="rfp-play"
            onClick={event=>{
              event.preventDefault();
              event.stopPropagation();
              onPlay(item);
            }}
            aria-label={`Play ${item.name} video`}
          >
            <Play
              size={19}
              fill="currentColor"
            />
          </button>
        )}

      </div>

      <div className="rfp-card-overlay">

        <div className="rfp-card-tags">
          <span>
            {item.badge||'Lowest Price'}
          </span>

          {item.rating&&(
            <span className="rfp-rating">
              {item.rating}
              <Star
                size={10}
                fill="currentColor"
              />
            </span>
          )}
        </div>

      </div>

      <div className="rfp-card-copy">

        <h3>{item.name}</h3>

        <div className="rfp-price-row">

          {item.discount&&(
            <span className="rfp-discount">
              -{item.discount}
            </span>
          )}

          <strong>
            ₹{item.price}
          </strong>

        </div>

      </div>
    </>
  );

  const productId=
    local?.id||
    item.localId||
    pageProductId(item);

  return (
    <Link
      className="rfp-card"
      to={`/product/${productId}`}
    >
      {body}
    </Link>
  );
}


function ProductRail({
  title,
  products,
  source,
  onPlay
}){

  return (
    <section className="rfp-section">

      <div className="rfp-section-head">
        <h2>{title}</h2>
        <span>View All</span>
      </div>

      <div className="rfp-product-row">

        {products.map(item=>(
          <SourceProductCard
            key={item.name}
            item={item}
            source={source}
            onPlay={onPlay}
          />
        ))}

      </div>

    </section>
  );
}


export default function RefurbishedPhonesPage({
  source=[]
}){

  const [bannerIndex,setBannerIndex]=
    useState(0);

  const [video,setVideo]=
    useState(null);

  const prev=()=>{
    setBannerIndex(index=>
      (
        index-1+
        page.banners.length
      )%page.banners.length
    );
  };

  const next=()=>{
    setBannerIndex(index=>
      (
        index+1
      )%page.banners.length
    );
  };

  const currentBanner=
    page.banners[bannerIndex];

  return (
    <div className="rfp-page">

      <div className="rfp-title">
        {page.title}
      </div>

      <div className="rfp-countdown">
        <strong>
          {page.countdown.message}
        </strong>
        <span>Limited time refurbished-device offers</span>
      </div>

      <div className="container rfp-container">

        <div className="rfp-device-strip">

          {page.topTiles.map(item=>(
            <Link
              to={
                item.label==='Laptops'
                  ?'/buy/laptops'
                  :item.label==='Tablets'
                    ?'/buy/tablets'
                    :item.label==='Smart Watches'
                      ?'/buy/smartwatches'
                      :item.label==='Gaming Consoles'
                        ?'/buy/gaming'
                        :item.label==='Audio Devices'
                          ?'/buy/audio'
                          :item.label==='New Accessories'
                            ?'/buy/accessories'
                            :'#'
              }
              className="rfp-device-tile"
              key={item.label}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.label}
                />
              </div>
              <span>{item.label}</span>
            </Link>
          ))}

        </div>


        {!!currentBanner&&(
          <section className="rfp-banner">

            <img
              src={currentBanner.image}
              alt={currentBanner.alt||''}
            />

            <button
              type="button"
              className="rfp-banner-arrow left"
              onClick={prev}
              aria-label="Previous banner"
            >
              <ChevronLeft size={22}/>
            </button>

            <button
              type="button"
              className="rfp-banner-arrow right"
              onClick={next}
              aria-label="Next banner"
            >
              <ChevronRight size={22}/>
            </button>

            <div className="rfp-banner-dots">
              {page.banners.map((_,index)=>(
                <button
                  type="button"
                  key={index}
                  className={
                    index===bannerIndex
                      ?'active'
                      :''
                  }
                  onClick={()=>
                    setBannerIndex(index)
                  }
                  aria-label={`Banner ${index+1}`}
                />
              ))}
            </div>

          </section>
        )}


        <section className="rfp-section">

          <div className="rfp-section-head">
            <h2>Favourite Brands</h2>
          </div>

          <div className="rfp-brand-row">

            {page.brands.map(brand=>(
              <Link
                className="rfp-brand"
                key={brand.label}
                to={`/buy/phones?brand=${encodeURIComponent(brand.label)}`}
              >
                <div className="rfp-brand-image">
                  <img
                    src={brand.image}
                    alt={brand.label}
                  />
                </div>

                <small>Starting From</small>

                <strong>
                  ₹{brand.price}
                </strong>
              </Link>
            ))}

          </div>

        </section>


        <ProductRail
          title="Flash Sale"
          products={page.sections['Flash Sale']}
          source={source}
          onPlay={setVideo}
        />


        <section className="rfp-shop-brand">

          <div className="rfp-shop-brand-card">
            <img
              src="https://s3ng.cashify.in/estore/1b450362e1544460851865dc278f58d6.webp"
              alt="Android"
            />
          </div>

          <div className="rfp-shop-brand-card">
            <img
              src="https://s3ng.cashify.in/estore/505870ad8c4c4e8fbeb90d6d4b37931c.webp"
              alt="Apple"
            />
          </div>

        </section>


        <ProductRail
          title="Selling Fast"
          products={page.sections['Selling Fast']}
          source={source}
          onPlay={setVideo}
        />


        <section className="rfp-section">

          <div className="rfp-section-head">
            <h2>Shop By Price</h2>
          </div>

          <div className="rfp-price-cards">

            {page.prices.map(price=>(
              <Link
                key={price}
                className="rfp-price-card"
                to={`/buy/phones?maxPrice=${encodeURIComponent(price.replace(/,/g,''))}`}
              >
                <span>UNDER</span>
                <strong>₹{price}</strong>
                <i>
                  <ArrowRight size={14}/>
                </i>
              </Link>
            ))}

          </div>

        </section>


        <ProductRail
          title="Best Android Deals"
          products={page.sections['Best Android Deals']}
          source={source}
          onPlay={setVideo}
        />


        <ProductRail
          title="Other Accessories"
          products={page.sections['Other Accessories']}
          source={source}
          onPlay={setVideo}
        />


        <ProductRail
          title="Best Selling Audio Devices"
          products={page.sections['Best Selling Audio Devices']}
          source={source}
          onPlay={setVideo}
        />


        <section className="rfp-section rfp-conditions">

          <div className="rfp-section-head conditions">
            <div>
              <h2>Conditions Explained</h2>
              <p>
                Refurbished phones come in 4 variants - Superb, Good,
                Fair, Best Value. Check the condition cards to understand
                the available grades.
              </p>
            </div>
          </div>

          <div className="rfp-condition-row">

            {page.conditions.map(item=>(
              <article
                className="rfp-condition-card"
                key={item.label}
              >
                <img
                  src={item.image}
                  alt={item.label}
                />
                <strong>{item.label}</strong>
              </article>
            ))}

          </div>

        </section>


        <section className="rfp-section">

          <div className="rfp-section-head">
            <h2>In The News</h2>
          </div>

          <div className="rfp-news-row">

            {page.news.map((item,index)=>(
              <article
                className="rfp-news-card"
                key={`${item.image}-${index}`}
              >
                <img
                  src={item.image}
                  alt=""
                />

                <p>{item.text}</p>

                <span>Read more</span>
              </article>
            ))}

          </div>

        </section>


        <section className="rfp-trust">

          <h2>
            10+ lakh Happy heroes of Earth trust us to buy refurbished phones
          </h2>

          <p>
            Quality-checked devices, warranty support and a wide selection
            of brands, conditions and price ranges.
          </p>

        </section>


        <section className="rfp-seo">

          <h2>
            Buy Refurbished and Second Hand Mobile Phone
          </h2>

          <p>
            {page.seoDescription}
          </p>

          <h3>
            Why Go for Refurbished Phones?
          </h3>

          <p>
            Refurbished phones offer an affordable way to upgrade while
            extending the useful life of devices.
          </p>

          <h3>
            How To Buy Refurbished Mobiles Through Cashify?
          </h3>

          <p>
            Browse the available phones, select the model and condition,
            review the product details and continue through checkout.
          </p>

          <h2>
            Frequently Asked Questions
          </h2>

          <details>
            <summary>
              Are refurbished phones quality checked?
            </summary>
            <p>
              Product condition and warranty details are displayed on each
              product page before purchase.
            </p>
          </details>

          <details>
            <summary>
              Is warranty available?
            </summary>
            <p>
              The warranty applicable to the selected product is shown on
              its product page.
            </p>
          </details>

        </section>

      </div>


      {video?.video?.url&&(
        <div
          className="rfp-video-modal"
          onClick={()=>
            setVideo(null)
          }
        >

          <div
            className="rfp-video-dialog"
            onClick={event=>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              onClick={()=>
                setVideo(null)
              }
            >
              ×
            </button>

            <video
              controls
              autoPlay
              playsInline
              poster={
                video.video.thumbnail||
                video.image
              }
            >
              <source
                src={video.video.url}
                type="video/mp4"
              />
            </video>

            <strong>
              {video.name}
            </strong>

          </div>

        </div>
      )}

    </div>
  );
}
