import React from 'react'

const Brands = ({data = [], setBrand}) => {

  const handleBrand = (event) => {
    setBrand(event.target.value);
  }

  return (
    <div className="brands">
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
 