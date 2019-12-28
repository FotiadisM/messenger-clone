import {
  USER_LOAD_USER,
  USER_CHANGE_ID,
  USER_CHANGE_NAME,
  USER_CHANGE_STATUS,
  USER_CHANGE_FRIENDS
} from '../Actions/constants'

const initialState = {
  id: 0,
  name: '',
  email: '',
  status: 'Active',
  friends: []
}

export const changeUserInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case USER_LOAD_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        // status: action.payload.status,
        friends: action.payload.friends
      }

    case USER_CHANGE_ID:
      return {
        ...state,
        id: action.payload
      };
    case USER_CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case USER_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case USER_CHANGE_FRIENDS:
      return {
        ...state,
        friends: action.payload
        };
    default:
      return state;
  }
}