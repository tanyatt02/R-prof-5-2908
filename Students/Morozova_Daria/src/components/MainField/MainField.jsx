import './style.css';
import React, { Component } from 'react';

import InputComp from '../Input/Input.jsx';
import FieldComp from '../MessageField/MessageField.jsx';

export default class MainField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    sender: 'Vasya',
                    text: 'Ciao!',
                },
                {
                    sender: 'Petr',
                    text: 'Hello!',
                },
                {
                    sender: null,
                    text: 'Privet!',
                },
                {
                    sender: 'Ann',
                    text: 'Guten tag!',
                }
            ],
            sendFunc: this.sendMessage.bind(this),
        }
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, 
                {
                    sender: '',
                    text: text
                }
            ]
        })
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.messages[this.state.messages.length-1].sender !== 'Bot') {
                this.setState({
                    messages: [...this.state.messages, 
                        {
                            sender: 'Bot',
                            text: `${this.state.messages[this.state.messages.length-1].sender !== '' ? this.state.messages[this.state.messages.length-1].sender : 'Anonim'}, what do you want from me?`
                        }
                    ]
                })
            }
        }, 600)        
    }

    render() {        
        return (
            <div className="d-flex flex-column layout">
                <FieldComp messages = { this.state.messages } />
                <InputComp send = { this.sendMessage } />
            </div>     
        )
    }
}
