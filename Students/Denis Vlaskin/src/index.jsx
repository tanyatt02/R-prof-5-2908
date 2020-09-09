import React from 'react';
import ReactDom, { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MessageField/MessageField.jsx';

const container = document.getElementById('app');
ReactDom.render(
    <div>
        <MessageField name="John Doe"/>
    </div>,
    container
)