import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions';
import AuthLinks from './auth-links';
import './navbar.css';

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (localStorage.token && !user) {
      dispatch(fetchUser(localStorage.token));
    }
  });

  return (
    <div className="navbar">
      <Link to="/" className="navbar__link navbar__title">Bloggy McBlogface</Link>
      <AuthLinks />
    </div>
  );
};
