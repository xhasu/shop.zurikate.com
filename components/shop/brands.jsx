import React from 'react'

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-container">
        <section className="section brands-section">
          <div className="brands-content">
            <h2 className="brands-title">
              <span className="stroke">FIND</span> <br />
              your <br />
              <span className="green">MAKE:</span>
            </h2>
            <div className="brands-list">
              <select name="brand">
                <option value="BMW">BMW</option>
                <option value="AUDI">AUDI</option>
                <option value="MERCEDES BENZ">MERCEDES BENZ</option>
                <option value="LEXUS">LEXUS</option>
                <option value="HONDA">HONDA</option>
                <option value="LAMBORGHINI">LAMBORGHINI</option>
                <option value="FERRARI">FERRARI</option>
                <option value="PORSHE">PORSHE</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Brands
 