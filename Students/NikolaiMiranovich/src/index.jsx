import React from 'react';
import ReactDom from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Router from './router.jsx';
import { BrowserRouter } from 'react-router-dom';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// import Layout from './components/Layout/Layout.jsx';


const container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    container
)