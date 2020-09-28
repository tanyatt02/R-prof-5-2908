import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
    messageReducer, chatReducer, router: connectRouter(history)
});
