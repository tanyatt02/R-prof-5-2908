import React from 'react';
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Head from './components/Head/Head.jsx';
import MessageField from './components/MessageField/MessageField.jsx';


const container = document.getElementById('app')

ReactDom.render(
    <div>
        <Head/>
        <MessageField/>
    </div>,

    container
)