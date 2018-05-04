import { FETCH_RECENTLY_PLAYED_REQUEST, RESUME_SONG } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_SUCCESS } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_ERROR } from '../actions/song';
import { PLAY_SONG } from '../actions/song';
import { PAUSE_SONG } from '../actions/song';
import { STOP_SONG } from '../actions/song';

const initialState = {
  isFetching: false,
  hasFetched: false,
  songs: [],
  error: null,
  isPlaying: false,
  songDetails: null,
  songId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENTLY_PLAYED_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_RECENTLY_PLAYED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        songs: action.songs
      };
    case FETCH_RECENTLY_PLAYED_ERROR:
      return {
        ...state,
        isFetching: false,
        hasFetched: false,
        error: action.err
      };
    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
        songDetails: action.song,
        songId: action.song.id
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false
      };
    case RESUME_SONG:
      return {
        ...state,
        isPlaying: true
      };
    default:
      return state;
  }
};
