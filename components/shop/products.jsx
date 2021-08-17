import React, { useState, useEffect, useLayoutEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BuyButton from 'components/ui/buybutton'
import AddToCartButton from 'components/ui/addtocartbutton'
import { UITopBar, UIBottomBar } from 'components/ui/bars'
import Select from 'components/ui/select'
import Modal from 'components/ui/modal'
import { SearchIcon } from 'components/ui/svgs'
import { getProductVariant } from 'app/helpers'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollToPlugin);

const Products = ({ data = {} }) => {
  
  const { options = [], variants = [], images = [], title = "" } = data;
  console.log(options);

  const { values: colors = [] } = options.find(item => item.name == 'Color');
  const { values: installs = [] } = options.find(item => item.name == 'Install');
  const { values: kits = [] } = options.find(item => item.name == 'Kit');

  const [defaultVariant, setDefaultVariant] = useState({});

  const [color, setColor] = useState();
  const [install, setInstall] = useState();
  const [kit, setKit] = useState();

  const [media, setMedia] = useState([]);
  const [product, setProduct] = useState();
  const [variant, setVariant] = useState();

  const [openModal, setOpenModal] = useState(false);

  const setProductVariant = () => {
    const arrProduct = atob(data.id).split('/');
    const productId = arrProduct[arrProduct.length - 1];
    setProduct(productId);
    
    const selectedVariant = getProductVariant(variants, color, install, kit);
    const arrVariant = atob(selectedVariant.id).split('/');
    const variantId = arrVariant[arrVariant.length - 1];
    setVariant(variantId);

    setDefaultVariant(selectedVariant);

    const filteredImages = images.filter(image => !['skin', 'color'].includes(image.altText));
    filteredImages.unshift(selectedVariant.image);
    setMedia(filteredImages);
  }

  const handleScroll = (elementId, offsetY = 100) => {
		gsap.to(window, {
			scrollTo: {
				y: elementId,
				offsetY: offsetY,
			}
		});
	}

  useEffect(() => {
    handleScroll("#products");
    return () => {}
  }, [data])

  useEffect(() => {
    if( colors, installs, kits ) {

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

      setDefaultVariant(variants[0]);
    }
    return () => {}
  }, [colors, installs, kits])

  useEffect(() => {
    if( color, install, kit ) {
      setProductVariant();
    }
    return () => {}
  }, [color, install, kit])

  useEffect(() => {
    if( data && data.variants && data.variants.length != 0 && color && install && kit ) {
      setProductVariant();
    }
    return () => { }
  }, [data])

  useEffect(() => {

    document.body.style.overflow =  openModal ? 'hidden': '';
    
    return () => { }
  }, [openModal])

  return (
    <div className="products" id="products">

      <div className="products-container">

        <div className="products-view">

          <div className="product-media">
            <img src="images/product-01.png" alt="" />
          </div>

          <div className="product-ui products-section">
            <UITopBar />
            <UIBottomBar />
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
            <Select placeholder={color} options={colors} keyValue="value" keyShow="value" handleClick={(value) => setColor(value)} />
          </div>
          <div className="product-control">
            <Select placeholder={kit} options={kits} keyValue="value" keyShow="value" handleClick={(value) => setKit(value)} />
          </div>
          <div className="product-control">
            <Select placeholder={install} options={installs} keyValue="value" keyShow="value" handleClick={(value) => setInstall(value)} />
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
              {media.filter(item => item.altText == 'tip').map((image, index) => 
                <SwiperSlide className="product-tip" key={index}>
                  <img src={image.src} alt={image.altText} />
                </SwiperSlide>
              )}
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
