import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNotificationsContext } from '../contexts';
import { usePrevious } from '../hooks';
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
import { Switch, Route, Url, useLocation } from './router';
import { Notification } from './styled';

const App: React.FC = () => {
  const location = useLocation();
  const previousLocation = usePrevious(location);
  const {
    notifications,
    dismissNotification,
    dismissNotifications,
  } = useNotificationsContext();

  useEffect(() => {
    // dismiss notifications on route change
    if (
      notifications &&
      previousLocation &&
      location.pathname !== previousLocation?.pathname
    ) {
      dismissNotifications();
    }
  }, [notifications, location, previousLocation, dismissNotifications]);

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
        {notifications.map((notification) => {
          const { timestamp, type } = notification;

          return (
            <Notification
              key={`${timestamp}-${type}`}
              notification={notification}
              dismiss={() => dismissNotification(notification)}
            />
          );
        })}
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
