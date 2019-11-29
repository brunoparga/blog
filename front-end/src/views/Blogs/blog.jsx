import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBlog } from '../../actions';
import BlogNav from './nav';
import './blog.css';

export default function Blog({ history, match: { params: { slug } } }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog(slug));
  }, [slug, dispatch]);
  const blog = useSelector((state) => state.blogs[0]);
  if (!blog) {
    return <p>Loading...</p>;
  }
  return (
    <div className="blog">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <BlogNav slug={slug} history={history} />
    </div>
  );
}
