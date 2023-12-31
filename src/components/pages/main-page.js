// source https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React, {Component} from "react";

import NavigationContainer from "../navigation/navigation-container";
import ProductContainer from "../products/product-container";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div>
        <NavigationContainer myCart={this.props.myCart} loggedInStatus={this.props.loggedInStatus} updateUserAndPassword={this.props.updateUserAndPassword} />
        <ProductContainer myCart={this.props.myCart} addtocart={this.props.addtocart} />
      </div>
    )
  }
}

export default MainPage;