import React from 'react';
import ReactDom from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Router from './router.jsx';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import initStore from './utils/store.js';


const container = document.getElementById('app');

ReactDom.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    container
)