import './style.css';
import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <Fragment>
                <Header chatId={ this.props.chatId } />
                <ChatList />
                <MessageField chatId={ this.props.chatId } />
            </Fragment>
        )
    }
}