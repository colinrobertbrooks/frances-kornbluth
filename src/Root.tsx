import { HelmetProvider } from 'react-helmet-async';
import { QueryParamProvider } from 'use-query-params';
import { NotificationsProvider, CollectionProvider } from 'contexts';
import { Router, RouteAdapter } from 'router';
import App from './App';

const Root = () => (
  <HelmetProvider>
    <Router>
      <QueryParamProvider
        ReactRouterRoute={RouteAdapter as unknown as React.FunctionComponent}
      >
        <NotificationsProvider>
          <CollectionProvider>
            <App />
          </CollectionProvider>
        </NotificationsProvider>
      </QueryParamProvider>
    </Router>
  </HelmetProvider>
);

export default Root;
