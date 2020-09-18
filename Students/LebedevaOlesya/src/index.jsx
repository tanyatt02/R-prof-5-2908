import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import Layout from './components/Layout/Layout.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
            {/* <Fragment>
                <Layout />
            </Fragment> */}
        </MuiThemeProvider>
    </BrowserRouter>,
    container,
 );