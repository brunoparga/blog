import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteBlog } from '../../actions';

export default ({ slug, history }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBlog(slug, () => {
      history.push('/');
    }));
  };
  return (
    <div>
      <Link to={`/edit-blog/${slug}`}>Edit</Link>
      <strong>&nbsp;|&nbsp;</strong>
      <button
        type="button"
        className="button-link"
        onClick={handleDelete}
      >
        Delete
      </button>
      <strong>&nbsp;|&nbsp;</strong>
      <Link to="/">Back</Link>
    </div>
  );
};
