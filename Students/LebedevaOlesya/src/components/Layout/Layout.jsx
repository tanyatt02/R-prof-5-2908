import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
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

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1,4]},
            2: {title: 'Чат 2', messageList: [2,5]},
            3: {title: 'Чат 3', messageList: [3,6]},
        },

        messages: {
            1: { text: 'Сообщение чата №1', sender: 'Сергей Сергеев' },
            2: { text: 'Сообщение чата №2', sender: 'Маша Машина' },
            3: { text: "Сообщение чата №3", sender: 'Вася Петечкин' },
            4: { text: 'Сообщение чата №1', sender: 'Петя Васечкин' },
            5: { text: 'Сообщение чата №2', sender: 'Иван Иванов' },
            6: { text: "Сообщение чата №3", sender: 'Катя Катина' },
        },
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'Me' && 
            Object.values(messages)[Object.values(messages).length - 2].sender !== 'Me') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'Bot'), 1000);
        }
    }

    sendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;
 
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages, [messageId]: {text: message, sender: sender}}, 
            chats: {...chats, [chatId]: { ...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}},
        })
    };

    addChat = (title) => {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;
        this.setState({
            chats: {...chats,
                [chatId]: {title: title, messageList: []}},
        })
    }; 

    render() {
        return (
            <div className="Layout d-flex row">
                <Header chatId={this.props.chatId} />
                <ChatList 
                    chats={ this.state.chats } 
                    addChat={ this.addChat }
                />
                <MessageField 
                    name="Me" 
                    chatId={ this.props.chatId }
                    chats={ this.state.chats }
                    messages={ this.state.messages }
                    sendMessage={ this.sendMessage }
                />
            </div>
        )
    }
}