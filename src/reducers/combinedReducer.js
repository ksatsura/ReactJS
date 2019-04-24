import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import filmListReducer from './filmListReducer';

export default combineReducers({
    filmReducer,
    filmListReducer,
});