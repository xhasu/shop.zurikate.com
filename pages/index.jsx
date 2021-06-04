import React from 'react'

import Intro from 'components/sections/intro'
import Showcase from 'components/sections/showcase'
import Shop from 'components/sections/shop'
import Gallery from 'components/sections/gallery'
import Contact from 'components/sections/contact'

const Landing = () => {
  return (
    <main>
      <Intro />
      <Showcase />
      <Shop />
      <Gallery />
      <Contact />
    </main>
  )
}

export default Landing
