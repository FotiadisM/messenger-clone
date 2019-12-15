import {
  CHANGE_SIGNIN_EMAIL,
  CHANGE_SIGNIN_PASSWORD
} from '../constants';

export const setEmail = (text) => ({
  type: CHANGE_SIGNIN_EMAIL,
  payload: text
})

export const setPassword = (text) => ({
  type: CHANGE_SIGNIN_PASSWORD,
  payload: text
})