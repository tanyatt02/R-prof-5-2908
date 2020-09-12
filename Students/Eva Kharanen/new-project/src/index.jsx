import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/style.css';

import MessageField from "./components/MessageField/MessageField.jsx";

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <MessageField name="hallo react!!!2222"/>
    </div>,
    container
)
