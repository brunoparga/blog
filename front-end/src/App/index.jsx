import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from '../store';
import history from '../history';
import Routes from '../routes';
import Navbar from '../shared/navbar';
import './index.css';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>
);
