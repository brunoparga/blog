import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserForm from './form';
import { logUserIn } from '../../actions';
import '../form.css';

export default ({ history }) => {
  const dispatch = useDispatch();
  const redirectHome = () => { history.push('/'); };
  const submit = (credentials) => {
    dispatch(logUserIn(credentials, redirectHome));
  };
  return (
    <div className="form">
      <UserForm onSubmit={submit} form="login" signup={false} />
      <Link to="/">Home</Link>
    </div>
  );
};
