import {
  TEXTING_SET_USER,
  TEXTING_CONNECTED_USER,
  TEXTING_LOAD_MESSAGES
} from '../Actions/constants'

const initialState = {
  user: {},
  id: 0,
  name: '',
  roomId: '',
  messages: []
}

export const changeTextingInfo = (state = initialState, action = {}) => {
  switch(action.type) {
    case TEXTING_SET_USER:
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        roomId: action.payload.roomId
      }
    case TEXTING_CONNECTED_USER:
      return {
        ...state,
        user: action.payload
      }
    case TEXTING_LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    default:
      return state; 
  }

}