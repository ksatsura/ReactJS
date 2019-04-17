import { combineReducers } from 'redux';
import assetReducer from './assetReducer';
import filmListReducer from './filmListReducer';

export default combineReducers({
    assetReducer,
    filmListReducer
});