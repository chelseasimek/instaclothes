import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/search">

          </Route>
          <Route path="/results">

          </Route>
          <Route path="/details/:itemName">

          </Route>
          <Route path="/search">

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
