import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '',
            sender: '',
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
                    sender: 'Петя Васечкин',
                    text: 'Hello'
                },
                {
                    sender: 'Вася Петечкин',
                    text: 'Nooooooo'
                }
            ]
        }
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value });
        // this.state.text = evt.target.value // NO REACTIVITY
    }

    handleSender = evt => {
        this.setState({ sender: evt.target.value });
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Отправка сообщений по клавише Enter
            this.sendMessage(message)
        }
     };
    
    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }

    sendMessage = () => {
        this.setState({
            text: '',
            sender: '',
            messages: [...this.state.messages, {
                sender: this.state.sender,
                text: this.state.text
            }
            ]
        });
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'Me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
        }
    }
 
    //     //Метод для ответа Бота
    // componentDidUpdate() {
    //     if (this.state.messages.length % 2 === 1) {
    //         setTimeout(() => {
    //             this.setState({
    //                 messages: [...this.state.messages, {
    //                     sender: 'bot',
    //                     text: `${this.state.messages[this.state.messages.length-1].sender}, I am a Bot and I know it!`
    //                 }]
    //             })
    //         }, 1000)
    //     }
    // }

    render() {
        let { messages } = this.state;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text={text} sender={sender} key={index} />
        });

        return (
            <div className="layout">
                <div className="message-field">
                    {contentArray}
                </div>
                <div className="d-flex flex-column">
                    {/* <TextField
                        ref={ this.textInput }
                        name="input"
                        value="Me"
                        fullWidth={ true }
                        hintText="Sender's Name"
                        type="text"
                        value={this.state.sender}
                        onChange={this.handleSender}
                    /> */}
                    <TextField
                        id="standard-basic"
                        ref={ this.textInput }
                        name="input"
                        hintText="Message"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyUp={ (event) => this.handleKeyUp(event, messages) }
                    /> 
                    <FloatingActionButton mini={true} style={{ boxShadow: 'none' }} onClick={this.sendMessage}><SendIcon /></FloatingActionButton>
                </div>
            </div>
        )
    }
}