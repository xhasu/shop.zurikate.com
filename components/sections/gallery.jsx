import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const Gallery = () => {
  return (
    <div className="gallery" id="bestsellers">
				<section className="section gallery-section">
					<h2 className="page-title"><span>Best</span> Sellers</h2>
				</section>
				<section className="section gallery-section">

					<div className="gallery-swiper">
            <Swiper navigation={{prevEl: '.swiper-arrows .arrow-prev', nextEl: '.swiper-arrows .arrow-next'}} loop={true}>
              <SwiperSlide>
                <div className="gallery-item">
                  <div className="gallery-title">Color reference: matte brown</div>
                  <div className="gallery-media">
                    <div className="gallery-item">
                      <img src="/images/gallery/matte-brown-01.jpg" alt="zurikate matte brown" loading="lazy" width="768" height="517" />
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/matte-brown-02.jpg" alt="zurikate matte brown" loading="lazy" width="768" height="517" />
                    </div>
                  </div>
                  <div className="gallery-title alter">2017_MERCEDES BENZ C-CLASS AMG C 43 - RIM 19”</div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="gallery-item">
                  <div className="gallery-title">Color reference: matte aluminum</div>
                  <div className="gallery-media">
                    <div className="gallery-item">
                      <img src="/images/gallery/matte-aluminum-01.jpg" alt="zurikate matte aluminum" loading="lazy" width="768" height="517" />
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/matte-aluminum-02.jpg" alt="zurikate matte aluminum" loading="lazy" width="768" height="517" />
                    </div>
                  </div>
                  <div className="gallery-title alter">2019_AUDI R8 V10 - RIM 20”</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-item">
                  <div className="gallery-title">Color reference: reflective zurikate black</div>
                  <div className="gallery-media">
                    <div className="gallery-item">
                      <img src="/images/gallery/zurikate-black-01.jpg" alt="zurikate black" loading="lazy" width="768" height="517" />
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/zurikate-black-02.jpg" alt="zurikate black" loading="lazy" width="768" height="517" />
                    </div>
                  </div>
                  <div className="gallery-title alter">2019_LAMBORGHINI URUS - RIM 23” </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-item">
                  <div className="gallery-title">Color reference: matte hard black</div>
                  <div className="gallery-media">
                    <div className="gallery-item">
                      <img src="/images/gallery/hard-black-01.jpg" alt="hard black" loading="lazy" width="768" height="517" />
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/hard-black-02.jpg" alt="hard black" loading="lazy" width="768" height="517" />
                    </div>
                  </div>
                  <div className="gallery-title alter">2020_BMW X3 M COMPETITION -  RIM 19”</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-item">
                  <div className="gallery-title">Color reference: gloss fire red</div>
                  <div className="gallery-media">
                    <div className="gallery-item">
                      <img src="/images/gallery/fire-red-01.jpg" alt="fire red" loading="lazy" width="768" height="517" />
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/fire-red-02.jpg" alt="fire red" loading="lazy" width="768" height="517" />
                    </div>
                  </div>
                  <div className="gallery-title alter">2020_MERCEDES BENZ AMG GLC 63 COUPE - RIM 20”</div>
                </div>
              </SwiperSlide>
            </Swiper>
					</div>
						
					<div className="swiper-arrows">
						<div className="arrow-prev">
							<img src="/images/icons/icon-arrow-left.png" alt="icon arrow prev" loading="lazy" width="58" height="58" />
						</div>
						<div className="arrow-next">
							<img src="/images/icons/icon-arrow-right.png" alt="icon arrow next" loading="lazy" width="58" height="58" />
						</div>
					</div>

				</section>
			</div>
  )
}

export default Gallery
