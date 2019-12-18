import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/routeReducer';
import { changeSignInInfo } from './Reducers/signinReducer';
import { changeUserInfo } from './Reducers/userReducer';
import { changeInputSearch } from './Reducers/inputReducer';

const store = createStore(
  combineReducers({
    route: changeRoute,
    signin: changeSignInInfo,
    user: changeUserInfo,
    input: changeInputSearch
  }), {}
);

export default store;