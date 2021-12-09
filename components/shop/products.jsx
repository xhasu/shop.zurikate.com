import React, { useState, useEffect, useLayoutEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BuyButton from 'components/ui/buybutton'
import AddToCartButton from 'components/ui/addtocartbutton'
import { UITopBar, UIBottomBar } from 'components/ui/bars'
import Select from 'components/ui/select'
import Modal from 'components/ui/modal'
import { SearchIcon } from 'components/ui/svgs'
import { getProductVariant, mapPickerColor, mapSelectColor } from 'app/helpers'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollToPlugin);

const Products = ({ data = {} }) => {

  const { options = [], variants = [], images = [], title = "", description = "" } = data;

  const { values: colors = [] } = options.find(item => item.name == 'Color');
  const { values: kits = [] } = options.find(item => item.name == 'Kit');

  const [currentVariant, setCurrentVariant] = useState();

  const [color, setColor] = useState();
  const [kit, setKit] = useState();

  const [tips, setTips] = useState([]);
  const [media, setMedia] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [product, setProduct] = useState();
  const [variant, setVariant] = useState();

  const [openModal, setOpenModal] = useState(false);

  const [carColor, setCarColor] = useState('black');
  const [wheelColor, setWheelColor] = useState('gloss-luxury-black');

  const setProductVariant = () => {
    const arrProduct = atob(data.id).split('/');
    const productId = arrProduct[arrProduct.length - 1];
    setProduct(productId);

    // console.log('variants', variants);
    const selectedVariant = getProductVariant(variants, color, kit);
    // console.log(selectedVariant);
    const arrVariant = atob(selectedVariant.id).split('/');
    const variantId = arrVariant[arrVariant.length - 1];
    setVariant(variantId);

    setCurrentVariant(selectedVariant);

    const imagesTips = images.filter(image => ['tip'].includes(image.altText));
    setTips(imagesTips);
  }

  // handle scroll animation
  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      }
    });
  }

  const handleSelectColor = (value) => {
    setWheelColor(mapSelectColor[value]);
    setColor(value);
  }

  const handlePickerColor = (wheelcolor) => {
    setWheelColor(wheelcolor);
    if (wheelcolor !== 'original') {
      setColor(mapPickerColor[wheelcolor]);
    }
  }

  // handle scroll to product top
  useEffect(() => {
    handleScroll("#products", 90);
    return () => { }
  }, [data])

  // find and set default variant
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

      setCurrentVariant(variants[0]);
    }
    return () => { }
  }, [colors, kits])

  // if color or kit change, update product variant
  useEffect(() => {
    if (color, kit) {
      setProductVariant();
    }
    return () => { }
  }, [color, kit])

  // update when data [skins] change
  useEffect(() => {
    if (data && data.variants && data.variants.length != 0 && color && kit) {
      setProductVariant();
    }
    return () => { }
  }, [data])

  // open detail modal
  useEffect(() => {

    document.body.style.overflow = openModal ? 'hidden' : '';

    return () => { }
  }, [openModal])

  // find image by car color and wheel color
  useEffect(() => {
    if (images.length != 0) {
      const imageFiltered = images.filter(image => image.altText);
      const result = imageFiltered.find(image => {
        const [c, w] = image.altText.split(':');
        // console.count(`${carColor}:${wheelColor}`)
        return c == carColor && w == wheelColor;
      });
      result && setMedia(result.src);
    }
    return () => { }
  }, [data, carColor, wheelColor, color]);

  // find default color skin // set car color
  useEffect(() => {
    if (images.length != 0) {
      const skinImage = images.find(item => {
        return item.altText ? item.altText.toLowerCase().includes("skin") : {};
      });
      const skinColorArr = skinImage ? skinImage.altText.split(':') : [];
      const skinDefaultColor = skinColorArr.length > 1 ? skinImage.altText.split(':')[1] : 'black';
      setSkinColor(skinDefaultColor);
      setCarColor(skinDefaultColor);
    }

    return () => { }
  }, [data])

  // set default image - original
  useEffect(() => {
    handlePickerColor('original')
    return () => { }
  }, [])

  // preload images
  useEffect(() => {
    const filteredImages = images.filter(image => image.altText.includes(`${carColor}:`) );
    const imagesPreload = filteredImages.map(image => {
      const img = new Image();
      img.src = image.src;
      return img;
    });
    return () => { }
  }, [images, carColor])

  return (
    <div className="products" id="products">

      <div className="products-container">

        <div className="products-view">

          <div className="product-media">
            <img src={media} alt="" />
          </div>

          <div className="product-ui products-section">
            <UITopBar handlePickColor={(color) => setCarColor(color)} skinColor={skinColor} />
            <UIBottomBar handlePickColor={(wheelcolor) => handlePickerColor(wheelcolor)} updateSelected={wheelColor} />
            <div className="product-info">
              <button className="btn btn-secondary" type="button" onClick={() => setOpenModal(true)}>
                <SearchIcon />
                <span>Product details</span>
              </button>
              <div className="product-name">
                <strong>{title}</strong> <br />
                {description}
              </div>
            </div>
          </div>

        </div>

        <div className="product-panel">
          <div className="product-price">
            <sup>USD</sup> <strong>${currentVariant && currentVariant.price}</strong> <span>Free shipping</span>
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
