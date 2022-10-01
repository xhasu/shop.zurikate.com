import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductDescription = () => {
  const faqsEl = useRef(null);

  useEffect(() => {
    const el = faqsEl.current;
    return true;

    gsap.from(el, {
      scrollTrigger: {
        trigger: ".faqs-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      y: "+5%",
      opacity: 0,
    });
  }, []);

  return (
    <div className="faqs" ref={faqsEl}>
      <section className="section faqs-section max-w-7xl">
        <div className="faqs-body max-w-7xl mx-auto">
          <h2 className="page-title">
            <span>Product</span> Description:
          </h2>
          <p>
            Zurikate corp, is an innovative business that sells full kit skins for the wheels of vehicles. The skins or
            decals are precisely measured and tested to fit on the wheels. These skins are made of 3M vinyl stickers,
            and come in 8 different colors.
          </p>
          <p>
            <strong>
              <span>Self install kits</span>
            </strong>
          </p>
          <p>
            The installation of these decals or skins could take between <span>2 - 3 hours.</span>
          </p>
          <p>
            Great for decorating and changing the color temporarily of your rims. These decals have a strong adhesive so
            that they can effectively stick to the wheels for long periods of time. But at the end of the day, once you
            feel like removing your decal, it can be removed.
          </p>
          <p>
            The kits are cut using a plotter machine for a nice finished product. Also, the decals come with rounded
            corners to prevent peeling when driving or washing.
          </p>
          <p>
            <strong>
              <span>Anti-scratch protection</span>
            </strong>
          </p>
          <p>
            These kits can protect the wheels from rock chips or side walk scratches and the best part is that it looks
            like paint. Our Product comes with a 2 year warranty.
          </p>
          <p>
            <strong>
              <span>We only sell kit decals for OEM wheels</span>
            </strong>
          </p>
          <p>
            The product is made only for OEM WHEELS (Original equipment manufacturer). We don't make kits for
            aftermarket wheels or branded wheels.
          </p>
        </div>
        <div className="pb-6"></div>
        <div className="faqs-body max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-6xl font-object leading-none mb-8">Another way to customize your wheels? </h2>
          <p>
            Currently there are a couple of ways to change or customize the wheels of a vehicle like{" "}
            <span>"Powder coating paint"</span> (Permanent paint) or <span>Buying aftermarket or branded wheels.</span>
          </p>
          <p>But there are some issues with these type of customizations:</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="relative">
              <h3 className="font-object text-3xl md:text-8xl">Cons</h3>
              <sup className="md:absolute md:top-4 md:left-20 uppercase text-primary">Other methods</sup>
              <p className="max-w-lg pt-8">
                - The OEM wheels for lease vehicles can't be painted by dealer contract rules. <br />
                - Painting the wheels is expensive. <br />
                - Painting requires dismounting the wheels and minimum 2 days of work. <br />
                - Adding to your vehicle aftermarket or branded wheels could affect the performance of the vehicle. <br />
              </p>
            </div>
            <div className="relative">
              <h3 className="font-object text-3xl md:text-8xl">Pros</h3>
              <sup className="md:absolute md:top-4 md:left-20 uppercase text-primary">Our method</sup>
              <p className="max-w-lg pt-8">
                That's why our product Zurikate - Two tone wheels creates a new way to customize and protect the wheels of vehicles, changing the appearance of the wheels in an easy, quick and effective way with our vinyl custom decal skins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
