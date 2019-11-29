import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBlogs } from '../../actions';
import './index.css';

export default function () {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBlogs()), [dispatch]);
  const blogs = useSelector((state) => state.blogs);
  const renderBlogs = blogs.map((blog) => {
    const time = new Date(blog.updated_at).toLocaleString('pt-BR');
    return (
      <div key={`${blog.id}`} className="blog-card">
        <Link to={`/${blog.slug}`} className="blog-card__title">
          {blog.title}
        </Link>
        <span className="blog-card__details">
          Last edit:&nbsp;
          {time}
        </span>
      </div>
    );
  });

  return (
    <div className="blogs">
      <p>
        To add a new blog,&nbsp;
        <Link to="/write-blog">click here</Link>
        .
      </p>
      {renderBlogs}
    </div>
  );
}
