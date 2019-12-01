import React from 'react';
import { Switch } from 'react-router-dom';

import Blog from './blog';
import User from './user';

export default () => (
  <Switch>
    <User />
    <Blog />
  </Switch>
);
