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

  const creativeEffect = {
    prev: {
      translate: [0, 0, 0],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  };

  return (
    <section className="showcase relative" id="showcase">
      <div className="relative max-w-[1920px] mx-auto">
        <div className="showcase-head">
          <div className="font-object pt-8">
            <div className="text-primary leading-none text-2xl md:text-5xl">SKINS FOR</div>
            <div className="leading-none text-2xl md:text-5xl">WHEELS</div>
            <div className="text-sm font-century my-2">
              <div className=" leading-none">The best way to</div>
              <div className="text-primary leading-none">customize and protect your wheels.</div>
            </div>
            <h2 className="page-title">
              <span>VINYL THAT</span> <br />
              Looks like <br /> Paint
            </h2>
          </div>
        </div>

        <div className="showcase-description">
          <p>
            The best way to change the color of your wheels in less time and with a high quality product. We use 3M
            vinyl to produce precise measured decals to fit your rims. If you can't find your vehicle, no problem, we
            can make it!
          </p>
        </div>

        <div className="showcase-swiper">
          <Swiper modules={[Pagination, Autoplay, EffectCreative]} pagination={{ clickable: true }} effect={"creative"} loop={true} creativeEffect={creativeEffect}>
            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/gloss_fire_red.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/gloss_black.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/gloss_golden_beach.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/satin_azure.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/satin_barbie_pink.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img
                  src="/images/showcase/reflective_zurikate_white.png"
                  alt=""
                  width="1920"
                  height="1080"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="showcase-item">
                <img src="/images/showcase/matte_hard_black.png" alt="" width="1920" height="1080" loading="lazy" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="showcase-bg">
        <div className="showcase-bg-right">
          <img
            src="/images/backgrounds/bg-showcase-right.png"
            alt="docarative sticker"
            loading="lazy"
            width="634"
            height="621"
          />
        </div>
        <div className="showcase-bg-left">
          <img
            src="/images/backgrounds/bg-showcase-left.png"
            alt="docarative sticker"
            loading="lazy"
            width="618"
            height="566"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
