import {
  CHANGE_INPUT_FRIENDS
} from '../constants';

export const setFriendsSearch = (text) => ({
  type: CHANGE_INPUT_FRIENDS,
  payload: text
})