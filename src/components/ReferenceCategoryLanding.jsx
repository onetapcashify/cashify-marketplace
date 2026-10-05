import React,{useEffect,useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Star
} from 'lucide-react';

import {
  commonCategoryTiles,
  getCategoryLanding
} from '../data/categoryLandingData.js';

const normalize=value=>
  String(value||'')
    .toLowerCase()
    .replace(/\s*-\s*refurbished/g,'')
    .replace(/\s+/g,' ')
    .trim();

function ReferenceCard({
  item,
  source
}){

  const local=useMemo(
    ()=>{

      const target=
        normalize(item.name);

      return source.find(product=>{

        const name=
          normalize(
            product.model||
            product.name
          );

        return (
          name===target ||
          target.includes(name) ||
          name.includes(target)
        );

      })||null;

    },
    [item.name,source]
  );

  const content=(
    <>
      <div className="ref-store-card-image">

        <img
          src={item.image}
          alt={item.name}
        />

        {item.video&&(
          <span className="ref-store-play">
            <Play
              size={17}
              fill="currentColor"
            />
          </span>
        )}

      </div>

      <div className="ref-store-card-body">

        <span className="ref-store-assured">
          Cashify Assured
        </span>

        <h3>
          {item.name}
        </h3>

        {item.rating&&(
          <span className="ref-store-rating">
            {item.rating}
            <Star
              size={11}
              fill="currentColor"
            />
          </span>
        )}

        <div className="ref-store-price">
          ₹{item.price}
        </div>

        {item.mrp&&(
          <del>
            ₹{item.mrp}
          </del>
        )}

      </div>
    </>
  );

  return local
    ?(
      <Link
        className="ref-store-card"
        to={`/product/${local.id}`}
      >
        {content}
      </Link>
    )
    :(
      <article className="ref-store-card">
        {content}
      </article>
    );
}


function ProductSection({
  section,
  source,
  onPlay
}){

  if(!section.products?.length){
    return null;
  }

  return (
    <section className="ref-store-section">

      <div className="ref-store-section-head">

        <h2>
          {section.title}
        </h2>

        <span>
          View All
        </span>

      </div>

      <div className="ref-store-products">

        {section.products.map(item=>(

          <div
            className="ref-store-product-wrap"
            key={item.name}
            onClick={event=>{

              if(
                item.video &&
                event.target.closest(
                  '.ref-store-play'
                )
              ){
                event.preventDefault();
                event.stopPropagation();
                onPlay(item);
              }

            }}
          >
            <ReferenceCard
              item={item}
              source={source}
            />
          </div>

        ))}

      </div>

    </section>
  );
}


export default function ReferenceCategoryLanding({
  type,
  source=[]
}){

  const config=
    getCategoryLanding(type);

  const [slide,setSlide]=
    useState(0);

  const [video,setVideo]=
    useState(null);

  useEffect(()=>{
    setSlide(0);
    setVideo(null);
  },[type]);

  useEffect(()=>{

    if(
      !config ||
      config.banners.length<=1
    ){
      return;
    }

    const timer=
      window.setInterval(()=>{

        setSlide(current=>
          (
            current+1
          )%config.banners.length
        );

      },5000);

    return ()=>
      window.clearInterval(timer);

  },[config]);

  if(!config){
    return null;
  }

  const prev=()=>{
    setSlide(current=>
      (
        current-1+
        config.banners.length
      )%config.banners.length
    );
  };

  const next=()=>{
    setSlide(current=>
      (
        current+1
      )%config.banners.length
    );
  };

  return (
    <div className="ref-store-page">

      <div className="ref-store-title">
        {config.title}
      </div>


      <div className="container">

        <div className="ref-store-category-strip">

          {commonCategoryTiles.map(tile=>(

            <Link
              to={`/buy/${tile.type}`}
              className={
                `ref-store-category ${
                  config.aliases.includes(tile.type)
                    ?'active'
                    :''
                }`
              }
              key={tile.type}
            >
              <span>
                <img
                  src={tile.image}
                  alt={tile.label}
                />
              </span>

              <small>
                {tile.label}
              </small>
            </Link>

          ))}

        </div>


        {!!config.banners.length&&(
          <section className="ref-store-banner">

            <img
              src={config.banners[slide]}
              alt=""
            />

            {config.banners.length>1&&(
              <>
                <button
                  type="button"
                  className="ref-store-banner-arrow left"
                  onClick={prev}
                  aria-label="Previous banner"
                >
                  <ChevronLeft size={20}/>
                </button>

                <button
                  type="button"
                  className="ref-store-banner-arrow right"
                  onClick={next}
                  aria-label="Next banner"
                >
                  <ChevronRight size={20}/>
                </button>

                <div className="ref-store-dots">

                  {config.banners.map(
                    (_,index)=>(
                      <button
                        type="button"
                        key={index}
                        className={
                          slide===index
                            ?'active'
                            :''
                        }
                        onClick={()=>
                          setSlide(index)
                        }
                        aria-label={
                          `Banner ${index+1}`
                        }
                      />
                    )
                  )}

                </div>
              </>
            )}

          </section>
        )}


        <div className="ref-store-assured-strip">

          <strong>
            Cashify Assured
          </strong>

          <span>
            Quality Checked
          </span>

          <span>
            Warranty Support
          </span>

          <span>
            Secure Checkout
          </span>

        </div>


        {config.sections.map(section=>(

          <ProductSection
            section={section}
            source={source}
            onPlay={setVideo}
            key={section.title}
          />

        ))}

      </div>


      {video&&(
        <div
          className="ref-store-video-modal"
          onClick={()=>
            setVideo(null)
          }
        >

          <div
            className="ref-store-video-dialog"
            onClick={event=>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="ref-store-video-close"
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
                video.videoPoster||
                video.image
              }
            >
              <source
                src={video.video}
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
