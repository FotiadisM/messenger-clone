import {
  USER_LOAD_USER,
  USER_CHANGE_ID,
  USER_CHANGE_NAME,
  USER_CHANGE_STATUS,
  USER_CHANGE_FRIENDS
} from '../constants';


export const loadUser = (user) => ({
  type: USER_LOAD_USER,
  payload: user
})

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

export const setUserFriends = (friends) => ({
  type: USER_CHANGE_FRIENDS,
  payload: friends
})