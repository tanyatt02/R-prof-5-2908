import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';



export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.msgField = React.createRef();
        // this.state = {
        //     text: '',
        //     // sender: '',
        //     messages: [
        //         {
        //             sender: 'Darth Vader',
        //             text: 'Hello'
        //         },
        //         {
        //             sender: 'Darth Vader',
        //             text: 'I am your father'
        //         },
        //         {
        //             sender: 'Петя Васечкин',
        //             text: 'Hello'
        //         },
        //         {
        //             sender: 'Вася Петечкин',
        //             text: 'Nooooooo'
        //         }
        //     ]
        // }
    }

    static propTypes = {
        chatId: PropTypes.number.isRequired
    };

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: [3]},
        },

        messages: {
            1: { text: 'Hello', sender: 'Darth Vader' },
            2: { text: 'I am your father', sender: 'Darth Vader' },
            3: { text: "Nooooo", sender: 'Вася Петечкин' },
        },
        
        input: '',
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Отправка сообщений по клавише Enter
            this.sendMessage(this.state.input, 'Me')
        }
    };

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }

    sendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;
 
        if (input.length > 0 || sender === 'Bot') {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages, [messageId]: {text: message, sender: sender}}, 
                chats: {...chats, [chatId]: { ...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}},
            })
        }
        if (sender === 'Me') {
            this.setState({ input: '' })
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'Me' && 
            Object.values(messages)[Object.values(messages).length - 2].sender !== 'Me') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'Bot'), 1000);
        }
        this.textInput.current.focus();
        this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
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
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        let contentArray = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));

        return (
            <div className="layout-msg-field col-9" key='contentArray'>
                <div className="message-field" ref={ this.msgField }>
                    { contentArray }
                    <div className="controls d-flex pt-3 align-items-center align-self-end" key='textInput'>
                        <TextField
                            id="input"
                            ref={ this.textInput }
                            fullWidth={ true }
                            name="input"
                            hintText="Message"
                            type="text"
                            value={ this.state.input }
                            onChange={ this.handleChange}
                            onKeyUp={ (event) => this.handleKeyUp(event, messages) }
                        />
                        <FloatingActionButton
                            mini={true} style={{ boxShadow: 'none' }}
                            onClick={ () => this.sendMessage(this.state.input, 'Me') } >
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        )

    }
}