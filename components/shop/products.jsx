import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const Products = () => {
  return (
    <div className="products">
      <div className="products-container">
        <section className="section products-section">

          <div className="products-content">
            <div className="products-swiper">

              <Swiper pagination={{clickable: true}}>
                <SwiperSlide>
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
              </Swiper>

            </div>
            <div className="products-panel">
              <div className="product-color"></div>
              <div className="product-price"></div>
              <div className="product-info">
                {/* kit */}
                {/* installation */}
                {/* stock */}
              </div>
              <div className="product-actions">
                <button>Add to cart</button>
                <button>Buy now</button>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Products
