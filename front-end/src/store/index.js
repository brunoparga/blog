import { compose, createStore } from 'redux';

import rootReducer from '../reducer';

window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ || (x => x);

const middlewares = [
  window.__REDUX_DEVTOOLS_EXTENSION__
].filter(fn => fn !== undefined && fn !== null)

// __REDUX_DEVTOOLS_EXTENSION__ is a function that takes in a reducer (and a
// preloaded state, and a config, but those are not used here) and returns a
// call to createStore.
export const createStoreWithMiddleware = compose(...middlewares)(createStore)
export default createStoreWithMiddleware(rootReducer);
