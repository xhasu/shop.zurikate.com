import React from 'react'

import Intro from 'components/sections/intro'
import Showcase from 'components/sections/showcase'
import Shop from 'components/sections/shop'
import Gallery from 'components/sections/gallery'
import Contact from 'components/sections/contact'

const Landing = () => {
  return (
    <main>
      {/* <Intro /> */}
      <div className="pos-relative">
        {/* <Showcase /> */}
        <Shop />
        {/* <Gallery /> */}
        {/* <Contact /> */}
        <div className="background-noise">
          <img src="/images/backgrounds/background-noise.jpg" alt="background Zurikate" />
        </div>
      </div>
    </main>
  )
}

export default Landing
