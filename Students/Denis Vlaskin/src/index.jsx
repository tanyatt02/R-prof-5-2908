import React from 'react';
import ReactDom, { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MessageField/MessageField.jsx';
import ChatList from './components/ChatList/ChatList.jsx';
import Header from './components/Header/Header.jsx';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const container = document.getElementById('app');
ReactDom.render(
    <StylesProvider>
        <div>
            <Header />
            <div className="d-flex w-100 justify-content-center">
                <div>
                    <ChatList />
                </div>
                <div>
                    <MessageField name="John Doe"/>
                </div>
            </div>
        </div>
    </StylesProvider>,
    container
)