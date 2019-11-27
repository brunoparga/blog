import React from 'react';
import { useDispatch } from 'react-redux';

import BlogForm from './form';
import { createBlog } from '../../actions';

export default ({ history }) => {
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(createBlog(values, () => {
      history.push('/');
    }));
  };
  return <BlogForm onSubmit={submit} />;
};
