import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './pages/search/SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/results">

          </Route>
          <Route path="/details/:itemName">

          </Route>
          <Route path="/quote">

          </Route>
          <Route path="/confirmation">

          </Route>
          <Route path="/delivery/:type">

          </Route>
          <Route path="/rating">

          </Route>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
