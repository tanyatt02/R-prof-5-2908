import React from 'react';
import ReactDom from 'react-dom';

import './layout/css/styles.css';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Chat from "./components/Chat/Chat.jsx";

/*console.log(`User name : ${this.props.userName}`);*/



ReactDom.render (
    <StylesProvider>
        <Chat />
    </StylesProvider>,
    document.querySelector('.container')
)