import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const Skin = () => {
  return (
    <div className="skin">
      <div className="skin-media">
        <img src="/images/skin-01.jpg" alt="" />
      </div>
      <div className="skin-description">
        <p>2019 BMW X7 xDRIVE 40 FRONT RIM 21" - REAR RIM 21"</p>
      </div>
    </div>
  )
}

const Skins = () => {

  const breakpoints = {
    1280: {
      spaceBetween: 80
    },
    640: {
      spaceBetween: 30
    }
  };

  return (
    <div className="skins">
      <div className="skins-container">
        <section className="section skins-section">

          <div className="skins-swiper">
            <Swiper navigation={{prevEl: '.skins .swiper-arrows .arrow-prev', nextEl: '.skins .swiper-arrows .arrow-next'}} slidesPerView="auto" spaceBetween={10} breakpoints={breakpoints} loop={true}>
              <SwiperSlide>
                <Skin />
              </SwiperSlide>
              <SwiperSlide>
                <Skin />
              </SwiperSlide>
              <SwiperSlide>
                <Skin />
              </SwiperSlide>
              <SwiperSlide>
                <Skin />
              </SwiperSlide>
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