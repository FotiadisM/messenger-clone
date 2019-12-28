import {
  CHANGE_SIGNIN_EMAIL,
  CHANGE_SIGNIN_PASSWORD
} from '../Actions/constants';

const initialState = {
  email: '',
  password: ''
}

export const changeSignInInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SIGNIN_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case CHANGE_SIGNIN_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
}