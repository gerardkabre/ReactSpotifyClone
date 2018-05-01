export const ALBUM_FETCH_REQUEST = 'ALBUM_FETCH_REQUEST';
export const ALBUM_FETCH_SUCCESS = 'ALBUM_FETCH_SUCCESS';
export const ALBUM_FETCH_ERROR = 'ALBUM_FETCH_ERROR';

export function fetchAlbums() {
  return {
    type: ALBUM_FETCH_REQUEST
  };
}

export function fetchAlbumsSuccess(albums) {
  return {
    type: ALBUM_FETCH_SUCCESS,
    albums
  };
}

export function fetchAlbumsError(err) {
  return {
    type: ALBUM_FETCH_ERROR,
    err
  };
}

export function getAlbums(token) {
  return dispatch => {
    dispatch(fetchAlbums());
    return fetch('https://api.spotify.com/v1/me/albums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(response => dispatch(fetchAlbumsSuccess(response)))
      .catch(err => dispatch(fetchAlbumsError(err)));
  };
}
