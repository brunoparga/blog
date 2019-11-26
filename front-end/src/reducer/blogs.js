import { FETCH_BLOGS, FETCH_BLOG } from '../action_types';

const initialState = [];

export default function blogs(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BLOGS:
      return payload;
    case FETCH_BLOG:
      return [payload];
    default:
      return state;
  }
}
