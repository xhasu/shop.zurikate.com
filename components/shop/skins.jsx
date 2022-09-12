import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const Skin = ({ data = {} }) => {
  const { title = "", images = [], description = "", descriptionHtml = "" } = data;

  const skinImage = images.find((item) => {
    return item.altText ? item.altText.toLowerCase().includes("skin") : {};
  });

  return (
    <div className="skin">
      <div className="skin-media">
        <img src={skinImage.src} alt={skinImage.altText} width={300} height={300} />
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

  return (
    <div className="skins" id="skins">
      <div className="skins-container">
        <section className="section skins-section">
          <div className="skins-grid">
            {skins.products.map((skin, index) => {
              return <Skin key={index} data={skin} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skins;
