// soruce https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React, {Component} from "react";

import NavigationContainer from "../navigation/navigation-container";
import ProductCartContainer from "../products/product-cart-container";

class CheckoutPage extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <NavigationContainer myCart={this.props.myCart} />
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
              Products: {this.props.myCart.length}
            </div>
            <div>
              115€
            </div>
            <button className="btn cart-checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutPage;
