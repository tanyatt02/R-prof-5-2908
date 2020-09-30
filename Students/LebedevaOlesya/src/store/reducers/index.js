import { combineReducers } from 'redux';
import messageReducer from './messageReducer.js';
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer.js';

export default (history) => combineReducers({ 
    router: connectRouter(history),
    messageReducer,
    chatReducer,
});
