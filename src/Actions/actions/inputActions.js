import {
  CHANGE_INPUT_FRIENDS,
  CHANGE_USER_PROFILE,
  CHANGE_INPUT_USERS
} from '../constants';

export const setFriendsSearch = (text) => ({
  type: CHANGE_INPUT_FRIENDS,
  payload: text
})

export const setInputUsers = (users) => ({
  type: CHANGE_INPUT_USERS,
  payload: users
})

export const setUserProfile = (user) => ({
  type: CHANGE_USER_PROFILE,
  payload: user
})