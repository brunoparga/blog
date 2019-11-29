import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import BlogForm from './form';
import { createBlog } from '../../actions';

export default ({ history }) => {
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(createBlog(values, () => {
      history.push('/');
    }));
  };
  return (
    <div className="new-blog-form">
      <BlogForm onSubmit={submit} form="new-blog" />
      <Link to="/">Back</Link>
    </div>
  );
};
