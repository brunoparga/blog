import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBlog } from '../../actions';

export default function Blog({ match: { params: { slug } } }) {
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
      <Link to="/">Back</Link>
    </div>
  );
}
