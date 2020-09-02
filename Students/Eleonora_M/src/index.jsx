import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import './layout/css/styles.css';

import SendMessage from './components/SendMessage/SendMessage.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <div className = 'button_mes'>
        <SendMessage />
    </div>,
    container
)