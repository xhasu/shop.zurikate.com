import React, { useState, useEffect, useContext } from 'react'
import Brands from 'components/shop/brands'
import Skins from 'components/shop/skins'
import Products from 'components/shop/products'

const Shop = () => {
  return (
    <div>
      <Brands />
      <Skins />
      <Products />
    </div>
  )
}

export default Shop
