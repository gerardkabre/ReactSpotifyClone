import { combineReducers } from 'redux';

import playlists from './playlists';
import user from './user';
import song from './song';

export default combineReducers({
  playlists: playlists,
  user: user,
  song: song
});
