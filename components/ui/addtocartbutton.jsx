import React, { useEffect, useRef } from 'react'

const AddToCartButton = ({ product = "", variant = "" }) => {

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
        "product": {
          "width": "420px",
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
          },
          "contents": {
            "img": false,
            "title": false,
            "price": false,
            "options": false
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "color": "#000",
              ":hover": {
                "color": "#000",
                "background-color": "#CBFF00"
              },
              "background-color": "#CBFF00",
              ":focus": {
                "background-color": "#CBFF00"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "color": "#000",
              ":hover": {
                "color": "#000",
                "background-color": "#CBFF00"
              },
              "background-color": "#CBFF00",
              ":focus": {
                "background-color": "#CBFF00"
              }
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#CBFF00",
              ":hover": {
                "background-color": "#CBFF00"
              },
              ":focus": {
                "background-color": "#CBFF00"
              }
            },
            "count": {
              "color": "#000",
              ":hover": {
                "color": "#000"
              }
            },
            "iconPath": {
              "fill": "#000"
            }
          }
        }
      },
    })

  }, [product, variant])

  return (
    <div ref={buttonRef}></div>
  )
}

export default AddToCartButton
