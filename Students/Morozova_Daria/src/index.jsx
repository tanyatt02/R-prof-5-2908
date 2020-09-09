import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Comp from './components/Comp/Comp.jsx';
import MessageField from './components/MessageField/MessageField.jsx';
import ChatList from './components/ChatList/ChatList.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <StylesProvider>
        <div className="d-flex w-100 justify-content-center">
            <div className="chatList-wrp">
                <ChatList />
            </div>
            <div className="messages-wrp">
                <MessageField name="Rick"/>
            </div>
        </div>
    </StylesProvider>,
    container
)