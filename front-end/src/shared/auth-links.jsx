import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default () => {
  const user = useSelector((state) => state.user);
  if (user) {
    return (
      <div className="navbar__links">
        {user.email}
        <strong>&nbsp;|&nbsp;</strong>
        <Link className="navbar__link" to="Log out">Sign out</Link>
      </div>
    );
  }
  return (
    <div className="navbar__links">
      <Link className="navbar__link" to="/login">Log in</Link>
      <strong>&nbsp;|&nbsp;</strong>
      <Link className="navbar__link" to="/signup">Sign up</Link>
    </div>
  );
};
