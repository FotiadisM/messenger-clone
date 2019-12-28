import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/routeReducer';
import { changeSignInInfo } from './Reducers/signInReducer';
import { changeSignUpInfo } from './Reducers/signUpReducer';
import { changeUserInfo } from './Reducers/userReducer';
import { changeInputSearch } from './Reducers/inputReducer';
import { changeTextingInfo } from './Reducers/textingReducer'

const store = createStore(
  combineReducers({
    route: changeRoute,
    signIn: changeSignInInfo,
    signUp: changeSignUpInfo,
    user: changeUserInfo,
    input: changeInputSearch,
    texting: changeTextingInfo
  }), {}
);

export default store;