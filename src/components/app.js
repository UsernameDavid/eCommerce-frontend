import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from "./pages/main-page";
import CheckoutPage from "./pages/checkout-page";
import NoMatchPage from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    myCart: []
  };

  this.addtocart = this.addtocart.bind(this)
  
}

addtocart(item) {
    this.setState({
      myCart: this.state.myCart.concat(item)
  });
}

  render() {
    return (
      <div className='app'>
        <Router>
          <div>

            <Switch>
            <Route
                exact path="/"
                render={props => (
                  <MainPage
                  {...props}
                  myCart={this.state.myCart}
                  addtocart={this.addtocart}  />
                )}
              />

              <Route
                path="/cart"
                render={props => (
                  <CheckoutPage
                   {...props}
                    myCart={this.state.myCart} />
                )}
              />

              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
