import React from 'react';
import { Provider } from 'react-redux';

import './index.css';
import store from '../store';
import Blogs from '../views/Blogs'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Bloggy McBlogface</h1>
        <Blogs />
      </div>
    </Provider>
  );
}
