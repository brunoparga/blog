import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserForm from './form';
import { signUserUp } from '../../actions';
import '../form.css';

export default ({ history }) => {
  const dispatch = useDispatch();
  const redirectHome = () => { history.push('/'); };
  const submit = (credentials) => {
    dispatch(signUserUp(credentials, redirectHome));
  };
  return (
    <div className="form">
      <UserForm onSubmit={submit} form="signup" signup />
      <Link to="/">Home</Link>
    </div>
  );
};
