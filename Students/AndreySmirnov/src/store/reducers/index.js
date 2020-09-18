import {msgReducer} from './messages.js'
import {combineReducers} from "redux";
import {welcomeReducer} from "./welcome";

export const reducers = combineReducers({
    logInfo: welcomeReducer,
    messages: msgReducer,
})