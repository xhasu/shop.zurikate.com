import React from 'react'

// import Intro from 'components/sections/intro'
import Showcase from 'components/sections/showcase'
import Shop from 'components/sections/shop'
import Gallery from 'components/sections/gallery'
import Faqs from 'components/sections/Faqs'
import Contact from 'components/sections/contact'
import ProductDescription from "components/sections/product-description"

const Landing = () => {
  return (
    <main>
      {/* <Intro /> */}
      <div className="relative">
        <Showcase />
        <Shop />
        <ProductDescription />
        <Gallery />
        <Faqs />
        <Contact />
      </div>
    </main>
  )
}

export default Landing
