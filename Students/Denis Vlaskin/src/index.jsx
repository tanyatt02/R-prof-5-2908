import React from 'react';
import ReactDom, { render } from 'react-dom';
import Router from './components/Router/Router.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const container = document.getElementById('app');
ReactDom.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
    container
)