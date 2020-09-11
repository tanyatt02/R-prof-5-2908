import './style.css';
import PropTypes from "prop-types";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.msgField = React.createRef();
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
            1: { text: "Баланс Вашего счета 5.35 руб.", sender: 'Bot' },
            2: { text: "Доступ к интернету заблокирован", sender: 'Bot' },
            3: { text: "Поздравляю! Вам одобрен кредит!", sender: 'Bot' },
        },
        
        input: '',
    };

    componentDidMount() {
        this.textInput.current.children[0].firstChild.focus();
        this.textInput.current.children[0].firstChild.style.color = '#787878';
    }    

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'Me' && 
            Object.values(messages)[Object.values(messages).length - 2].sender !== 'Me') {
            setTimeout(() =>
                this.handleSendMessage('Не приставай ко мне, я робот!', 'Bot'), 1000);
        }
        this.textInput.current.children[0].firstChild.focus();
        this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
    }
 
    handleSendMessage = (message, sender) => {
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
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'Me')
        }
    };
 
    render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;
 
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
        return [
            <div className="layout">
                <div key='messageElements' className="MsgField" ref={ this.msgField }>
                    { messageElements }
                </div>
                <div key='textInput' className="controls d-flex">
                    <TextField
                        name="input"
                        fullWidth={ true }
                        placeholder="Введите сообщение"
                        type="text"
                        ref={ this.textInput }
                        value={ this.state.input }
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <button className="sendBtn" style={ { outline: 'none' } } onClick={ () => this.handleSendMessage(this.state.input, 'Me') }>
                        <SendIcon style={ { fontSize: '1.4em' } } />
                    </button>
                </div>
            </div>
        ]
    }
  

    // constructor(props) {
    //     super(props);
    //     this.textInput = React.createRef();
    //     this.state = {
    //         text: '',
    //         messages: [
    //             {
    //                 sender: 'Bot',
    //                 text: 'Привет!'
    //             },
    //             {
    //                 sender: 'Bot',
    //                 text: 'Как дела?'
    //             }
    //         ]
    //     }
    // }

    // componentDidMount() {
    //     this.textInput.current.children[0].firstChild.focus();
    //     this.textInput.current.children[0].firstChild.style.color = '#787878';
    // }

    // handleChange = evt => {
    //     if (evt.keyCode !== 13) {
    //         this.setState({ text: evt.target.value, sender: "Me" });
    //     } else {
    //         this.sendMessage();
    //     }
    // }

    // sendMessage = () => {
    //     this.setState({
    //         text: '',
    //         messages: [...this.state.messages, { sender: this.state.sender, text: this.state.text }]
    //     });
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.messages.length !== prevState.messages.length && 
    //         this.state.messages[this.state.messages.length - 1].sender === 'Me' && 
    //         this.state.messages[this.state.messages.length - 2].sender !== 'Me' &&
    //         this.state.messages[this.state.messages.length - 1].text !== '')  {
    //         setTimeout(() =>
    //         this.setState({
    //             messages: [...this.state.messages, {sender: "Bot", text: "Не приставай ко мне, я робот!"}]
    //         }),
    //         1000);
    //     }
    //     this.textInput.current.children[0].firstChild.focus();
    // }
 
    // render() {
    //     let { messages } = this.state;
    //     let contentArray = messages.map((msg, index) => {
    //         let { text, sender } = msg;
    //         return <Message text={ text } sender={ sender } key={ index } />
    //     });

    //     return (
    //         <div className="layout">
    //             <div className="MsgField">
    //                 {contentArray}
    //             </div>
    //             <div className="controls d-flex">
    //                 <TextField
    //                     name="input"
    //                     fullWidth={ true }
    //                     placeholder="Введите сообщение"
    //                     type="text"
    //                     ref={ this.textInput }
    //                     value={ this.state.text } 
    //                     onChange={ this.handleChange } 
    //                     onKeyUp={ this.handleChange } 
    //                 />
    //                 <button className="sendBtn" style={ { outline: 'none' } } onClick={ this.sendMessage }>
    //                     <SendIcon style={ { fontSize: '1.4em' } } />
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }
}
