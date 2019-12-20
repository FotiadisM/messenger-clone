import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/routeReducer';
import { changeSignInInfo } from './Reducers/signinReducer';
import { changeUserInfo } from './Reducers/userReducer';
import { changeInputSearch } from './Reducers/inputReducer';
import { changeTextingInfo } from './Reducers/textingReducer'

const store = createStore(
  combineReducers({
    route: changeRoute,
    signin: changeSignInInfo,
    user: changeUserInfo,
    input: changeInputSearch,
    texting: changeTextingInfo
  }), {}
);

export default store;