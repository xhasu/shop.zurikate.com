import React, { useState, useEffect, useLayoutEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BuyButton from 'components/ui/buybutton'
import { getProductVariant } from 'app/helpers'

SwiperCore.use([Navigation, Pagination]);

const Products = ({ data = {} }) => {

  const { options = [] } = data;
  const { variants = [] } = data;

  const { values: colors = [] } = options.find(item => item.name == 'Color');
  const { values: installs = [] } = options.find(item => item.name == 'Install');
  const { values: kits = [] } = options.find(item => item.name == 'Kit');

  const [defaultVariant, setDefaultVariant] = useState({});

  const [color, setColor] = useState();
  const [install, setInstall] = useState();
  const [kit, setKit] = useState();

  const [product, setProduct] = useState();
  const [variant, setVariant] = useState();

  const setProductVariant = () => {
    const arrProduct = atob(data.id).split('/');
    const productId = arrProduct[arrProduct.length - 1];
    setProduct(productId);
    
    const selectedVariant = getProductVariant(variants, color, install, kit);
    const arrVariant = atob(selectedVariant.id).split('/');
    const variantId = arrVariant[arrVariant.length - 1];
    setVariant(variantId);

    setDefaultVariant(selectedVariant);
    console.log(selectedVariant);
    console.log(defaultVariant);
  }

  useEffect(() => {
    if( colors, installs, kits ) {

      setDefaultVariant(variants[0]);

      const {
        value: fColor = ""
      } = variants[0].selectedOptions.find(item => item.name == 'Color');
  
      const {
        value: fInstall = ""
      } = variants[0].selectedOptions.find(item => item.name == 'Install');
  
      const {
        value: fKit = ""
      } = variants[0].selectedOptions.find(item => item.name == 'Kit');

      setColor(fColor);
      setInstall(fInstall);
      setKit(fKit);
    }
    return () => {}
  }, [colors, installs, kits])

  useEffect(() => {
    if( color, install, kit ) {
      setProductVariant();
    }
    return () => {}
  }, [color, install, kit])

  return (
    <div className="products">

      <div className="products-container">
        <section className="section products-section">

          <div className="products-content">

            <div className="products-swiper">

              <Swiper navigation={{ prevEl: '.products .swiper-arrows .arrow-prev', nextEl: '.products .swiper-arrows .arrow-next' }} pagination={{ clickable: true }}>
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
                <select name="color" value={color} onChange={(event) => setColor(event.target.value)}>
                  {colors.map((color, index) => <option key={index} value={color.value}>{color.value}</option> )}
                </select>
              </div>
              <div className="product-price">
                <sup>USD</sup> <strong>${defaultVariant && defaultVariant.price}</strong> <span>Free shipping</span>
              </div>
              <div className="product-info">
                <select name="kit" value={kit} onChange={(event) => setKit(event.target.value)}>
                  {kits.map((kit, index) => <option key={index} value={kit.value}>{kit.value}</option> )}
                </select>
                <select name="installation" value={install} onChange={(event) => setInstall(event.target.value)}>
                  {installs.map((install, index) => <option key={index} value={install.value}>{install.value}</option> )}
                </select>
                {/* 
                <select name="qty">
                  <option value="1">QUANTITY: 1</option>
                  <option value="2">QUANTITY: 2</option>
                  <option value="3">QUANTITY: 3</option>
                  <option value="3">QUANTITY: 4</option>
                </select>
                */}
              </div>
              <div className="product-actions">
                {/* <button className="btn btn-primary">Add to cart</button> */}
                {(product && variant) && <BuyButton product={product} variant={variant} />}
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
