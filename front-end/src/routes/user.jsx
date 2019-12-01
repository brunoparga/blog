import React from 'react';
import { Route } from 'react-router-dom';

import Signup from '../views/users/signup';
import Login from '../views/users/login';

export default () => (
  <>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
  </>
);
