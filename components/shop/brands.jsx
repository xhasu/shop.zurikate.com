import React, { useState, useEffect } from "react";
import Select from "components/ui/select";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShopIcon } from "components/shared/icons";

gsap.registerPlugin([ScrollToPlugin, ScrollTrigger]);

const Brands = ({ data = [], setBrand }) => {
  const [flag, setFlag] = useState();
  const [placeholder, setPlaceholder] = useState("Select your make");

  const handleBrand = (value) => {
    setBrand(value);
    setPlaceholder(value);
    setFlag(true);
  };

  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      },
    });
  };

  const showContact = () => {
    document.querySelector("#contact .contact-form").classList.remove("hidden");
    gsap.to(window, {
      scrollTo: {
        y: "#contact",
        offsetY: 100,
      },
    });
  };

  useEffect(() => {
    gsap.from(".brands", {
      scrollTrigger: {
        trigger: ".brands",
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      y: "+20%",
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    if (flag) {
      handleScroll("#skins", 100);
    }

    return () => {
      setFlag(false);
    };
  }, [flag]);

  return (
    <div className="brands" id="brands">
      <div className="brands-content">
        <div className="text-center py-10 flex lg:hidden justify-center items-center">
          <img src="/images/icons/brand.png" alt="Zurikate brand white" width="60" />
        </div>
        <h2 className="uppercase text-center text-3xl md:text-5xl mb-8">
          <span className="inline-block align-baseline w-8 md:w-12 mr-4">
            <ShopIcon />
          </span>
          Shop Now
        </h2>
        <h3 className="uppercase text-center md:text-2xl mb-4 lg:mb-8">1. Select your vehicle brand: </h3>
        <div className="brands-list mb-10 lg:mb-4">
          <Select placeholder={placeholder} options={data} keyValue="title" keyShow="title" handleClick={handleBrand} />
        </div>
        <div className="text-center my-8 md:my-20 hidden justify-center items-center lg:flex">
          <img src="/images/icons/brand.png" alt="Zurikate brand white" width="126" height="94" />
        </div>
        <h4 className="brands-caption">
          Can't find my vehicle?
          <div className="mt-4">
            <button className="brands-btn" onClick={showContact}>
              click here
            </button>
          </div>
        </h4>
        <div className="aspect-square block sm:hidden"></div>
      </div>
    </div>
  );
};

export default Brands;
