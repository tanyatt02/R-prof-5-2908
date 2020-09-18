import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import Router from './router.jsx';
import './layout/css/styles.css';

ReactDom.render (
    <BrowserRouter>
        <StylesProvider>
            <Router/>
        </StylesProvider>
    </BrowserRouter>,
    document.querySelector('.container')
)