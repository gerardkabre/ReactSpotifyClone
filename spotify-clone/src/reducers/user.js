import { FETCH_TOKEN_REQUESTED, FETCH_USER_REQUESTED } from '../actions/user';
import { FETCH_TOKEN_SUCCESS } from '../actions/user';
import { FETCH_USER_SUCCESS } from '../actions/user';
import { FETCH_USER_ERROR } from '../actions/user';

const initialState = {
  isLoggedIn: false,
  tokenRequested: false,
  tokenSuccess: false,
  user: null,
  token: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN_REQUESTED:
      return { ...state, tokenRequested: true };
    case FETCH_TOKEN_SUCCESS:
      return { ...state, tokenRequested: false, isLoggedIn: true, token: action.token };
    case FETCH_USER_REQUESTED:
      return { ...state, tokenSuccess: false };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.user };
    case FETCH_USER_ERROR:
      return { ...state, error: action.err };
    default:
      return state;
  }
};
