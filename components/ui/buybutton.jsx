import React, { useEffect, useRef } from 'react'

const BuyButton = ({ product = "", variant = "" }) => {

  const buttonRef = useRef();
  
  useEffect(() => {

    const client = ShopifyBuy.buildClient({
      domain: 'zurikate.myshopify.com',
      storefrontAccessToken: 'ff9cc9002ce8806f9f9b1e44166e1bed',
    })
  
    const ui = ShopifyBuy.UI.init(client);

    buttonRef.current.innerHTML = '';
    
    ui.createComponent('product', {
      id: product,
      variantId: variant,
      node: buttonRef.current,
      options: {
        product: {
          "width": "420px",
          "buttonDestination": "checkout",
          "contents": {
            "img": false,
            "title": false,
            "price": false,
            "options": false
          },
          "text": {
            "button": "Buy now"
          },
          "styles": {
            "button": {
              "font-family": "CenturyGothic, Helvetica, sans-serif",
              "font-size": "21px",
              "font-weight": "700",
              "text-transform": "uppercase",
              "background-color": "#CBFF00",
              "border-radius": "8px",
              "margin-top": "0",
              "color": "black",
              "width": "100%",
              "height": "45px",
              ":hover": {
                "background-color": "#CBFF00"
              }
            }
          }
        }
      }
    })

  }, [product, variant])

  return (
    <div ref={buttonRef}></div>
  )
}

export default BuyButton
