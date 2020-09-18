import React from 'react';
import ReactDom, { render } from 'react-dom';
import Router from './components/Router/Router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from './utils/store';

const container = document.getElementById('app');
ReactDom.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    container
)
