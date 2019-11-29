import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BlogForm from './form';
import { updateBlog, fetchBlog } from '../../actions';

export default ({ history, match: { params: { slug } } }) => {
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(updateBlog(values, () => {
      history.push(`/${slug}`);
    }));
  };

  useEffect(
    () => {
      dispatch(fetchBlog(slug));
    }, [dispatch, slug],
  );

  const blogs = useSelector((state) => state.blogs);
  if (blogs.length === 0) {
    return <p>Loading...</p>;
  }

  const [blog] = blogs;
  return (
    <div className="edit-blog-form">
      <BlogForm
        onSubmit={submit}
        form="edit-blog"
        initialValues={{ slug, title: blog.title, content: blog.content }}
      />
      <Link to={`/${slug}`}>
        Back to &quot;
        {blog.title}
        &quot;
      </Link>
      <strong>&nbsp;|&nbsp;</strong>
      <Link to="/">Home</Link>
    </div>
  );
};