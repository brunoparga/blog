import { FETCH_BLOGS, FETCH_BLOG, DELETE_BLOG } from '../action_types';
import API_URL from './api_url';

export default (action) => (slug = '', callback = () => { }) => (dispatch) => {
  const types = {
    index: FETCH_BLOGS,
    show: FETCH_BLOG,
    destroy: DELETE_BLOG,
  };
  const type = types[action];
  const method = (action === 'destroy' ? 'DELETE' : 'GET');
  fetch(`${API_URL}/blogs/${slug}`, {
    method,
    headers: {
      Authorization: localStorage.token,
    },
  })
    .then((res) => res.json())
    .then((payload) => {
      callback();
      dispatch({ type, payload });
    });
};
