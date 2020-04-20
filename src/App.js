import React from 'react';
import {
  Switch,
  Route, 
  withRouter
} from "react-router-dom";

import Search from './pages/search/SearchPage';
import Results from './pages/results/ResultsPage';
import Cart from './pages/cart/CartPage';
import Checkout from './pages/checkout/CheckoutPage';
import Confirmation from './pages/confirmation/ConfirmationPage';
// import Details from './pages/details/DetailsPage';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/search" exact={true} component={Search} />
        <Route path="/results" exact={true} component={Results} />
        <Route path="/cart" exact={true} component={Cart} />
        <Route path="/checkout" exact={true} component={Checkout} />
        <Route path="/confirmation" exact={true} component={Confirmation} />
        <Route path="/delivery/:type">

        </Route>
        <Route path="/rating">

        </Route>
        <Route path="/details/:item">

</Route>
     </Switch>
    );
  }
}

export default withRouter(App);
