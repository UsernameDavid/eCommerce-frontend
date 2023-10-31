import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container"
import Main from "./pages/main-page";
import Cart from "./pages/cart-page";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
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
