import { ALBUM_FETCH_REQUEST } from '../actions/albums';
import { ALBUM_FETCH_SUCCESS } from '../actions/albums';
import { ALBUM_FETCH_ERROR } from '../actions/albums';

const initialState = {
  list: [],
  isFetching: false,
  hasFetched: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case ALBUM_FETCH_SUCCESS:
      return { ...state, isFetching: false, hasFetched: true, list: action.albums };
    case ALBUM_FETCH_ERROR:
      return { ...state, isFetching: false, error: action.albums.list };
    default:
      return state;
  }
};
