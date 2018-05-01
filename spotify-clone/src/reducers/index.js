import { combineReducers } from 'redux';

import playlists from './playlists';
import user from './user';
import song from './song';
import albums from './albums';

export default combineReducers({
  playlists: playlists,
  user: user,
  song: song,
  albums: albums
});
