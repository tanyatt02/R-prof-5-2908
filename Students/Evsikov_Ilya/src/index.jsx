import React from 'react';
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Head from './components/Head/Head.jsx';
import MessageField from './components/MessageField/MessageField.jsx';
import ChatList from "./components/ChatList/ChatList.jsx";

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';


const container = document.getElementById('app')

ReactDom.render(
    <StylesProvider>
        <div className="main">
            <Head/>
            <div className="d-flex justify-content-around">
                <ChatList/>
                <MessageField/>
            </div>
        </div>
    </StylesProvider>,

    container
)