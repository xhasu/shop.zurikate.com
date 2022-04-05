import React, { useState, useEffect } from 'react'
import Select from 'components/ui/select'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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

    gsap.from('.brands-content', {
      scrollTrigger: {
        trigger: '.brands-container',
        start: 'top center',
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
      <div className="brands-container">
        <section className="section brands-section">
          <div className="brands-content">
            <h2 className="brands-title">
              <span className="stroke">FIND</span>
              your
              <span className="green">MAKE:</span>
            </h2>
            <h4 className="brands-caption">Can't find my vehicle? <span onClick={showContact}>Click here</span> </h4>
            <div className="brands-list">
              <Select placeholder={placeholder} options={data} keyValue="title" keyShow="title" handleClick={handleBrand} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Brands
 