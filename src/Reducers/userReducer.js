import {
  USER_CHANGE_NAME,
  USER_CHANGE_STATUS,
  USER_CHANGE_ID
} from '../Actions/constants'

const initialState = {
  id: 123,
  name: 'Fotiadis Michail',
  status: 'Active'
}

export const changeUserInfo = (state = initialState, action = {}) => {
  switch(action.type) {
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
    default:
      return state;
  }
}