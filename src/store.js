import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/routeReducer';
import { changeSignInInfo } from './Reducers/signinReducer';
import { changeUserInfo } from './Reducers/userReducer';

const store = createStore(
  combineReducers({
    route: changeRoute,
    signin: changeSignInInfo,
    user: changeUserInfo
  }), {}
);

export default store;