import { CREATE_BLOG, UPDATE_BLOG } from '../action_types';
import API_URL from './api_url';

const setParams = (create, getState) => {
  let slug;
  if (!create) {
    const state = getState();
    slug = state.form['edit-blog'].values.slug;
  }
  const createParams = [`${API_URL}/blogs`, 'POST', CREATE_BLOG];
  const updateParams = [`${API_URL}/blogs/${slug}`, 'PATCH', UPDATE_BLOG];

  return (create ? createParams : updateParams);
};

export default (create = true) => (data, callback) => (dispatch, getState) => {
  const [url, method, type] = setParams(create, getState);
  fetch(url, {
    method,
    headers: {
      Authorization: localStorage.token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((payload) => {
      callback();
      dispatch({ type, payload });
    });
};
