import { FETCH_RECENTLY_PLAYED_REQUEST } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_SUCCESS } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_ERROR } from '../actions/song';

const initialState = {
  isFetching: false,
  hasFetched: false,
  songs: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENTLY_PLAYED_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_RECENTLY_PLAYED_SUCCESS:
      return { ...state, isFetching: false, hasFetched: true, songs: action.songs };
    case FETCH_RECENTLY_PLAYED_ERROR:
      return { ...state, isFetching: false, hasFetched: false, error: action.err };
    default:
      return state;
  }
};
