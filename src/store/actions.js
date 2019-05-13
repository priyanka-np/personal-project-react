export const SET_USERNAME = 'SET_USERNAME';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_STATUS = 'FETCH_STATUS';

export const setUsername = e => ({
  type: SET_USERNAME,
  payload: e.target.value
});

const handleLogin = profile => ({
  type: LOGIN,
  payload: profile
});

export const handleError = error => ({
  type: ERROR,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

export const login = username => dispatch => {
  username 
  ? (
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(profile => dispatch(handleLogin(profile)))
  ) 
  : dispatch(handleError('please enter the username'));
}

const getEventsSuccess = events => {
  return {
    type: FETCH_EVENTS,
    payload: events
  };
};

const getStatusSuccess = status => {
  return {
    type: FETCH_STATUS,
    payload: status
  };
};

export const getEvents = username => dispatch => {
  fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(data => {
      dispatch(getEventsSuccess(data));
    });
};

export const getStatus = url => dispatch => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(getStatusSuccess(data));
    });
};
