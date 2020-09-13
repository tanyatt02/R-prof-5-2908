import './style.css';
import React, { Component, Fragment } from 'react';

import { TextField } from '@material-ui/core';
import Message from '../Message/Message.jsx';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            messages: [
                {
                    sender: 'bot',
                    text: 'Hello'
                },
                {
                    sender: 'bot',
                    text: 'I am your father'
                },
                {
                    sender: null,
                    text: 'Hello'
                },
                {
                    sender: null,
                    text: 'Nooooooo'
                }
            ],
            input: '',
        }
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    
    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp = (evt, message) => {
        if (evt.keyCode ===13) {
            this.sendMessage(message)
        } 
    }

    sendMessage = (message) => {
        this.setState({ 
            messages: [...this.state.messages, {
                    sender: 'me',
                    text: message
                } 
            ],
            input: '',
        });
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length -1].sender === 'me') {
            setTimeout(() =>
                this.setState(
                    { messages: [ ...this.state.messages, {text: 'Не беси меня, я робот!', sender: 'bot'} ] }), 1000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />
        ));
        // let { messages } = this.state;

        // let contentArray = messages.map((msg, index) => {
        //     let { text, sender } = msg;
        //     return <Message text = { text } sender = { sender } key = { index }/>
        // });

        // let contentArray = Object.keys(messages).map(key => {
        //     let { text, sender } = messages[key];
        //     return <Message text = { text } sender = { sender } key = { key }/>
        // });

        return (
            <div className="layout">
                <div className="message-field">
                    { messageElements }
                </div>
                <div className="button-wrap">
                    <TextField 
                        ref={ this.textInput }
                        // type="text"
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        value = { this.state.input }
                        onChange = { this.handleChange }
                        onKeyUp = { (evt) => this.handleKeyUp(evt, this.state.input) }
                    />
                    <FloatingActionButton onClick = { () => this.sendMessage(this.state.input,) }></FloatingActionButton>
                </div>
            </div>
        )
    }
}