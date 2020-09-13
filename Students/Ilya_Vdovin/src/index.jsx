import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Layout from './components/Layout/Layout.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <Layout />
    </div>,
    container
)