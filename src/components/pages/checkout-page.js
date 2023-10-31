// soruce https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React from "react";

import ProductCartContainer from "../products/product-cart-container";

export default function() {
  return (
    <div className="cart-page-wrapper">
      <div className="cart-title">
        Your Easy Cart
      </div>
      <div className="cart-products">
        <ProductCartContainer />
      </div>
      <div className="cart-total">
        <div>
          Total
        </div>
        <div>
          Products: 2
        </div>
        <div>
          115€
        </div>
        <button className="btn cart-checkout">
          Checkout
        </button>
      </div>
    </div>
  )
}
