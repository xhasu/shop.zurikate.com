import React, { useState, useEffect, useLayoutEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BuyButton from 'components/ui/buybutton'
import AddToCartButton from 'components/ui/addtocartbutton'
import { UITopBar, UIBottomBar } from 'components/ui/bars'
import Select from 'components/ui/select'
import Modal from 'components/ui/modal'
import { SearchIcon } from 'components/ui/svgs'
import { getProductVariant, mapPickerColor } from 'app/helpers'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollToPlugin);

const Products = ({ data = {} }) => {

  const { options = [], variants = [], images = [], title = "" } = data;

  const { values: colors = [] } = options.find(item => item.name == 'Color');
  const { values: kits = [] } = options.find(item => item.name == 'Kit');

  const [defaultVariant, setDefaultVariant] = useState();

  const [color, setColor] = useState();
  const [kit, setKit] = useState();

  const [tips, setTips] = useState([]);
  const [media, setMedia] = useState("");
  const [product, setProduct] = useState();
  const [variant, setVariant] = useState();

  const [openModal, setOpenModal] = useState(false);

  const [carColor, setCarColor] = useState('black');
  const [wheelColor, setWheelColor] = useState('gloss-luxury-black');

  const setProductVariant = () => {
    const arrProduct = atob(data.id).split('/');
    const productId = arrProduct[arrProduct.length - 1];
    setProduct(productId);

    const selectedVariant = getProductVariant(variants, color, kit);
    // console.log(selectedVariant);
    const arrVariant = atob(selectedVariant.id).split('/');
    const variantId = arrVariant[arrVariant.length - 1];
    setVariant(variantId);

    setDefaultVariant(selectedVariant);

    const imagesTips = images.filter(image => ['tip'].includes(image.altText));
    setTips(imagesTips);
  }

  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      }
    });
  }

  const handleSelectColor = (value) => {
    console.log(value);
    setColor(value);
  }

  const handlePickerColor = (wheelcolor) => {
    setWheelColor(wheelcolor);
    console.log(mapPickerColor[wheelcolor]);
    setColor(mapPickerColor[wheelcolor])
  }

  useEffect(() => {
    handleScroll("#products", 0);
    return () => { }
  }, [data])

  useEffect(() => {
    if (colors, kits) {

      const {
        value: fColor = ""
      } = variants[0].selectedOptions.find(item => item.name == 'Color');

      const {
        value: fKit = ""
      } = variants[0].selectedOptions.find(item => item.name == 'Kit');

      setColor(fColor);
      setKit(fKit);

      setDefaultVariant(variants[0]);
    }
    return () => { }
  }, [colors, kits])

  useEffect(() => {
    if (color, kit) {
      setProductVariant();
    }
    return () => { }
  }, [color, kit])

  useEffect(() => {
    if (data && data.variants && data.variants.length != 0 && color && kit) {
      setProductVariant();
    }
    return () => { }
  }, [data])

  useEffect(() => {

    document.body.style.overflow = openModal ? 'hidden' : '';

    return () => { }
  }, [openModal])

  useEffect(() => {
    if (images.length != 0) {
      const imageFiltered = images.filter(image => image.altText);
      const result = imageFiltered.filter(image => {
        const [c, w] = image.altText.split(':');
        return c == carColor && w == wheelColor;
      });
      result.length != 0 && setMedia(result[0].src);
    }
    return () => { }
  }, [data, carColor, wheelColor]);

  return (
    <div className="products" id="products">

      <div className="products-container">

        <div className="products-view">

          <div className="product-media">
            <img src={media} alt="" />
          </div>

          <div className="product-ui products-section">
            <UITopBar handlePickColor={(color) => setCarColor(color)} />
            <UIBottomBar handlePickColor={(wheelcolor) => handlePickerColor(wheelcolor)} />
            <div className="product-info">
              <button className="btn btn-secondary" type="button" onClick={() => setOpenModal(true)}>
                <SearchIcon />
                <span>Product details</span>
              </button>
              <div className="product-name">CADILLAC ESCALADE SPORT PLATINUM 2021 / FRONT  WHEEL 22” / REAR WHEEL 22”</div>
            </div>
          </div>

        </div>

        <div className="product-panel">
          <div className="product-price">
            <sup>USD</sup> <strong>${defaultVariant && defaultVariant.price}</strong> <span>Free shipping</span>
          </div>
          <div className="product-control">
            <Select placeholder={color} options={colors} keyValue="value" keyShow="value" handleClick={(value) => handleSelectColor(value)} />
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

      </div>

      {openModal && (
        <Modal isOpen={openModal} handleOpen={setOpenModal}>
          <div className="products-swiper">
            <Swiper navigation={{ prevEl: '.products .swiper-arrows .arrow-prev', nextEl: '.products .swiper-arrows .arrow-next' }} pagination={{ clickable: true }}>
              {tips.filter(item => item.altText == 'tip').map((image, index) =>
                <SwiperSlide className="product-tip" key={index}>
                  <img src={image.src} alt={image.altText} />
                </SwiperSlide>
              )}
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

export default Products
