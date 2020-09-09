import './style.css';
import React, { Component } from 'react'

import Message from '../Message/Message.jsx'

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [
                {
                    sender: null,
                    text: 'who are u'
                },
                {
                    sender: 'Jim Morrison',
                    text: 'I am a Lizard King'
                },
                {
                    sender: null,
                    text: 'what u do'
                },
                {
                    sender: 'Jim Morrison',
                    text: 'I can do anything'
                }
            ]
        }
    }

    handleChange = event => {
        this.setState({ text: event.target.value });
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
        if (this.state.messages[this.state.messages.length - 1].sender !== 'bot') {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {
                        sender: 'bot',
                        text: 'внимательно читаю'
                    }]
                })
            }, 1200)
        }
    }

    //componentDidUpdate() {
    //    if (this.state.messages[this.state.messages.length-1].sender !== 'Bot') {
    //        this.setState({
    //            messages: [...this.state.messages, {
    //                    sender: 'Bot',
    //                    text: `${this.state.messages[this.state.messages.length-1].sender}, what do you want from me?`
    //                }
    //            ]
    //        })
    //    }
    //}

    render() {
        let { messages } = this.state;
        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index } />
        })

        return (
            <div className="messageField d-flex flex-column">
                <div className="messages__story">
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
    

//на будущее)
//messages: {
//    1: {
//        sender: 'Jim Morrison',
//        text: 'I am a Lizard King'
//    },
//    2: {
//        sender: 'Jim Morrison',
//        text: 'I can do anything'
//    },
//    3: {
//        sender: null,
//        text: 'who are u'
//    },
//    4: {
//        sender: null,
//        text: 'what u do'
//    }
//}

//let contentArray = Object.keys(messages).map(key => {
//    let { text, sender } = messages[key];
//    return <Message text = { text } sender = { sender } key = { key } />
//})