import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from "./pages/main-page";
import CheckoutPage from "./pages/checkout-page";
import NoMatchPage from "./pages/no-match";
//created with Material UI v4 Sign In template and linked to Firebase Auth
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';

export default class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    myCart: []
  };

  this.addtocart = this.addtocart.bind(this)
  this.removefromcart = this.removefromcart.bind(this)
  
}

addtocart(item) {
    this.setState({
      myCart: this.state.myCart.concat(item)
  });
}

removefromcart(item) {
      let newCart = [...this.state.myCart]
      const itemToBeRemoved = this.state.myCart.splice(item.id-1, 1)
      this.setState({
        myCart: this.state.myCart
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
                    myCart={this.state.myCart}
                    removefromcart={this.removefromcart} />
                )}
              />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
