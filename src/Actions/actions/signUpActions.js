import {
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_RPASSWORD
} from '../constants';

export const setSignUpName = (name) => ({
  type: CHANGE_SIGNUP_NAME,
  payload: name
})

export const setSignUpEmail = (email) => ({
  type: CHANGE_SIGNUP_EMAIL,
  payload: email
})

export const setSignUpPassword = (password) => ({
  type: CHANGE_SIGNUP_PASSWORD,
  payload: password
})

export const setSignUpRPassword = (password) => ({
  type: CHANGE_SIGNUP_RPASSWORD,
  payload: password
})