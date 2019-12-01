import { SIGNUP, LOGIN, FETCH_USER } from '../action_types';

const initialState = null;

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case SIGNUP:
    case LOGIN:
    case FETCH_USER:
      return payload;
    default:
      return state;
  }
}
