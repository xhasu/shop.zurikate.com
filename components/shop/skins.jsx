import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Navigation]);

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
  return (
    <div className="skins">
      <div className="skins-container">
        <section className="section skins-section">

          <div className="skins-swiper">
            <Swiper slidesPerView="auto" spaceBetween={80} loop={true}>
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

        </section>
      </div>
    </div>
  )
}

export default Skins