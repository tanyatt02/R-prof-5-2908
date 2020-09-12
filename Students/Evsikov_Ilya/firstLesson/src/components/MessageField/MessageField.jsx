import './css/style.css';
import React, {Component, Fragment} from 'react';

import Message from '../Message/Message.jsx';

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
                    sender: 'You',
                    text: 'Hello'
                },
                {
                    sender: 'You',
                    text: 'Nooooooo'
                }
            ]
        }
    }

    handleChange = evt => {
        this.setState({text: evt.target.value});
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
        if (this.state.messages[this.state.messages.length - 1].sender !== 'Darth Vader') {
            this.setState({
                messages: [...this.state.messages, {
                    sender: 'Darth Vader',
                    text: "I'm your Father"
                }
                ]
            })
        }
    }

    render() {
        let {messages} = this.state;

        let contentArray = messages.map((msg, index) => {
            let {text, sender} = msg;
            return <Message text={text} sender={sender} key={index}/>
        });

        return (
            <div className="d-flex flex-column align-items-center msgField">
                <div className="chatField">
                    {contentArray}
                </div>
                <div className="controls d-flex">
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.sendMessage}><i className="far fa-paper-plane"></i></button>
                </div>
            </div>
        )
    }
}
    