import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import initStore from './store';

// import MuiThemeProvider from '@material-ui/styles/ThemeProvider/'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const container = document.getElementById('app');

ReactDom.render(
    <Provider store = { initStore() }>
        <BrowserRouter>
            {/* <MuiThemeProvider theme = { theme }> */}
                <Router />
            {/* </MuiThemeProvider> */}
        </BrowserRouter>
    </Provider>,
    container
)
