import { combineReducers } from 'redux';
import messageReducer from './messages.js';
// other reducers
// import { combineReducers } from 'redux';

export default combineReducers( { messageReducer } );