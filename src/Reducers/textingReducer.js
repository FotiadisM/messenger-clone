import {
  TEXTING_SET_USER
} from '../Actions/constants'

const initialState = {
  id: 0,
  name: '',

}

export const changeTextingInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case TEXTING_SET_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name
      }
    default:
      return state; 
  }
}