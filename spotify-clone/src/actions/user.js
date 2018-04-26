export const FETCH_TOKEN_REQUESTED = 'FETCH_TOKEN_REQUESTED';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';

export function fetchTokenRequested() {
  return {
    type: FETCH_TOKEN_REQUESTED
  };
}

export function fetchTokenSuccess(token) {
  return {
    type: FETCH_TOKEN_SUCCESS,
    token
  };
}

export function fetchUser() {
  return {
    type: FETCH_USER_REQUESTED
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
}

export function fetchUserError(err) {
  return {
    type: FETCH_USER_ERROR,
    err
  };
}

export function getUser(accessToken) {
  return dispatch => {
    dispatch(fetchUser());
    return fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch(fetchUserSuccess(res)))
      .catch(err => dispatch(fetchUserError(err)));
  };
}

