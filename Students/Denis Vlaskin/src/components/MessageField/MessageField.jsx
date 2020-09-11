import './style.css';
import React, { Component, Fragment } from 'react';

import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            botFlag: false,
            text: '',
            messages: [
                {
                    sender: 'Darth Vader',
                    text: 'Hello'
                },
                {
                    sender: 'Darth Vader',
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

    handleChange = evt => {
        if (evt.keyCode == 13)
            this.sendMessage();
        else
            this.setState({ text: evt.target.value });
    }

    sendMessage = () => {
        this.setState({ 
            botFlag: false,
            text: '',
            messages: [...this.state.messages, {
                    sender: this.props.name,
                    text: this.state.text
                } 
            ]
        });
    }

    componentDidUpdate() {
        if (this.state.botFlag) {
            this.state.botFlag = false;
            return;
        } else if (this.state.text == '') {
            setTimeout(() => {
                        this.setState({ 
                        botFlag: true,
                        text: '',
                        messages: [...this.state.messages, {
                                sender: 'Chatbot',
                                text: 'Я робот!'
                            } 
                        ]
                    })
                }
                , 1000);
            }
       }

    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });

        return (
            <div className="d-flex flex-column">
                <div class="d-flex flex-column">
                    { contentArray }
                </div>
                <div className="controls d-flex">
                    <input 
                        type="text" 
                        value = { this.state.text }
                        onChange = { this.handleChange }
                        onKeyUp = { this.handleChange }
                    />
                    <button onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}