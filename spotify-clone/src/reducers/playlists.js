import { PLAYLIST_FETCH_REQUEST } from '../actions/playlists';
import { PLAYLIST_FETCH_SUCCESS } from '../actions/playlists';
import { PLAYLIST_FETCH_ERROR } from '../actions/playlists';

const initialState = {
  list: [],
  isFetching: false,
  hasFetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYLIST_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case PLAYLIST_FETCH_SUCCESS:
      return { ...state, isFetching: false, hasFetched: true, list: action.playlists };
    case PLAYLIST_FETCH_ERROR:
      return { ...state, isFetching: false, error: action.playlists.list };
    default:
      return state;
  }
};
