import { createStore, combineReducers } from 'redux';
import { changeRoute } from './Reducers/changeRoute'

const store = createStore(
    combineReducers({
        route: changeRoute
    }), {}
);

export default store;