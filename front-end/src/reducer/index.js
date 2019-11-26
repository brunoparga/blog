import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import blogs from './blogs';
import history from '../history';

export default combineReducers({
  blogs,
  router: connectRouter(history),
});
