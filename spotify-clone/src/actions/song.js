export const FETCH_RECENTLY_PLAYED_REQUEST = 'FETCH_RECENTLY_PLAYED_REQUEST';
export const FETCH_RECENTLY_PLAYED_SUCCESS = 'FETCH_RECENTLY_PLAYED_SUCCESS';
export const FETCH_RECENTLY_PLAYED_ERROR = 'FETCH_RECENTLY_PLAYED_ERROR';
export const FETCH_ALL_SONGS_REQUEST = 'FETCH_ALL_SONGS_REQUEST';
export const FETCH_ALL_SONGS_SUCCESS = 'FETCH_ALL_SONGS_SUCCESS';
export const FETCH_ALL_SONGS_ERROR = 'FETCH_ALL_SONGS_ERROR';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const RESUME_SONG = 'RESUME_SONG';


export function fetchRecentlyPlayedRequest() {
  return {
    type: FETCH_RECENTLY_PLAYED_REQUEST
  };
}

export function fetchRecentlyPlayedSuccess(songs) {
  return {
    type: FETCH_RECENTLY_PLAYED_SUCCESS,
    songs
  };
}

export function fetchRecentlyPlayedError(err) {
  return {
    type: FETCH_RECENTLY_PLAYED_ERROR,
    err
  };
}

export const fetchRecentlyPlayed = accessToken => {
  return dispatch => {
    dispatch(fetchRecentlyPlayedRequest());
    return fetch('https://api.spotify.com/v1/me/player/recently-played', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch(fetchRecentlyPlayedSuccess(res)))
      .catch(err => dispatch(fetchRecentlyPlayedError(err)));
  };
};


export function fetchAllSongsRequest() {
  return {
    type: FETCH_ALL_SONGS_REQUEST
  };
}

export function fetchAllSongsSuccess(songs) {
  return {
    type: FETCH_ALL_SONGS_SUCCESS,
    songs
  };
}

export function fetchAllSongsError(err) {
  return {
    type: FETCH_ALL_SONGS_ERROR,
    err
  };
}

export const fetchSongs = accessToken => {
  return dispatch => {
    dispatch(fetchAllSongsRequest());
    return fetch('https://api.spotify.com/v1/me/tracks?limit=50', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch(fetchAllSongsSuccess(res)))
      .catch(err => dispatch(fetchAllSongsError(err)));
  };
};


export const playSong = song => {
  return {
    type: 'PLAY_SONG',
    song
  };
};

export const pauseSong = () => {
  return {
    type: 'PAUSE_SONG'
  };
};

export const resumeSong = () => {
  return {
    type: 'RESUME_SONG'
  };
};
