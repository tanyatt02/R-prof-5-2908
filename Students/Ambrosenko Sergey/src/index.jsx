import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import Router from './components/Router/Router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <StylesProvider>
            <div className="d-flex flex-wrap w-100">
                <Router />
            </div>
        </StylesProvider>
    </BrowserRouter>,
    container
)