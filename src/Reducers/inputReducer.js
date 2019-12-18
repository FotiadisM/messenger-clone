import {
  CHANGE_INPUT_FRIENDS
} from '../Actions/constants';

const initialState = {
  friendsSearch: ''
}

export const changeInputSearch = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_INPUT_FRIENDS:
      return {
        ...state,
        friendsSearch: action.payload
      };
    default:
      return state;
  }
}