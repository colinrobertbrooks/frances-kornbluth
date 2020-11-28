import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout';
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
  NotFound,
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header />
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
          <Route exact path="/">
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
