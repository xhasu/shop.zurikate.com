import React from 'react'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-container" id="showcase">

        <section className="section showcase-section">

          <div className="showcase-box">

            <div className="showcase-head">
              <h2 className="page-title"><span>Vinyl that</span> <br /> looks like<br /> paint</h2>
            </div>

            <div className="showcase-swiper">
              <Swiper className="showcase-container" pagination={{clickable: true}} loop={true}>
                <SwiperSlide className="swiper-slide">
                  <div className="showcase-item">
                    <picture>
                      <source media="(max-width: 768px)" srcSet="/images/showcase/gloss_golden_beach-md.png" />
                      <img src="/images/showcase/gloss_golden_beach.png" alt="Lamborghini Urus gloss golden beach" width="1920" height="998" loading="lazy" />
                    </picture>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="showcase-item">
                    <picture>
                      <source media="(max-width: 768px)" srcSet="/images/showcase/matte_hard_black-md.png" />
                      <img src="/images/showcase/matte_hard_black.png" alt="Lamborghini Urus matte hard black" width="1920" height="998" loading="lazy" />
                    </picture>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="showcase-item">
                    <picture>
                      <source media="(max-width: 768px)" srcSet="/images/showcase/satin_azure-md.png" />
                      <img src="/images/showcase/satin_azure.png" alt="Lamborghini Urus satin azure" width="1920" height="998" loading="lazy" />
                    </picture>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="showcase-item">
                    <picture>
                      <source media="(max-width: 768px)" srcSet="/images/showcase/reflective_zurikate_white-md.png" />
                      <img src="/images/showcase/reflective_zurikate_white.png" alt="Lamborghini Urus reflective zurikate white" width="1920" height="998" loading="lazy" />
                    </picture>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="showcase-item">
                    <picture>
                      <source media="(max-width: 768px)" srcSet="/images/showcase/gloss_fire_red-md.png" />
                      <img src="/images/showcase/gloss_fire_red.png" alt="Lamborghini Urus gloss fire red" width="1920" height="998" loading="lazy" />
                    </picture>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>

            <div className="showcase-description">
              <p>
                From our minds to reality, we work in order to provide you with the best product. That’s why we design, produce, and install our kits if you need it.
                </p>
            </div>

          </div>

        </section>

        <div className="showcase-bg-right">
          <img src="/images/backgrounds/bg-showcase-right.png" alt="docarative sticker" loading="lazy" width="634" height="621" />
        </div>
        <div className="showcase-bg-left">
          <img src="/images/backgrounds/bg-showcase-left.png" alt="docarative sticker" loading="lazy" width="618" height="566" />
        </div>

      </div>
    </div>
  )
}

export default Showcase
