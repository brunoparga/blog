import { combineReducers } from 'redux';

import blogs from './blogs';
import form from './form';
import router from './router';

export default combineReducers({ blogs, form, router });
