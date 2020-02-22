import {
  CHANGE_INPUT_FRIENDS,
  CHANGE_USER_PROFILE,
  CHANGE_INPUT_USERS,
  CHANGE_USER_MESSAGE
} from '../Actions/constants';

const initialState = {
  friendsSearch: '',
  userProfile: {},
  users: [],
  message: ''
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
    case CHANGE_USER_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}