import React, { useState, useEffect, useRef } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Loading from "components/ui/loading";
import BuyButton from 'components/ui/buybutton'
import AddToCartButton from 'components/ui/addtocartbutton'

import Select from 'components/ui/select'
import Modal from 'components/ui/modal'
import { SearchIcon } from 'components/ui/svgs'

import { getProductVariant, mapPickerColor, mapSelectColor } from 'app/helpers'

import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollToPlugin);

const Prod = ({ data = {}}) => {

  const {
    id = "",
    options = [],
    variants = [],
    images = [],
    title = "",
    description = "",
    descriptionHtml = ""
  } = data;

  // get options colors, kits
  const { values: colors = [] } = options.find(item => item.name == 'Color');
  const { values: kits = [] } = options.find(item => item.name == 'Kit');

  // selected values of options
  const [color, setColor] = useState();
  const [kit, setKit] = useState();

  // selected ids of product and variant
  const [product, setProduct] = useState();
  const [variant, setVariant] = useState();

  // current variant object
  const [currentVariant, setCurrentVariant] = useState({});

  // tips of product
  const [tips, setTips] = useState([]);

  // photos of product
  const [photos, setPhotos] = useState("");

  // loading state
  const [loading, setLoading] = useState(true);

  // modal state
  const [openModal, setOpenModal] = useState(false);

  // swiper ref photos
  const refSwiper = useRef(null);

  // set default product
  useEffect(() => {

    const bufferedProduct = atob(id).split('/');
    const productId = bufferedProduct[bufferedProduct.length - 1];
    setProduct(productId);
    
  }, [id]);

  // set default variant and current variant object
  useEffect(() => {
    const selectedVariant = variants && variants[0];

    const bufferedVariant = atob(selectedVariant.id).split('/');
    const variantId = bufferedVariant[bufferedVariant.length - 1];
    setVariant(variantId);

    setCurrentVariant(selectedVariant);

    // set default color and kit
    const {
      value: fColor = ""
    } = selectedVariant.selectedOptions.find(item => item.name == 'Color');

    const {
      value: fKit = ""
    } = selectedVariant.selectedOptions.find(item => item.name == 'Kit');

    setColor(fColor);
    setKit(fKit);

    // get tips of images list
    const imagesTips = images.filter(image => ['tip'].includes(image.altText));
    setTips(imagesTips);

    const imagesPhotos = images.filter(image => !["tip", "skin"].includes(image.altText));
    setPhotos(imagesPhotos);

  }, [product]);

  // update variant and current variant object
  // when color or kit changed
  useEffect(() => {
    if( color && kit ) {
      const selectedVariant = getProductVariant(variants, color, kit);
      const bufferedVariant = atob(selectedVariant.id).split('/');
      const variantId = bufferedVariant[bufferedVariant.length - 1];
      setVariant(variantId);
      setCurrentVariant(selectedVariant);
    }
  }, [color, kit]);

  const getOptionColorName = (idx) => {
    const colors = options.find(item => item.name == 'Color')
    const name = colors && colors.values[idx] && colors.values[idx].value;
    return name;
  }

  const getIndexColor = () => {
    console.log(options);
    const colors = options.find(item => item.name == 'Color') || [];
    const idx = colors.values.findIndex(item => item.value == color);
    return idx;
  }

  const handleClickThumb = (idx) => {
    refSwiper.current && refSwiper.current.swiper.slideTo(idx);
    const color = getOptionColorName(idx);
    setColor(color);
  }

  return (
    <div className="products" id="products">
      
      <div className="product-name">
        <strong>{title}</strong> <br />
        {description}
      </div>

      {/* promo gallery */}
      <div className="products-swiper products-promo">
        <Swiper ref={refSwiper} spaceBetween={10} slidesPerView={1} navigation={{ prevEl: '.products-promo .swiper-arrows .arrow-prev', nextEl: '.products-promo .swiper-arrows .arrow-next' }} pagination={{ clickable: true }}>
          {photos && photos.map((image, index) => (
            <SwiperSlide key={index} className="product-promo">
              <img src={image.src} alt={image.altText} />
            </SwiperSlide>
          ))}
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
      
      <div className="products-nav">
        <div className="products-thumbs">
          {photos && photos.map((image, index) => (
            <div key={index} className={`product-thumb ${getIndexColor() == index ? "active" : ""} `} onClick={() => handleClickThumb(index)}>
              <img className="thumb-img" key={index} src={image.src} alt={image.altText} />
              <div className="product-tooltip">
                <img src="/images/icons/icon-angle-up.png" alt="icon arrow prev" loading="lazy" width="15" height="10" />
                <span>{getOptionColorName(index)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="product-details">
        <button className="btn btn-secondary" type="button" onClick={() => setOpenModal(true)}>
          <SearchIcon />
          <span>Product details</span>
        </button>
      </div>

      <div className="product-panel">
        <div className="product-price">
          <sup>USD</sup> <strong>${currentVariant && currentVariant.price}</strong> <span>Free shipping</span>
        </div>
        <div className="product-control">
          <Select placeholder={color} options={colors} keyValue="value" keyShow="value" handleClick={(value) => setColor(value)} />
        </div>
        <div className="product-control">
          <Select placeholder={kit} options={kits} keyValue="value" keyShow="value" handleClick={(value) => setKit(value)} />
        </div>
        <div className="product-actions">
          <div className="product-control">
            {(product && variant) && <AddToCartButton product={product} variant={variant} />}
          </div>
          <div className="product-control">
            {(product && variant) && <BuyButton product={product} variant={variant} />}
          </div>
        </div>
      </div>

      {openModal && (
        <Modal isOpen={openModal} handleOpen={setOpenModal}>
          <div className="products-swiper products-tips">
            <Swiper navigation={{ prevEl: '.products-tips .swiper-arrows .arrow-prev', nextEl: '.products-tips .swiper-arrows .arrow-next' }} pagination={{ clickable: true }}>
              <SwiperSlide className="product-tip">
                <img src="/images/tips/tip-01.png" alt="tip" />
              </SwiperSlide>
              <SwiperSlide className="product-tip">
                <img src="/images/tips/tip-02.png" alt="tip" />
              </SwiperSlide>
              <SwiperSlide className="product-tip">
                <img src="/images/tips/tip-03.png" alt="tip" />
              </SwiperSlide>
              <SwiperSlide className="product-tip">
                <img src="/images/tips/tip-04.png" alt="tip" />
              </SwiperSlide>
              <SwiperSlide className="product-tip">
                <video preload="metadata" playsInline="playsinline" poster="/media/product-details-poster.jpg" controls={true} width={645} height={645}>
                  <source src="/media/product-details.mp4" type="video/mp4" />
                  <img src="/media/product-details-poster.jpg" alt="Zurikate video poster" width="645" height="645" />
                </video>
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
        </Modal>
      )}

    </div>
  )
}

export default Prod