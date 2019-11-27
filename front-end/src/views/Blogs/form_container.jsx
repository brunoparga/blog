import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BlogForm from './form';
import { createBlog, fetchBlog } from '../../actions';

export default ({ history, match }) => {
  const [blog, setBlog] = useState({ title: '', content: '' });
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(createBlog(values, () => {
      history.push('/');
    }));
  };
  if (/^\/edit-blog/.test(match.path)) {
    dispatch(fetchBlog(match.params.slug));
    setBlog(useSelector((state) => state.blogs[0]));
  }
  return <BlogForm onSubmit={submit} blog={blog} />;
};
