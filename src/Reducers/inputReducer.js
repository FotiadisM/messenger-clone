import {
  CHANGE_INPUT_FRIENDS,
  CHANGE_USER_PROFILE,
  CHANGE_INPUT_USERS
} from '../Actions/constants';

const initialState = {
  friendsSearch: '',
  userProfile: {},
  users: []
}

export const changeInputSearch = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_INPUT_FRIENDS:
      return {
        ...state,
        friendsSearch: action.payload
      };
    case CHANGE_INPUT_USERS:
      return {
        ...state,
        users: action.payload
      }
    case CHANGE_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      }
    default:
      return state;
  }
}