import React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { NotificationsProvider, CollectionProvider } from '../contexts';
import { Router, Route } from './router';
import App from './App';

const Root: React.FC = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <NotificationsProvider>
        <CollectionProvider>
          <App />
        </CollectionProvider>
      </NotificationsProvider>
    </QueryParamProvider>
  </Router>
);

export default Root;
