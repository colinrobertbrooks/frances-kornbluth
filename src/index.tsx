import 'focus-visible';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { initGoogleTagManager } from './utils';

initGoogleTagManager();

ReactDOM.render(<Root />, document.getElementById('root'));
