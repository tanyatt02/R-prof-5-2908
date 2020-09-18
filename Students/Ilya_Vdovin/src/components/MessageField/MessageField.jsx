import './style.css';
import React, { Component, Fragment } from 'react';

import Message from '../Message/Message.jsx';
import { render } from 'react-dom';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            // messages: {
            //     1: {
            //         sender: 'Darth Vader',
            //         text: 'Hello'
            //     },
            //     2: {
            //         sender: 'Darth Vader',
            //         text: 'I am your father'
            //     },
            //     3: {
            //         sender: null,
            //         text: 'Hello'
            //     },
            //     4: {
            //         sender: null,
            //         text: 'Nooooooo'
            //     }
            // }
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }}

    sendMessage = () => {
        this.setState({ 
            text: '',
            messages: [...this.state.messages, {
                    sender: this.props.name,
                    text: this.state.text
                } 
            ]
        });
    }

    componentDidUpdate(){
        if (this.state.messages.length % 2 === 1 && this.state.text === "") {  
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, '' ] }),
            1000);
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
                    <input 
                        className="max-width 500 inputField"
                        type="text"
                        placeholder="Answer something here" 
                        value = { this.state.text }
                        onKeyUp = { this.handleChange }
                        onChange = { this.handleChange }
                    />
                    <button className="inputButton" onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}