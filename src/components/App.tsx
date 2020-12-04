import React from 'react';
import { Header, Footer } from './layout';
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
import { Router, Switch, Route, Url } from './router';

const App: React.FC = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path={Url.HomePage}>
          <Home />
        </Route>
        {/* artist */}
        <Route path={Url.BiographyPage}>
          <Biography />
        </Route>
        <Route path={Url.TimelinePage}>
          <Timeline />
        </Route>
        <Route path={Url.StatementsPage}>
          <Statements />
        </Route>
        <Route path={Url.QuotesPage}>
          <Quotes />
        </Route>
        {/* artwork */}
        <Route path={Url.CollectionPage}>
          <Collection />
        </Route>
        <Route path={Url.ReviewsPage}>
          <Reviews />
        </Route>
        <Route path={Url.BooksPage}>
          <Books />
        </Route>
        {/* footer */}
        <Route path={Url.ContactPage}>
          <Contact />
        </Route>
        <Route path={Url.CopyrightPage}>
          <Copyright />
        </Route>
        <Route path={Url.WantedPage}>
          <Wanted />
        </Route>
        {/* errors */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
