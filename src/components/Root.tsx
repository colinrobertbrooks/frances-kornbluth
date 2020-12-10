import React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { CollectionProvider } from '../contexts';
import { Router, Route } from './router';
import App from './App';

const Root: React.FC = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <CollectionProvider>
        <App />
      </CollectionProvider>
    </QueryParamProvider>
  </Router>
);

export default Root;
