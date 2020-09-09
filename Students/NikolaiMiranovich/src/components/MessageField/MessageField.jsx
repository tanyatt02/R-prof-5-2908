import './style.css';
import React, { Component, Fragment } from 'react';

import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            input: '',
            messages: [
                {
                    sender: 'Magistr Yoda',
                    text: 'Hello'
                },
                {
                    sender: 'Magistr Yoda',
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
            ]
        }
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    // handleClick = (message) => {
    //     this.sendMessage(message)
    // }

    handleChange = evt => {
        if (evt.keyCode !==13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
            // this.state.text = evt.target.value // NO REACTIVITY
    }

    sendMessage = () => {
        this.setState({ 
            text:'',
            input: '',
            messages: [...this.state.messages, {
                    sender: this.props.name,
                    text: this.state.text
                } 
            ]
        });
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {

   
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, 'Не беси меня, я робот!' ] }), 1000);
        }
    }

    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });

        // let contentArray = Object.keys(messages).map(key => {
        //     let { text, sender } = messages[key];
        //     return <Message text = { text } sender = { sender } key = { key }/>
        // });

        return (
            <div className="d-flex flex-column">
                <div>
                    { contentArray }
                </div>
                <div className="controls d-flex">
                    <TextField 
                        ref={ this.textInput }
                        type="text"
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        value = { this.state.text }
                        onChange = { this.handleChange }
                        onKeyUp = { (evt) => this.handleChange(evt, this.state.input) }
                    />
                    <button onClick = { () => this.sendMessage(this.state.input) }><SendIcon /></button>
                </div>
            </div>
        )
    }
}