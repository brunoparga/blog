/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducer';

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__
  || function id(x) { return x; };

const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__(),
].filter((fn) => fn !== undefined && fn !== null);

// __REDUX_DEVTOOLS_EXTENSION__ is a function that takes in a reducer (and a
// preloaded state, and a config, but those are not used here) and returns a
// call to createStore.
export const createStoreWithMiddleware = compose(...middlewares)(createStore);
export default createStoreWithMiddleware(rootReducer);
