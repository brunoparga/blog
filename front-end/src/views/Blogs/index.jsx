import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBlogs } from '../../actions'
import Blog from './Blog';

export default function () {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBlogs()), [dispatch])
  const blogs = useSelector((state) => state.blogs);
  const renderBlogs = blogs.map((blog) => <Blog data={blog} key={blog.id} />);

  return (
    <div className="blogs">
      {renderBlogs}
    </div>
  );
}
