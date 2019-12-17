import {
  USER_CHANGE_NAME,
  USER_CHANGE_STATUS,
  USER_CHANGE_ID
} from '../constants';

export const setID = (id) => ({
  type: USER_CHANGE_ID,
  payload: id
})

export const setName = (name) => ({
  type: USER_CHANGE_NAME,
  payload: name
})

export const setStatus = (status) => ({
  type: USER_CHANGE_STATUS,
  payload: status
})