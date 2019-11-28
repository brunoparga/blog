import {
  FETCH_BLOGS, FETCH_BLOG, CREATE_BLOG, UPDATE_BLOG,
} from '../action_types';

const initialState = [];

export default function blogs(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BLOGS:
      return payload;
    case FETCH_BLOG:
      return [payload];
    case CREATE_BLOG:
      return [...state, payload];
    case UPDATE_BLOG:
      return state.map((blog) => (blog.id === payload.id ? payload : blog));
    default:
      return state;
  }
}
