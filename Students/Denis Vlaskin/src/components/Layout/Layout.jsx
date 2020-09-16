import './style.css';
import React from 'react';
import PropTypes from 'prop-types';

import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: 1
    }

    render() {
        return (
                <div className="layout">
                    <Header chatId={ this.props.chatId } />
                    <div className="d-flex w-100 justify-content-center layout-canvas">
                        <div className="layout-left-side">
                            <ChatList />
                        </div>
                        <div className="layout-right-side">
                            <MessageField chatId={ this.props.chatId } />
                        </div>
                    </div>
                </div>
        )
    }
}