<<<<<<< HEAD
import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import { makeStyles } from '@material-ui/core/styles';



export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '',
            // sender: '',
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
            // sender: '',
            messages: [...this.state.messages, {
                sender: this.props.name,
                text: this.state.text
            }]
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].sender === 'Me') {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'Bot' }]
                }),
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
            <div className="layout-msg-field col-9">
                <div className="message-field">
                    {contentArray}
                    <div className="controls d-flex pt-3 align-items-center align-self-end">
                        <TextField
                            id="input"
                            ref={this.textInput}
                            name="input"
                            hintText="Message"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                            onKeyUp={(event) => this.handleKeyUp(event, messages)}
                        />
                        <FloatingActionButton
                            mini={true} style={{ boxShadow: 'none' }}
                            onClick={this.sendMessage} >
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        )

    }
=======
import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import { makeStyles } from '@material-ui/core/styles';



export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '',
            // sender: '',
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
            // sender: '',
            messages: [...this.state.messages, {
                sender: this.props.name,
                text: this.state.text
            }]
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].sender === 'Me') {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'Bot' }]
                }),
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
            <div className="layout-msg-field col-9">
                <div className="message-field">
                    {contentArray}
                    <div className="controls d-flex pt-3 align-items-center align-self-end">
                        <TextField
                            id="input"
                            ref={this.textInput}
                            name="input"
                            hintText="Message"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                            onKeyUp={(event) => this.handleKeyUp(event, messages)}
                        />
                        <FloatingActionButton
                            mini={true} style={{ boxShadow: 'none' }}
                            onClick={this.sendMessage} >
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        )

    }
>>>>>>> c1f317307805d71d7423a0b5b7291b1f4987a096
}