import styled from 'styled-components';
import { useNotificationsContext } from '../contexts';
import { Routes, Route, Url } from '../router';
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
  NotFound,
} from './pages';
import { ToastNotification } from './styled';

const App = () => {
  const { notifications, dismissNotification } = useNotificationsContext();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path={Url.HomePage} element={<Home />} />
        {/* artist */}
        <Route path={Url.BiographyPage} element={<Biography />} />
        <Route path={Url.TimelinePage} element={<Timeline />} />
        <Route path={Url.StatementsPage} element={<Statements />} />
        <Route path={Url.QuotesPage} element={<Quotes />} />
        <Route path={Url.VideosPage} element={<Videos />} />
        {/* artwork */}
        <Route path={Url.CollectionPage} element={<Collection />} />
        <Route path={Url.ReviewsPage} element={<Reviews />} />
        <Route path={Url.BooksPage} element={<Books />} />
        {/* footer */}
        <Route path={Url.ContactPage} element={<Contact />} />
        <Route path={Url.AccessibilityPage} element={<Accessibility />} />
        <Route path={Url.CopyrightPage} element={<Copyright />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <NotificationsWrapper>
        {notifications.map((notification) => (
          <ToastNotification
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
