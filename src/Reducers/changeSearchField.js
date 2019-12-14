import {
  CHANGE_SEARCH_FIELD_EMAIL,
  CHANGE_SEARCH_FIELD_PASSWORD
} from '../Actions/constants'

const initialState = {
  email: '',
  password: ''
}

export const changeSearchField = (state = initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD_EMAIL:
      return state = {
        ...state,
        email: action.payload
      };
    case CHANGE_SEARCH_FIELD_PASSWORD:
      return state = {
        ...state,
        password: action.payload
      };
    default:
      return state;
   }
}