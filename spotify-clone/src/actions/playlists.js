export const PLAYLIST_FETCH_REQUEST = 'PLAYLIST_FETCH_REQUEST';
export const PLAYLIST_FETCH_SUCCESS = 'PLAYLIST_FETCH_SUCCESS';
export const PLAYLIST_FETCH_ERROR = 'PLAYLIST_FETCH_ERROR';

export function fetchPlaylists() {
  return {
    type: PLAYLIST_FETCH_REQUEST
  };
}

export function fetchPlaylistsSuccess(playlists) {
  return {
    type: PLAYLIST_FETCH_SUCCESS,
    playlists
  };
}

export function fetchPlaylistsError(err) {
  return {
    type: PLAYLIST_FETCH_ERROR,
    err
  };
}

export function getPlaylists(token) {
  return dispatch => {
    dispatch(fetchPlaylists());
    return fetch('https://api.spotify.com/v1/browse/categories/jazz/playlists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(response => dispatch(fetchPlaylistsSuccess(response)))
      .catch(err => dispatch(fetchPlaylistsError(err)));
  };
}
