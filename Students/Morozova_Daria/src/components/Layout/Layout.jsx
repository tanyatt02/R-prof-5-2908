import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import MainField from '../MainField/MainField.jsx';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

export default class Layout extends Component {

    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }

    render() {

        return (
            <Fragment >
                <Header chatId = { this.props.chatId } />
                <StylesProvider>                
                    <div className="d-flex w-100 justify-content-center">
                        <div className="chatList-wrp">
                            <ChatList id = { this.props.chatId } />
                        </div>
                        <div className="messages-wrp">
                            <MainField name="Rick"/>
                            
                        </div>
                    </div>
                </StylesProvider>
            </Fragment>
        )
    }
}
