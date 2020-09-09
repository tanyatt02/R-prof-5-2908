import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Comp from './components/comp/comp.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <Comp name="Magistr Yoda"/>
    </div>,
    container
)