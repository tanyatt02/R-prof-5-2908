import './style.css';

import React from 'react';
import { Component } from 'react';
import InputComp from '../CompInputTest/comp.jsx';
import FieldComp from '../CompFieldTest/comp.jsx';

export default class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    sender: '12345',
                    text: 'Hello'
                },
                {
                    sender: '12345',
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

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, {
                    sender: this.props.name,
                    text: text
                } 
            ]
        });
    }

    render() {
        return (
            <div className="d-flex flex-column">
               <FieldComp messages = { this.state.messages } />
               <InputComp send = { this.sendMessage } />
            </div>
        )
    }
}
