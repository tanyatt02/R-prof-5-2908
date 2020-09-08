import './style.css';
import React, { Component, Fragment } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <ChatList />
                <MessageField />
            </Fragment>
        )
    }
}