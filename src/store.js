import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/changeRoute';
import { changeSearchField } from './Reducers/changeSearchField';

const store = createStore(
  combineReducers({
    route: changeRoute
  }), {}
);

export default store;