import { FETCH_BLOGS, FETCH_BLOG, CREATE_BLOG } from '../action_types';

const API_URL = 'http://localhost:3000';

export const fetchBlogs = () => (dispatch) => {
  fetch(`${API_URL}/blogs`)
    .then((res) => res.json())
    .then((payload) => dispatch({ type: FETCH_BLOGS, payload }));
};

export const fetchBlog = (slug) => (dispatch) => {
  fetch(`${API_URL}/blogs/${slug}`)
    .then((res) => res.json())
    .then((payload) => dispatch({ type: FETCH_BLOG, payload }));
};

export const createBlog = (data, callback) => (dispatch) => {
  fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((payload) => {
      callback();
      dispatch({ type: CREATE_BLOG, payload });
    });
};
