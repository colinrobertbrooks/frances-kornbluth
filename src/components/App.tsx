import React from 'react';
import styled from 'styled-components';
import { useNotificationsContext } from '../contexts';
import { Switch, Route, Url } from '../router';
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
import { Notification } from './styled';

const App: React.FC = () => {
  const { notifications, dismissNotification } = useNotificationsContext();

  return (
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
      <NotificationsWrapper>
        {notifications.map((notification) => (
          <Notification
            key={`${notification.type}-${notification.timestamp}`}
            notification={notification}
            dismiss={() => dismissNotification(notification)}
          />
        ))}
      </NotificationsWrapper>
    </>
  );
};

const NotificationsWrapper = styled.div`
  bottom: 16px;
  position: fixed;
  padding: 0 16px;
  width: 100%;
  z-index: 999;
`;

export default App;
