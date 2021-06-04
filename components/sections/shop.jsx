import React, { useState, useEffect, useContext } from 'react'
import Brands from 'components/shop/brands'
import Skins from 'components/shop/skins'
import Products from 'components/shop/products'

import Client from 'shopify-buy'

const Shop = () => {

  useEffect(() => {

    let client = ShopifyBuy.buildClient({
      domain: 'zurikate.myshopify.com',
      apiKey: 'ff9cc9002ce8806f9f9b1e44166e1bed',
    })
    
    let ui = ShopifyBuy.UI.init(client);

    ui.createComponent('product', {
      id: 6820324737183,
      variantId: 40144421093535,
      // node: document.getElementById(''),
      options: {
        product: {
          "buttonDestination": "checkout",
          "contents": {
            "img": false,
            "title": false,
            "price": false,
            "options": false
          },
          "text": {
            "button": "Buy now"
          }
        },
        cart: {
          // "popup": false
        }
      }
    });

  }, [])

  useEffect(() => {

    const client = Client.buildClient({
      domain: 'zurikate.myshopify.com',
      apiKey: 'ff9cc9002ce8806f9f9b1e44166e1bed',
    })

    client.collection.fetchAllWithProducts().then(collections => {
      console.log(collections);
      console.log(collections[0].products);
      console.log(collections[0].products[0].title);
      console.log(collections[0].products[0].images);
    })
    
    return () => { }
  }, [])

  return (
    <div>
      <Brands />
      <Skins />
      <Products />
    </div>
  )
}

export default Shop
