import React from 'react';
import Message from "./Message/Message.jsx";


class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: []
        }
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value });
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {
                sender: 'Andrey',
                text: this.state.text
            }
            ]
        });
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                    this.setState(
                        { messages: [ ...this.state.messages, {
                                sender: null,
                                text: null
                            } ] }),
                1000);
        }
    }


    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });

        return (
            <div className='wrapper'>
                <div className='messages'>
                    { contentArray }
                </div>
                <div className='addMessage'>
                    <textarea
                        value = { this.state.text }
                        onChange = { this.handleChange }
                    />
                    <button onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}

export default MessageField