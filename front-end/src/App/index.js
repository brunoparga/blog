import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './index.css';
import store from '../store'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Bloggy McBlogface</h1>
      </div>
    </Provider>
  );
}
