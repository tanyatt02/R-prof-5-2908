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

    state = {
        messages: {
            1: { text: "Баланс Вашего счета 5.35 руб.", sender: 'Bot' },
            2: { text: "Доступ к интернету заблокирован", sender: 'Bot' },
            3: { text: "Поздравляю! Вам одобрен кредит!", sender: 'Bot' },
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
        const { messages } = this.state;
        const { chatId } = this.props;
 
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
                    messages={ this.state.messages }
                    sendMessage={ this.sendMessage }
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);