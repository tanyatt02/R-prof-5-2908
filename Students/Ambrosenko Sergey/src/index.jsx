import React from 'react';
import ReactDom from 'react-dom';
import MessageComp from './components/comp/MessageComp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

const container = document.getElementById('app');

ReactDom.render (
    <MessageComp />,
    container
)