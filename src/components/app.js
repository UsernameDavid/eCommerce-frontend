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
      let newCart = [...this.state.myCart]
      const itemToBeRemoved = this.state.myCart.splice(item.id-1, 1)
      this.setState({
        myCart: this.state.myCart
      });
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
              <Route 
              path="/signin"
              render={props => (
                <SignIn
                {...props}
                updateUserAndPassword={this.updateUserAndPassword} />
                )}
                />
              <Route path="/signup" component={SignUp} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
