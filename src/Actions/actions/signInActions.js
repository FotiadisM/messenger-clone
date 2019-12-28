import {
  CHANGE_SIGNIN_EMAIL,
  CHANGE_SIGNIN_PASSWORD
} from '../constants';

export const setSignInEmail = (text) => ({
  type: CHANGE_SIGNIN_EMAIL,
  payload: text
})

export const setSignInPassword = (text) => ({
  type: CHANGE_SIGNIN_PASSWORD,
  payload: text
})