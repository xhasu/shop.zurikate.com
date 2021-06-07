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

              <Swiper navigation={{prevEl: '.products .swiper-arrows .arrow-prev', nextEl: '.products .swiper-arrows .arrow-next'}} pagination={{clickable: true}}>
                <SwiperSlide className="product-media">
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="product-media">
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="product-media">
                  <img src="/images/product-01.jpg" alt="" />
                </SwiperSlide>
              </Swiper>

              <div className="swiper-arrows">
                <div className="arrow-prev">
                  <img src="/images/icons/icon-angle-left.png" alt="icon arrow prev" loading="lazy" width="17" height="25" />
                </div>
                <div className="arrow-next">
                  <img src="/images/icons/icon-angle-right.png" alt="icon arrow next" loading="lazy" width="17" height="25" />
                </div>
              </div>

            </div>

            <div className="products-panel">
              <div className="product-color">
                <label>Color:</label>
                <select name="color">
                  <option value="gloss luxury black">GLOSS LUXURY BLACK</option>
                </select>
              </div>
              <div className="product-price">
                <sup>USD</sup> <strong>$250</strong> <span>Free shipping</span>
              </div>
              <div className="product-info">
                <select name="kit">
                  <option value="1">FULL KIT (5 tires)</option>
                  <option value="2">ONE TIRE (replacement)</option>
                </select>
                <select name="installation">
                  <option value="1">KIT WITH INSTALLATION</option>
                  <option value="2">KIT ONLY</option>
                </select>
                <select name="qty">
                  <option value="1">QUANTITY: 1</option>
                  <option value="2">QUANTITY: 2</option>
                  <option value="3">QUANTITY: 3</option>
                  <option value="3">QUANTITY: 4</option>
                </select>
              </div>
              <div className="product-actions">
                <button className="btn btn-primary">Add to cart</button>
                <button className="btn btn-primary">Buy now</button>
              </div>
            </div>

          </div>

        </section>
      </div>

      <div className="products-sticker">
        <img src="/images/backgrounds/bg-right.png" alt="Sticker zurikate" width="636" height="582" />
      </div>
    </div>
  )
}

export default Products
