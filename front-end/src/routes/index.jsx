import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blogs from '../views/Blogs';
import Blog from '../views/Blogs/blog';
import NewBlogForm from '../views/forms/new_blog_form';
import EditBlogForm from '../views/forms/edit_blog_form';

export default () => (
  <Switch>
    <Route exact path="/" component={Blogs} />
    <Route exact path="/write-blog" component={NewBlogForm} />
    <Route path="/edit-blog/:slug" component={EditBlogForm} />
    <Route path="/:slug" component={Blog} />
  </Switch>
);
