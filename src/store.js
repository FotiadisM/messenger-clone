import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/routeReducer';
import { changeSignInInfo } from './Reducers/signinReducer';

const store = createStore(
  combineReducers({
    route: changeRoute,
    signin: changeSignInInfo
  }), {}
);

export default store;