import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Loading from "components/ui/loading";
import BuyButton from "components/ui/buybutton";
import AddToCartButton from "components/ui/addtocartbutton";

import Select from "components/ui/select";
import Modal from "components/ui/modal";
import { SearchIcon } from "components/ui/svgs";

import { getProductVariant, mapPickerColor, mapSelectColor } from "app/helpers";

import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollToPlugin);

const parseProductId = (id) => {
  return id.match(/(\d+)/)[0];
};

const Prod = ({ data = {} }) => {
  const {
    id = "",
    options = [],
    variants = [],
    images = [],
    title = "",
    description = "",
    descriptionHtml = "",
  } = data;

  // get options colors, kits
  const { values: colors = [] } = options.find((item) => item.name == "Color");
  const { values: kits = [] } = options.find((item) => item.name == "Kit");

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

  // photo main skin
  const [imageSkin, setImageSkin] = useState("");

  // loading state
  const [loading, setLoading] = useState(true);

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const [openIntructions, setOpenIntructions] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  // swiper ref photos
  const refSwiper = useRef(null);

  // set default product
  useEffect(() => {
    const bufferedProduct = parseProductId(id).split("/");
    const productId = bufferedProduct[bufferedProduct.length - 1];
    setProduct(productId);
  }, [id]);

  // set default variant and current variant object
  useEffect(() => {
    const selectedVariant = variants && variants[0];

    const bufferedVariant = parseProductId(selectedVariant.id).split("/");
    const variantId = bufferedVariant[bufferedVariant.length - 1];
    setVariant(variantId);

    setCurrentVariant(selectedVariant);
    console.log(selectedVariant);

    // set default color and kit
    const { value: fColor = "" } = selectedVariant.selectedOptions.find((item) => item.name == "Color");

    const { value: fKit = "" } = selectedVariant.selectedOptions.find((item) => item.name == "Kit");

    setColor(fColor);
    setKit(fKit);

    // get tips of images list
    const imagesTips = images.filter((image) => ["tip"].includes(image.altText));
    setTips(imagesTips);

    const imagesPhotos = images.filter((image) => !["tip", "skin"].includes(image.altText));
    setPhotos(imagesPhotos);

    const imageSkin = images.find((image) => image.altText == "skin");
    setImageSkin(imageSkin);
  }, [product]);

  // update variant and current variant object
  // when color or kit changed
  useEffect(() => {
    if (color && kit) {
      const selectedVariant = getProductVariant(variants, color, kit);
      const bufferedVariant = parseProductId(selectedVariant.id).split("/");
      const variantId = bufferedVariant[bufferedVariant.length - 1];
      setVariant(variantId);
      setCurrentVariant(selectedVariant);
    }
  }, [color, kit]);

  const getOptionColorName = (idx) => {
    const colors = options.find((item) => item.name == "Color");
    const name = colors && colors.values[idx] && colors.values[idx].value;
    return name;
  };

  const getIndexColor = () => {
    // console.log(options);
    const colors = options.find((item) => item.name == "Color") || [];
    const idx = colors.values.findIndex((item) => item.value == color);
    return idx;
  };

  const handleClickThumb = (idx) => {
    refSwiper.current && refSwiper.current.swiper.slideTo(idx);
    const color = getOptionColorName(idx);
    setColor(color);
  };

  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      },
    });
  };

  const scrollToThumb = () => {
    const thumb = document.querySelector(".product-thumb.active");
    const thumbWidth = thumb && thumb.offsetWidth;
    const thumbLeft = thumb && thumb.offsetLeft;
    const thumbs = document.querySelector(".products-thumbs");
    const thumbsWidth = thumbs && thumbs.offsetWidth;
    const thumbsLeft = thumbs && thumbs.offsetLeft;

    const scrollLeft = thumbsLeft + thumbLeft - thumbsWidth / 2 + thumbWidth / 2;
    thumbs.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  const handleSlideChange = (swiper) => {
    const idx = swiper.activeIndex;
    const color = getOptionColorName(idx);
    setColor(color);

    // I have a product-thumb active, I need to scroll to it when I change the slide
    // the scroll is horizontal, so I need to scroll to the left the container
    setTimeout(() => {
      scrollToThumb();
    }, 200);
  };

  return (
    <div className="products px-4 md:px-0" id="products">
      <h3 className="uppercase text-center md:text-2xl mb-6">2. Select kit color: </h3>

      <div className="products-promo">
        <div className="products-swiper">
          <div className="flex gap-6 mb-4 items-end">
            <div className="rounded-[10px] overflow-auto">
            <picture>
              <img src={imageSkin.src} alt={imageSkin.altText} width={100} height={100} />
            </picture>
            </div>
            <div className="product-name">
              <div>
                <strong>{title}</strong>
              </div>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
            </div>
          </div>

          <Swiper
            ref={refSwiper}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: ".products-promo .swiper-arrows .arrow-prev",
              nextEl: ".products-promo .swiper-arrows .arrow-next",
            }}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}>
            {photos &&
              photos.map((image, index) => (
                <SwiperSlide key={index} className="product-promo">
                  <img src={image.src} alt={image.altText} />
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="swiper-arrows">
            <div className="arrow-prev">
              <img
                src="/images/icons/icon-angle-left.png"
                alt="icon arrow prev"
                loading="lazy"
                width="17"
                height="25"
              />
            </div>
            <div className="arrow-next">
              <img
                src="/images/icons/icon-angle-right.png"
                alt="icon arrow next"
                loading="lazy"
                width="17"
                height="25"
              />
            </div>
          </div>
        </div>

        <div className="px-5 hidden lg:block">
          <div className="product-details">
            <button className="btn btn-secondary mb-5" type="button" onClick={() => setOpenModal(true)}>
              <SearchIcon />
              <span>Product details</span>
            </button>
            {/* <button className="btn btn-secondary" type="button" onClick={() => setOpenIntructions(true)}>
              <span>Instructions</span>
            </button> */}
            <button className="btn btn-secondary" type="button" onClick={() => setOpenVideo(true)}>
              <span>How to install?</span>
            </button>
          </div>

          <div className="product-panel">
            <div className="product-price">
              <sup>USD</sup> <strong>${currentVariant && currentVariant.price && currentVariant.price.amount}</strong>{" "}
              <span>Free shipping</span>
            </div>
            <div className="product-control">
              <Select
                placeholder={color}
                options={colors}
                keyValue="value"
                keyShow="value"
                handleClick={(value) => setColor(value)}
              />
            </div>
            <div className="product-control">
              <Select
                placeholder={kit}
                options={kits}
                keyValue="value"
                keyShow="value"
                handleClick={(value) => setKit(value)}
              />
            </div>
            <div className="product-actions">
              <div className="product-control">
                {product && variant && <AddToCartButton product={product} variant={variant} />}
              </div>
              <div className="product-control">
                {product && variant && <BuyButton product={product} variant={variant} />}
              </div>
              <div className="product-control pt-5">
                <button className="btn text-black bg-white" type="button" onClick={() => handleScroll("#brands")}>
                  <span>More vehicles</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-nav">
        <div className="products-thumbs">
          {photos &&
            photos.map((image, index) => (
              <div
                key={index}
                className={`product-thumb ${getIndexColor() == index ? "active" : ""} `}
                onClick={() => handleClickThumb(index)}>
                <img className="thumb-img" key={index} src={image.src} alt={image.altText} />
                <div className="product-tooltip">
                  <img
                    src="/images/icons/icon-angle-up.png"
                    alt="icon arrow prev"
                    loading="lazy"
                    width="15"
                    height="10"
                  />
                  <span>
                    {getOptionColorName(index) == "Reflective Zurikate"
                      ? "Gloss Black Reflective"
                      : getOptionColorName(index)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="product-details">
          <button className="btn btn-secondary mb-5" type="button" onClick={() => setOpenModal(true)}>
            <SearchIcon />
            <span>Product details</span>
          </button>
          {/* <button className="btn btn-secondary" type="button" onClick={() => setOpenIntructions(true)}>
            <span>Instructions</span>
          </button> */}
          <button className="btn btn-secondary" type="button" onClick={() => setOpenVideo(true)}>
            <span>How to install?</span>
          </button>
        </div>

        <div className="product-panel">
          <div className="product-price">
            <sup>USD</sup> <strong>${currentVariant && currentVariant.price && currentVariant.price.amount}</strong>{" "}
            <span>Free shipping</span>
          </div>
          <div className="product-control">
            <Select
              placeholder={color}
              options={colors}
              keyValue="value"
              keyShow="value"
              handleClick={(value) => setColor(value)}
            />
          </div>
          <div className="product-control">
            <Select
              placeholder={kit}
              options={kits}
              keyValue="value"
              keyShow="value"
              handleClick={(value) => setKit(value)}
            />
          </div>
          <div className="product-actions">
            <div className="product-control">
              {product && variant && <AddToCartButton product={product} variant={variant} />}
            </div>
            <div className="product-control">
              {product && variant && <BuyButton product={product} variant={variant} />}
            </div>
            <div className="product-control pt-5">
              <button className="btn text-black bg-white" type="button" onClick={() => handleScroll("#brands")}>
                <span>More vehicles</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal isOpen={openModal} handleOpen={setOpenModal}>
          <div className="products-swiper products-tips">
            <Swiper
              navigation={{
                prevEl: ".products-tips .swiper-arrows .arrow-prev",
                nextEl: ".products-tips .swiper-arrows .arrow-next",
              }}
              pagination={{ clickable: true }}>
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
                <video
                  preload="metadata"
                  playsInline="playsinline"
                  poster="/media/product-details-poster.jpg"
                  controls={true}
                  width={645}
                  height={645}>
                  <source src="/media/product-details.mp4" type="video/mp4" />
                  <img src="/media/product-details-poster.jpg" alt="Zurikate video poster" width="645" height="645" />
                </video>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-arrows">
              <div className="arrow-prev">
                <img
                  src="/images/icons/icon-angle-left.png"
                  alt="icon arrow prev"
                  loading="lazy"
                  width="17"
                  height="25"
                />
              </div>
              <div className="arrow-next">
                <img
                  src="/images/icons/icon-angle-right.png"
                  alt="icon arrow next"
                  loading="lazy"
                  width="17"
                  height="25"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}

      {openIntructions && (
        <Modal isOpen={openIntructions} handleOpen={setOpenIntructions}>
          <div>
            <div className="flex-1 max-h-screen max-w-5xl">
              <img src="/images/infographic.jpg" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </Modal>
      )}

      {openVideo && (
        <Modal isOpen={openVideo} handleOpen={setOpenVideo}>
          <div className="flex-1 max-h-screen max-w-5xl">
            <div className="aspect-video w-[320px] sm:w-[480px] md:w-[720px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4W1md-hCmdw?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Prod;
