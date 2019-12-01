import { SIGNUP, LOGIN } from '../action_types';

const initialState = null;

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case SIGNUP:
    case LOGIN:
      // possibly process the payload?
      return payload;
    default:
      return state;
  }
}
