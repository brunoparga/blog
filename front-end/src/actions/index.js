import { FETCH_BLOGS } from '../action_types';

const API_URL = 'http://localhost:3000';

export const fetchBlogs = () => (dispatch) => {
  fetch(`${API_URL}/blogs`)
    .then((res) => res.json())
    .then((payload) => dispatch({ type: FETCH_BLOGS, payload }));
};
