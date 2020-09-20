import './style.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Fab, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    }
        

        handleSendMessage = (message, sender) => {
            if (this.state.input.length > 0 || sender === 'bot') {
                this.props.sendMessage(message, sender);
            }
            if (sender === 'me') {
                this.setState({ input: '' });
    }
}

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'me')
        } 
    }

    render() {
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
            key={ messageId }
            text={ messages[messageId].text }
            sender={ messages[messageId].sender }
        />))

        return [
                <div key='messageElements' className="message-field">
                    { messageElements }
                </div>,
                <div key='textInput' className="button-wrap">
                    <TextField 
                        name="input"
                        autoFocus={ true }
                        fullWidth={ true }
                        helperText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        value = { this.state.input }
                        onChange = { this.handleChange }
                        onKeyUp = { this.handleKeyUp }
                    />
                    <Fab color="secondary" onClick = { () => this.handleSendMessage(this.state.input, 'me') }><SendIcon /></Fab>
                </div>
        ]
    }
}