import {
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_RPASSWORD
} from '../Actions/constants'

const initialState = {
  name: '',
  email: '',
  password: '',
  rpassword: ''
}

export const changeSignUpInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SIGNUP_NAME:
      return {
        ...state,
        name: action.payload
      };
    case CHANGE_SIGNUP_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case CHANGE_SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case CHANGE_SIGNUP_RPASSWORD:
      return {
        ...state,
        rpassword: action.payload
      };
    default:
      return state;
  }
}