import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

const Brands = ({data = [], setBrand}) => {

  const [flag, setFlag] = useState();

  const handleBrand = (event) => {
    setBrand(event.target.value);
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
            <div className="brands-list">
              <select name="brand" onChange={handleBrand}>
                <option value="" hidden={true}>Select your make</option>
                { data.map((item, index) => <option key={index} value={item.title}>{item.title}</option>) }
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Brands
 