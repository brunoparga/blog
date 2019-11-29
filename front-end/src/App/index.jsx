import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import store from '../store';
import history from '../history';
import Routes from '../routes';

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <h1>Bloggy McBlogface</h1>
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
