import {
  USER_LOAD_USER,
  USER_CHANGE_ID,
  USER_CHANGE_NAME,
  USER_CHANGE_STATUS,
  USER_CHANGE_FRIENDS
} from '../Actions/constants'

const initialState = {
  _id: 0,
  name: '',
  email: '',
  status: 'Active',
  friends: [],
  request: []
}

export const changeUserInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case USER_LOAD_USER:
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        // status: action.payload.status,
        friends: action.payload.friends,
        requests: action.payload.requests
      }

    case USER_CHANGE_ID:
      return {
        ...state,
        _id: action.payload
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