import React from 'react';
import { Link } from 'react-router-dom';

export default ({ slug }) => {
  return (
    <div>
      <Link to={`/edit-blog/${slug}`}>Edit</Link>
      <strong>&nbsp;|&nbsp;</strong>
      <Link to="/">Back</Link>
    </div>
  );
};
