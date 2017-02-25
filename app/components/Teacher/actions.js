import {
  USER_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  UNIVERSITY,
  UPDATE,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';

export const userName = response => dispatch => {
  return dispatch({type: USER_NAME, userName: response })
};
export const email = response => dispatch => {
  return dispatch({type: EMAIL, email: response })
};
export const phoneNumber = response => dispatch => {
  return dispatch({type: PHONE_NUMBER, phoneNumber: response })
};
export const scienceDegree = response => dispatch => {
  return dispatch({type: SCIENCE_DEGREE, scienceDegree: response })
};
export const redirectHome = response => dispatch => {
  browserHistory.push('/');
  return dispatch({ type: REDIRECT_HOME })
};
export const update = response => dispatch => {
  let userId = JSON.parse(localStorage.getItem('user_id'));
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/teachers/' + userId, {
    method: 'Get',
    headers: {
       Authorization: "Token Awc3jmMcQn1xUMfln2SqwQ==",
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: UPDATE, payload: json })
    });
};
