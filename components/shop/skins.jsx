import React, { useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Modal from "components/ui/modal";

gsap.registerPlugin([ScrollToPlugin, ScrollTrigger]);

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

  const [openVideo, setOpenVideo] = useState(false);

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
    handleScroll("#products");
  };

  return (
    <section className="skins" id="skins">
      <div className="flex-1 px-4">
        <div className="max-w-sm px-5 text-center mx-auto mb-16">
          <button className="btn text-black bg-primary" type="button" onClick={() => setOpenVideo(true)}>
            <span>How to install?</span>
          </button>
        </div>

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

      {openVideo && (
        <Modal isOpen={openVideo} handleOpen={setOpenVideo}>
          <div className="flex-1 max-h-screen max-w-5xl">
            <div className="aspect-video w-[320px] sm:w-[480px] md:w-[620px]">
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
    </section>
  );
};

export default Skins;
