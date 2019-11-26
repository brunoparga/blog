import { FETCH_BLOGS } from '../action_types';

const initialState = [];

export default function blogs(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BLOGS:
      return payload;
    default:
      return state;
  }
}
