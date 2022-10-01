import React, { useState, useEffect } from 'react'
import Select from 'components/ui/select'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ShopIcon } from "components/shared/icons"

gsap.registerPlugin([ScrollToPlugin, ScrollTrigger]);

const Brands = ({data = [], setBrand}) => {

  const [flag, setFlag] = useState();
  const [placeholder, setPlaceholder] = useState("Select your make");

  const handleBrand = (value) => {
    setBrand(value);
    setPlaceholder(value);
    setFlag(true);
  }

  const handleScroll = (elementId, offsetY = 100) => {
		gsap.to(window, {
			scrollTo: {
				y: elementId,
				offsetY: offsetY,
			}
		});
	}

  const showContact = () => {
    document.querySelector('#contact .contact-form').classList.remove('hidden');
    gsap.to(window, {
			scrollTo: {
				y: "#contact",
				offsetY: 100,
			}
		});
  }

  useEffect(() => {

    return true;

    gsap.from('.brands-content', {
      scrollTrigger: {
        trigger: '.brands-content',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      y: '+120%',
      opacity: 0
    })

  }, [])

  useEffect(() => {

    if( flag ) {
      handleScroll('#skins', 100);
    }
    
    return () => {
      setFlag(false)
    }
  }, [flag])

  return (
    <div className="brands" id="brands">
      <div className="brands-content">
        <h2 className="uppercase text-center text-5xl mb-8">
          <span className="inline-block align-baseline w-12 mr-4">
            <ShopIcon />
          </span>
          Shop Now
        </h2>
        <h3 className="uppercase text-center text-2xl mb-8">1. Select your vehicle brand: </h3>
        <div className="brands-list mb-60">
          <Select placeholder={placeholder} options={data} keyValue="title" keyShow="title" handleClick={handleBrand} />
        </div>
        <h4 className="brands-caption">
          Can't find my vehicle?
          <div className="mt-4">
            <button className="brands-btn" onClick={showContact}>
              click here
            </button>
          </div>
        </h4>
      </div>
    </div>
  )
}

export default Brands
 