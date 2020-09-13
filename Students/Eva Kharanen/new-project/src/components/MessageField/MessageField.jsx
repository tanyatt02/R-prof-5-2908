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
                    sender: 'актер Руперт Гринт',
                    text: 'роль Ро́нальд Би́лиус Уи́зли'
                },
                {
                    sender: 'актер Эмма Уотсон',
                    text: 'роль Гермио́на Джин Гре́йнджер'
                },
                {
                    sender: null,
                    text: 'выдра'
                },
                {
                    sender: null,
                    text: 'Лошадь'
                }
            ]
        }
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value });
        // this.state.text = evt.target.value // NO REACTIVITY
    }

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

        return (
            <div className="d-flex flex-column">
                <div>
                    { contentArray }
                </div>
                <div className="controls d-flex">
                    <input 
                        type="text" 
                        value = { this.state.text }
                        onChange = { this.handleChange }
                    />
                    <button onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}