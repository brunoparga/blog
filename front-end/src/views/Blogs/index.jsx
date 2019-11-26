import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBlogs } from '../../actions';

export default function () {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBlogs()), [dispatch]);
  const blogs = useSelector((state) => state.blogs);
  const renderBlogs = blogs.map((blog) => (
    <Link to={`/${blog.slug}`} key={blog.id}>
      <h3>{blog.title}</h3>
    </Link>
  ));

  return (
    <div className="blogs">
      {renderBlogs}
    </div>
  );
}
