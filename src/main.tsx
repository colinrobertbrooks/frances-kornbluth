import React from 'react';
import 'focus-visible';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import Root from './components/Root';
import { initGoogleTagManager } from './utils';

initGoogleTagManager();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
