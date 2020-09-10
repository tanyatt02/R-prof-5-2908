import React from 'react';

import Message from '../Message/Message.jsx';

export default class MessageField extends React.Component {
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
                },
            ],
            commonMessage : {
                sender: 'DARTH VADER',
                text: 'COME TO ME',
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.text !== this.state.text) {
            let { messages } = this.state;

            this.state.messages.push(this.state.commonMessage);
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

    handleChange = evt => {
        this.setState({ text: evt.target.value });
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {
                sender: this.props.name,
                text: this.state.text
            }
            ],
        });
        console.log(this.state.text);
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