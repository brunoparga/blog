import React from 'react';
import { Link } from 'react-router-dom';

import AuthLinks from './auth-links';
import './navbar.css';

export default () => (
  <div className="navbar">
    <Link to="/" className="navbar__link navbar__title">Bloggy McBlogface</Link>
    <AuthLinks />
  </div>
);
