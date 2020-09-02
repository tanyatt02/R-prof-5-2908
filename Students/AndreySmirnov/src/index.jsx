import React from 'react';
import ReactDom from 'react-dom'
import './layout/css/styles.css'
import App from './App.jsx'
import store from "./store/store.js";

const rerender = (state) => {
    ReactDom.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('app')
    )
}

rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
})