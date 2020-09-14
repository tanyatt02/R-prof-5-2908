import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MainField/MainField.jsx';
import ChatList from './components/ChatList/ChatList.jsx';
import MainField from './components/MainField/MainField.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <StylesProvider>
        <div className="d-flex w-100 justify-content-center">
            <div className="chatList-wrp">
                <ChatList />
            </div>
            <div className="messages-wrp">
                <MainField name="Rick"/>
                
            </div>
        </div>
    </StylesProvider>,
    container
)