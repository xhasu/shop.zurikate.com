import React, { useState, useEffect } from 'react'
import Brands from 'components/shop/brands'
import Skins from 'components/shop/skins'
import Products from 'components/shop/products'

import Client from 'shopify-buy'

const Shop = () => {

  const [data, setData] = useState([]);
  const [brand, setBrand] = useState(null);
  const [skin, setSkin] = useState(null);

  useEffect(() => {

    const client = Client.buildClient({
      domain: 'zurikate.myshopify.com',
      storefrontAccessToken: 'ff9cc9002ce8806f9f9b1e44166e1bed',
    })

    client.collection.fetchAllWithProducts().then(collections => {
      // console.log(collections);
      setData(collections);
    })
    
    return () => { }
  }, [])

  useEffect(() => {
    setSkin(null);
    return () => { }
  }, [brand])

  return (
    <section>
      <Brands data={data} setBrand={setBrand} />
      {brand && <Skins data={data} brand={brand} setSkin={setSkin} />}
      {skin && <Products data={skin} />}
    </section>
  )
}

export default Shop
