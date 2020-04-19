import React from 'react';
import {
  Switch,
  Route, 
  withRouter
} from "react-router-dom";

import Search from './pages/search/SearchPage';
import Results from './pages/results/ResultsPage';
// import Details from './pages/details/DetailsPage';
import Cart from './pages/cart/CartPage';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/search" exact={true} component={Search}/>
        <Route path="/results" exact={true} component={Results}/>
        <Route path="/details/:item">

        </Route>
        <Route path="/quote">

        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/confirmation">

        </Route>
        <Route path="/delivery/:type">

        </Route>
        <Route path="/rating">

        </Route>
        <Route><Search /></Route>
     </Switch>
    );
  }
}

export default withRouter(App);
