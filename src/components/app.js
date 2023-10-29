import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container"
import ProductContainer from "./products/product-container";
import Main from "./pages/main-page";
import Cart from "./pages/cart-page";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor() {
    super();
   
  }

  getProducts(){
    axios.get('http://127.0.0.1:5000/product/get')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    this.getProducts();
    return (
      <div className='app'>
            <Router>
              <div>
                <NavigationContainer />
                <ProductContainer />
                <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/cart" component={Cart} />
                <Route component={NoMatch} />
                </Switch>
              </div>
            </Router>
      </div>
    );
  }
}
