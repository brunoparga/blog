import { FETCH_BLOGS, FETCH_BLOG, CREATE_BLOG } from '../action_types';

const initialState = [];

export default function blogs(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BLOGS:
      return payload;
    case FETCH_BLOG:
      return [payload];
    case CREATE_BLOG:
      return [...state, payload];
    default:
      return state;
  }
}
