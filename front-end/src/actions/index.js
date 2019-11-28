import { FETCH_BLOGS, FETCH_BLOG } from '../action_types';
import API_URL from './api_url';
import send from './send';

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

export const createBlog = send();
export const updateBlog = send(false);
