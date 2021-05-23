import React from 'react'

import Header from 'components/shared/header'
import Seo from 'components/shared/seo'

const Main = ({children}) => {
  return (
    <div className="app">

      <Seo />

      <Header />

      {children}

    </div>
  )
}

export default Main
