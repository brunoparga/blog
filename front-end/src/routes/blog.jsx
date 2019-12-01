import React from 'react';
import { Route } from 'react-router-dom';

import Blogs from '../views/Blogs';
import Blog from '../views/Blogs/blog';
import NewBlogForm from '../views/Blogs/forms/new_blog_form';
import EditBlogForm from '../views/Blogs/forms/edit_blog_form';

export default () => (
  <React.Fragment>
    <Route exact path="/" component={Blogs} />
    <Route exact path="/write-blog" component={NewBlogForm} />
    <Route exact path="/edit-blog/:slug" component={EditBlogForm} />
    <Route exact path="/blog/:slug" component={Blog} />
  </React.Fragment>
);
