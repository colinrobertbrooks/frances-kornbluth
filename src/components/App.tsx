import React from 'react';
import { GlobalStyles } from '../styles';
import { Header, Footer } from './layout';
import {
  Accessibility,
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
  Videos,
  Wanted,
  NotFound,
} from './pages';
import { Switch, Route, Url } from './router';

/*
 *  TODO
 *    - gtm
 */

const App: React.FC = () => (
  <>
    <GlobalStyles />
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
      <Route path={Url.VideosPage}>
        <Videos />
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
      <Route path={Url.AccessibilityPage}>
        <Accessibility />
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
);

export default App;
