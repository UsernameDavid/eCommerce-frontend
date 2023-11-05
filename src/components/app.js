import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./auth/firebase";

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
    myCart: [],
    loggedInStatus: "NOT_LOGGED_IN",
    email: "",
    password: ""
  };

  this.addtocart = this.addtocart.bind(this)
  this.removefromcart = this.removefromcart.bind(this)

  this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);

  this.updateUserAndPassword = this.updateUserAndPassword.bind(this);
  
}

addtocart(item) {
    this.setState({
      myCart: this.state.myCart.concat(item)
  });
}

removefromcart(item) {

  let cart = this.state.myCart

  let index = cart.findIndex((cartItem => cartItem.id === item.id))
  let newCart = this.state.myCart
  newCart.splice(index, 1)

  return (
    this.setState({
      myCart: newCart
    })
  )

}

handleSuccessfulLogin() {
  this.setState({
    loggedInStatus: "LOGGED_IN"
  });
}

handleUnsuccessfulLogin() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}

handleSuccessfulLogout() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}

checkLoginStatus() {

  auth
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((auth) => 
  
      /*this.setState({
      loggedInStatus: "LOGGED_IN"
      })*/
      this.setState(state => ({ loggedInStatus: "LOGGED_IN" }) )


    )
    .catch((err) => 
    
    /*this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
      })*/
      this.setState(state => ({ loggedInStatus: "NOT_LOGGED_IN" }) )

    );

}

updateUserAndPassword(newemail, newpassword) {
  this.setState({
    email: newemail
  })
  this.setState({
    password: newpassword
  })

  auth
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(
    (auth) => this.setState({
      loggedInStatus: "LOGGED_IN"
      })
    )
    .catch((err) => this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
      })
    );

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
                  addtocart={this.addtocart}
                  loggedInStatus={this.state.loggedInStatus}  />
                )}
              />

              <Route
                path="/cart"
                render={props => (
                  <CheckoutPage
                   {...props}
                    myCart={this.state.myCart}
                    removefromcart={this.removefromcart}
                    loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route 
              path="/signin"
              render={props => (
                <SignIn
                {...props}
                myCart={this.state.myCart}
                updateUserAndPassword={this.updateUserAndPassword}
                loggedInStatus={this.state.loggedInStatus} />
                )}
                />

              <Route path="/signup" component={SignUp}
              loggedInStatus={this.state.loggedInStatus} />

              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
