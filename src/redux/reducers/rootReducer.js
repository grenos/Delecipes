import { combineReducers } from 'redux';
import apiCallsReducer from '../reducers/apiCallsReducer';

export default combineReducers({
  apiReducer: apiCallsReducer
});
