
import './style.css';
import React, { Component } from 'react';

import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [
                {
                    sender: 'Petr',
                    text: 'Hello'
                },
                {
                    sender: 'John',
                    text: 'I am your father'
                },
                {
                    sender: null,
                    text: 'Hello'
                },
                {
                    sender: 'Aristarx',
                    text: 'Nooooooo'
                }
            ]
        }
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value });
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {sender: this.state.sender, text: this.state.text}]
        });
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
            this.setState({
                messages: [...this.state.messages,  {sender: "Bot", text: "Please, stop bother me!.."}]
            }),
            1000);
        }
    }
 
    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text={text} sender={sender} key={index} />
        });

        return (
            <div className="d-flex flex-column">
                <div>
                    {contentArray}
                </div>
                <div className="controls d-flex">
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.sendMessage}>Send</button>
                </div>
            </div>
        )
    }
}
