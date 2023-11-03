// soruce https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React, {Component} from "react";
import Lottie from 'lottie-react';
import animationData from '../../lotties/no-products-found.json';

import NavigationContainer from "../navigation/navigation-container";
import ProductCartContainer from "../products/product-cart-container";

class CheckoutPage extends Component {
  constructor() {
    super();

    this.state = {
      price: 0.00
    }

    this.getTotal = this.getTotal.bind(this)

  }

  getTotal(){
    this.props.myCart.map(item => {
      this.state.price = this.state.price + parseFloat(item.price.replace(",", "."))
    })
    this.state.price = parseFloat(this.state.price).toFixed(2)
  }

  render(){
    this.getTotal()
    return (
      <div>
        <NavigationContainer myCart={this.props.myCart} />
        <div className="cart-page-wrapper">
          <div className="cart-title">
            {this.props.myCart.length > 0 ? `Your cart has ${this.props.myCart.length} products` : "Your cart is Empty"}
          </div>

          {this.props.myCart.length > 0 ? 

            <div className="cart-products">
            <ProductCartContainer myCart={this.props.myCart} removefromcart={this.props.removefromcart} />
            </div>

           : 

           <Lottie className="lottie"
           animationData={animationData}
           height={400}
           width={400}
          />
           }

          <div className="cart-total">
            <div>
              Total
            </div>
            <div>
              Products: {this.props.myCart.length}
            </div>
            <div>
              Cost: {this.state.price} €
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
