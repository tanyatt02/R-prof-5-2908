import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import MessageField from "./components/MessageField/MessageField.jsx";

ReactDom.render (
    <MessageField />,
    document.querySelector('.container')
)
