import { createStore } from 'redux';
import initReducers from './../reducers';

function initStore() {
    const innitialtStore = {};

    return createStore(
        initReducers,
        innitialtStore,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    );
}

export default initStore;