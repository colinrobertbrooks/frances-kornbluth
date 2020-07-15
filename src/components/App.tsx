import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Biography,
  Books,
  Collection,
  Contact,
  Copyright,
  Home,
  Quotes,
  Reviews,
  Statements,
  Timeline,
  Wanted,
} from './pages';

// TODO: 404
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/biography">
            <Biography />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/copyright">
            <Copyright />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/statements">
            <Statements />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/wanted">
            <Wanted />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
