import './style.css';
import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../Store/Actions/messageActions.js';

class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    sendMessage = (message, sender) => {
        const { chatId } = this.props;
        const { messages } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},
        });
        this.props.sendMessage(messageId, message, sender, chatId);
    };

    render() {
        return (
            <Fragment>
                <Header chatId={ this.props.chatId } />
                <ChatList />
                <MessageField 
                    chatId={ this.props.chatId } 
                    messages={ this.props.messages }
                    sendMessage={ this.sendMessage }
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);