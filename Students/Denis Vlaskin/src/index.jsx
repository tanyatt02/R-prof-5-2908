import React from 'react';
import ReactDom, { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Comp from './components/comp/comp.jsx';

const container = document.getElementById('app');
ReactDom.render(
    <div>
        <Comp name="John Doe"/>
    </div>,
    container
)