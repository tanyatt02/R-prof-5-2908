import React from 'react';
import ReactDom from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Layout from './components/Layout/Layout.jsx';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const container = document.getElementById('app');

ReactDom.render(
    <StylesProvider>
        <div>
            <div>
                <Layout />
            </div>
            {/* <div>
                <MessageField name="Magistr Yoda"/>
            </div> */}
        </div>
    </StylesProvider>,
    container
)