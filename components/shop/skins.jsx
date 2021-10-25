import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const Skin = ({ data = {} }) => {

  const {
    title = "",
    description = "",
    images = []
  } = data;

  const skinImage = images.find(item => {
     return item.altText ? item.altText.toLowerCase().includes("skin") : {};
  });

  return (
    <div className="skin">
      <div className="skin-media">
        <img src={skinImage.src} alt={skinImage.altText} />
      </div>
      <div className="skin-title">
        <strong>{title}</strong>
      </div>
      <div className="skin-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

const Skins = ({ data = [], brand = "", setSkin }) => {

  const breakpoints = {
    1280: {
      spaceBetween: 80
    },
    640: {
      spaceBetween: 30
    }
  };

  const skins = data.find(d => d.title == brand);

  return (
    <div className="skins" id="skins">
      <div className="skins-container">
        <section className="section skins-section">

          <div className="skins-swiper">
            <Swiper navigation={{ prevEl: '.skins .swiper-arrows .arrow-prev', nextEl: '.skins .swiper-arrows .arrow-next' }} slidesPerView="2" spaceBetween={10} breakpoints={breakpoints} centeredSlides={skins.length <= 1}>
              {skins.products.map((skin, index) => {
                return (
                  <SwiperSlide key={index} onClick={() => setSkin(skin)}>
                    <Skin data={skin} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="swiper-arrows">
            <div className="arrow-prev">
              <img src="/images/icons/icon-angle-left.png" alt="icon arrow prev" loading="lazy" width="17" height="25" />
            </div>
            <div className="arrow-next">
              <img src="/images/icons/icon-angle-right.png" alt="icon arrow next" loading="lazy" width="17" height="25" />
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Skins