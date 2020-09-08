import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import Layout from './components/Layout/Layout.jsx';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const container = document.getElementById('app');

ReactDom.render(
    <StylesProvider>
        <div className="d-flex flex-wrap w-100">
            <Layout />
        </div>
    </StylesProvider>,
    container
)
