import { combineReducers } from 'redux';
import apiCallsReducer from './apiCallsReducer';

export default combineReducers({
  apiReducer: apiCallsReducer
});
