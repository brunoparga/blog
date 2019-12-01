import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import store from '../store';
import history from '../history';
import Routes from '../routes';
import Navbar from '../shared/navbar';

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
