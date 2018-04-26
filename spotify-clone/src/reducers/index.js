import { combineReducers } from 'redux';

import playlists from './playlists';
import user from './user';

export default combineReducers({
  playlists: playlists,
  user: user
});
