import { SIGNUP, LOGIN } from '../action_types';
import withBody from './with_body';
import noBody from './no_body';

import API_URL from './api_url';

// User actions
// TODO: store the JWT in localStorage!
export const signUserUp = (data, callback) => (dispatch) => {
  fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((payload) => {
      callback();
      dispatch({ type: SIGNUP, payload });
    });
};

export const logUserIn = (data, callback) => (dispatch) => {
  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((payload) => {
      callback();
      dispatch({ type: LOGIN, payload });
    });
};

// Blog actions
export const fetchBlogs = noBody('index');
export const fetchBlog = noBody('show');
export const createBlog = withBody();
export const updateBlog = withBody(false);
export const deleteBlog = noBody('destroy');
