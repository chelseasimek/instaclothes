import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './pages/search/SearchPage';
import Results from './pages/results/ResultsPage';
// import Details from './pages/details/DetailsPage';
import Cart from './pages/cart/CartPage';
import './App.css';

function App() {
  return (
    <React.Fragment> 
    <div className="App">
      <Router>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
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

      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
