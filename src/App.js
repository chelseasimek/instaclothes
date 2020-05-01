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
import Arrival from './pages/arrival/ArrivalPage';
import Rating from './pages/rating/RatingPage';
import Details from './pages/details/DetailsPage';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/" exact={true} component={Search} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/results" exact={true} component={Results} />
        <Route path="/details" exact={true} component={Details} />
        <Route path="/cart" exact={true} component={Cart} />
        <Route path="/checkout" exact={true} component={Checkout} />
        <Route path="/confirmation" exact={true} component={Confirmation} />
        <Route path="/arrival" exact={true} component={Arrival} />
        <Route path="/rating" exact={true} component={Rating} />
     </Switch>
    );
  }
}

export default withRouter(App);
