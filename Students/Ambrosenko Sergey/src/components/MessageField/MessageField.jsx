import './style.css';
import React, { Component } from 'react';
import { TextField } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/send';
import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '',
            messages: [
                {
                    sender: 'Bot',
                    text: 'Привет!'
                },
                {
                    sender: 'Bot',
                    text: 'Как дела?'
                }
            ]
        }
    }

    componentDidMount() {
        this.textInput.current.children[0].firstChild.focus();
        this.textInput.current.children[0].firstChild.style.color = '#787878';
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value, sender: "Me" });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, { sender: this.state.sender, text: this.state.text }]
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.messages.length !== prevState.messages.length && 
            this.state.messages[this.state.messages.length - 1].sender === 'Me' && 
            this.state.messages[this.state.messages.length - 2].sender !== 'Me' &&
            this.state.messages[this.state.messages.length - 1].text !== '')  {
            setTimeout(() =>
            this.setState({
                messages: [...this.state.messages, {sender: "Bot", text: "Не приставай ко мне, я робот!"}]
            }),
            1000);
        }
        this.textInput.current.children[0].firstChild.focus();
    }
 
    render() {
        let { messages } = this.state;
        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text={ text } sender={ sender } key={ index } />
        });

        return (
            <div className="layout">
                <div className="MsgField">
                    {contentArray}
                </div>
                <div className="controls d-flex">
                    <TextField
                        name="input"
                        fullWidth={ true }
                        placeholder="Введите сообщение"
                        type="text"
                        ref={ this.textInput }
                        value={ this.state.text } 
                        onChange={ this.handleChange } 
                        onKeyUp={ this.handleChange } 
                    />
                    <button className="sendBtn" style={ { outline: 'none' } } onClick={ this.sendMessage }>
                        <SendIcon style={ { fontSize: '1.4em' } } />
                    </button>
                </div>
            </div>
        )
    }
}
