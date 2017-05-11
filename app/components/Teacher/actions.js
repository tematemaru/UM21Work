import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  UNIVERSITY,
  FETCH_TEACHER,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';
import {URL} from './../../app.js';
import { getToken, getUserId } from '../../utils/token.js'

export const firstName = response => dispatch => {
  return dispatch({type: FIRST_NAME, firstName: response })
};
export const lastName = response => dispatch => {
  return dispatch({type: LAST_NAME, lastName: response })
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
export const fetchTeacher = response => dispatch => {
  let userId = getToken();
  let token = getToken();
  return fetch(URL+'/api/teacher_profile', {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_TEACHER,
        email: json.email,
        firstName: json.first_name,
        lastName: json.last_name,
        phoneNumber: json.phone_number,
        scienceDegree: json.science_degree })
    });
};
