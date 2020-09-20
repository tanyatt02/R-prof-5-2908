import React from 'react';
import ReactDom from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Router from './router.jsx';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    container
)