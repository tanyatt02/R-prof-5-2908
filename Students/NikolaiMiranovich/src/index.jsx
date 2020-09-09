import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MessageField/MessageField.jsx';

import Layout from './components/Layout/Layout.jsx';

import ChatList from './components/ChatList/ChatList.jsx';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const container = document.getElementById('app');

ReactDom.render(
    <StylesProvider>
        <div className="d-flex w-100 justify-content-center">
            <div>
                <ChatList />
            </div>
            <div>
                <MessageField name="Magistr Yoda"/>
            </div>
        </div>
    </StylesProvider>,
    container
)