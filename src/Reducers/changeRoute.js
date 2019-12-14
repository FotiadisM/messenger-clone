import { CHANGE_ROUTE } from '../Actions/constants';

const initialState = {
  route: 'Homepage'
}

export const changeRoute = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_ROUTE:
      return state = {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
}