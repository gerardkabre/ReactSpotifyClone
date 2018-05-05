import { combineReducers } from 'redux';


import user from './user';
import song from './song';
import albums from './albums';

export default combineReducers({
  user: user,
  song: song,
  albums: albums
});
