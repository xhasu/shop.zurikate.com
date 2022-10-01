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

  return (
    <section className="skins" id="skins">

      <div className="flex-1 px-4">

        <h3 className="uppercase text-center text-2xl mb-8">2. Select your model: </h3>

        <div className="skins-grid">
          {skins.products.map((skin, index) => {
            return (
              <div key={index} onClick={() => setSkin(skin)}>
                <Skin data={skin}  />
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Skins;
