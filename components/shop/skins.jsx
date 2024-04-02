import React, { useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin([ScrollToPlugin, ScrollTrigger]);

const Skin = ({ data = {} }) => {
  const { title = "", images = [], descriptionHtml = "" } = data;

  const skinImage = images.find((item) => {
    return item.altText ? item.altText.toLowerCase().includes("skin") : {};
  });

  return (
    <div className="skin">
      <div className="skin-media">
        <img src={skinImage.src} alt={skinImage.altText} width={360} height={360} />
      </div>
      <div className="skin-title">
        <strong>{title}</strong>
      </div>
      <div className="skin-description" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
    </div>
  );
};

const Skins = ({ data = [], brand = "", setSkin }) => {
  const skins = data.find((d) => d.title == brand);

  const handleScroll = (elementId, offsetY = 100) => {
    gsap.to(window, {
      scrollTo: {
        y: elementId,
        offsetY: offsetY,
      },
    });
  };

  const handleClick = (skin) => {
    setSkin(skin);
    handleScroll("#products", 50);
  };

  return (
    <section className="skins" id="skins">
      <div className="flex-1 px-4">
        <h3 className="uppercase text-center md:text-2xl mb-8">2. Select your model: </h3>

        <div className="skins-grid">
          {skins.products.map((skin, index) => {
            return (
              <div key={index} onClick={() => handleClick(skin)}>
                <Skin data={skin} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skins;
