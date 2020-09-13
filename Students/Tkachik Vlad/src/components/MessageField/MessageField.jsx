import React from 'react';

import './style.css'
import CallMadeIcon from '@material-ui/icons/CallMade';

import Message from '../Message/Message.jsx';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [
                {
                    sender: 'Darth Vader',
                    text: 'Hello',
                    isUser:false
                },
                {
                    sender: 'Darth Vader',
                    text: 'I am your father',
                    isUser:false
                },
                {
                    sender: 'Luke',
                    text: 'Hello',
                    isUser:false
                },
                {
                    sender: 'Luke',
                    text: 'Nooooooo',
                    isUser:false
                },
                {
                    sender: 'Luke',
                    text: 'Nooooooo',
                    isUser:false
                },
                {
                    sender: 'Luke',
                    text: 'Nooooooo',
                    isUser:false
                },
            ],
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {
                sender: this.props.userName,
                text: this.state.text,
                isUser: true
            }
            ],
        });
    }

    componentDidMount() {
        const container = document.querySelector('.messageField');
        container.scrollTop =  container.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const container = document.querySelector('.messageField');
        container.scrollTop =  container.scrollHeight;
    }

    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender, isUser } = msg;
            return <Message text = { text }
                            sender = { sender }
                            isUser = { isUser }
                            key = { index }/>
        });

        return (
            <div>
                <div className="messageField">
                    { contentArray }
                </div>
                <div className="controls d-flex">
                    <textarea
                        value = { this.state.text }
                        onChange = { this.handleChange }
                        onKeyUp={ this.handleChange }
                        placeholder= { "Введите сообщение..." }
                        autoFocus={ true }
                        cols = "30"
                        rows = "3"
                    />
                    <button className="send"
                            onClick = { this.sendMessage }>
                        <span>Send</span>
                        <CallMadeIcon />
                    </button>
                </div>
            </div>
        )
    }
}