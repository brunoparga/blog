import { combineReducers } from 'redux';

import blogs from './blogs';
import form from './form';
import router from './router';
import user from './user';

export default combineReducers({
  blogs, form, router, user,
});
