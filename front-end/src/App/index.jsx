import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import './index.css';
import store from '../store';
import history from '../history';
import Blogs from '../views/Blogs';
import Blog from '../views/Blogs/blog';
import NewBlogForm from '../views/forms/new_blog_form';
import EditBlogForm from '../views/forms/edit_blog_form';

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <h1>Bloggy McBlogface</h1>
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route exact path="/write-blog" component={NewBlogForm} />
            <Route path="/edit-blog/:slug" component={EditBlogForm} />
            <Route path="/:slug" component={Blog} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
