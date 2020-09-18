import { createStore } from 'redux';
import initReducers from './reducers';

export default () => {
    let initStore = {};
    return createStore(initReducers, initStore);
}