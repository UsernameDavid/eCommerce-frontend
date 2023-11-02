// source https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React, {Component} from "react";

import NavigationContainer from "../navigation/navigation-container";
import ProductContainer from "../products/product-container";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  //TODO When rendering the Navigation Container, I must update the Badge of the navigation bar with the value of myCart.length!!!

  render() {
    return (
      <div>
        <NavigationContainer myCart={this.props.myCart} addtocart={this.props.addtocart}/>
        <ProductContainer myCart={this.props.myCart} addtocart={this.props.addtocart} />
      </div>
    )
  }
}

export default MainPage;