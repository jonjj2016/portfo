import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/Index';
import { unregister } from './serviceWorker';
unregister();
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
