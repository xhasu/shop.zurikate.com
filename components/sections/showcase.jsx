import React, { useEffect } from "react";
import { Pagination, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  useEffect(() => {
    gsap.from(".showcase-bg-right", {
      scrollTrigger: {
        trigger: ".showcase-head",
        start: "top 50%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      x: "+100%",
      opacity: 0.4,
    });

    gsap.from(".showcase-bg-left", {
      scrollTrigger: {
        trigger: ".showcase-head",
        start: "top 50%",
        toggleActions: "play none none none",
        // markers: true,
      },
      x: "-100%",
      opacity: 0.4,
    });

    gsap.from(".showcase-description", {
      scrollTrigger: {
        trigger: ".showcase-head",
        start: "top 75%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      y: "+120%",
      opacity: 0,
    });

    return () => {};
  }, []);

  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      },
    });
  };

  const creativeEffect = {
    prev: {
      translate: [0, 0, 0],
      opacity: 0,
    },
    next: {
      translate: ["100%", 0, 0],
      opacity: 1,
    },
  };

  return (
    <section className="showcase relative" id="showcase">
      <div className="relative max-w-[1920px] mx-auto">
        <div className="showcase-head relative z-10 text-center md:text-left">
          <div className="font-object">
            <div className="text-primary leading-none text-2xl md:text-5xl">SKINS FOR</div>
            <div className="leading-none text-2xl md:text-6xl">WHEELS</div>
          </div>
          <div className="md:absolute top-full mt-4 mb-8 mx-auto max-w-[280px] md:max-w-[200px] lg:max-w-xs italic text-xs md:text-sm">
            <p>Transform and protect your vehicle's wheels with premium adhesive winyl wraps</p>
          </div>
        </div>

        <div className="showcase-swiper">
          <div className="showcase-swiper-bg"></div>
          <Swiper
            modules={[Pagination, Autoplay, EffectCreative]}
            pagination={{ clickable: true }}
            effect={"creative"}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            creativeEffect={creativeEffect}>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Gloss Fire Red</span>
                <picture>
                  <img src="/images/showcase/gloss-fire-red.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Gloss Luxury Black</span>
                <picture>
                  <img src="/images/showcase/gloss-luxury-black.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Golden Beach</span>
                <picture>
                  <img src="/images/showcase/golden-beach.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Matte Brown</span>
                <picture>
                  <img src="/images/showcase/matte-brown.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Matte Gun Metal</span>
                <picture>
                  <img src="/images/showcase/matte-gun-metal.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Matte Hard Black</span>
                <picture>
                  <img src="/images/showcase/matte-hard-black.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Satin Azure</span>
                <picture>
                  <img src="/images/showcase/satin-azure.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide mb-6 md:mb-12 xl:mb-20">
              <div className="showcase-item relative">
                <span className="absolute top-full left-0 right-0 text-center text-sm leading-none">Reflective</span>
                <picture>
                  <img src="/images/showcase/display-reflective.png" alt="" width="1080" height="709" />
                </picture>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="showcase-description italic">
          <p>
            Upgrade your ride with our high-quality adhesive vinyl wheel skins, available in 8 stunning colors! Each wrap
            is precision-crafted to fit your wheels perfectly, ensuring a sleek and customized look. Enhance the style
            and durability of your wheels today!
          </p>
        </div>

        {/* <div className="intro-scroll mt-12" onClick={() => handleScroll("#brands", 250)}>
          <span>Scroll Down</span>
          <i className="icon">
            <img src="images/icons/icon-scroll-down.png" alt="Icon scroll down" />
          </i>
        </div> */}
      </div>

      <div className="showcase-bg">
        <div className="showcase-bg-right">
          <img
            src="/images/backgrounds/bg-showcase-right.png"
            alt="docarative sticker"
            loading="lazy"
            width="893"
            height="763"
          />
        </div>
        <div className="showcase-bg-left">
          <img
            src="/images/backgrounds/bg-showcase-left.png"
            alt="docarative sticker"
            loading="lazy"
            width="894"
            height="762"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
