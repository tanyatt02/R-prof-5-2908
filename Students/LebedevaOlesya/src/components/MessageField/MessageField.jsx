import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage } from '../../store/actions/messageActions.js';
import { loadChats } from '../../store/actions/chatActions.js';
import { loadMessages } from '../../store/actions/messageActions.js';

class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        loadChats: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(id, message, sender, this.props.chatId);
        }
        if (sender === 'Me') {
            this.setState({ input: '' });
        }
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Отправка сообщений по клавише Enter
            this.handleSendMessage(this.state.input, 'Me');
        }
    };

    componentDidMount() {
        // this.textInput.current.focus();
        // this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
        fetch('../../srver/db/messages/messages.json').then(body => body.json()).then(json => { json.forEach(msg => { this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);})
        });
        this.props.loadMessages();
        this.props.loadChats();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // this.textInput.current.focus();
    //     // this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
    // }
    
    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }

        // let { messages } = this.props;

        // let contentArray = Object.keys(messages).map((msg, index) => {
        //     let { text, sender } = msg;
        //     return <Message text = { text } sender = { sender } key = { index }/>
        // });
        const { chatId, messages, chats } = this.props;

        const contentArray = chats[chatId].messageList.map((messageId) => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));

        return (
            <div className="layout-msg-field col-9 d-flex flex-column" key='contentArray'>
                <div className="message-field">
                    { contentArray } 
                </div>
                <div className="controls d-flex pt-3 align-items-center align-self-end" >
                    <TextField
                        id="standard-basic"
                        // ref={ this.textInput }
                        fullWidth={ true }
                        name="input"
                        autoFocus
                        hintText="Message"
                        type="text"
                        value={ this.state.input }
                        onChange={ this.handleChange}
                        // onKeyUp={ this.handleKeyUp }
                        onKeyUp = { (event) => this.handleKeyUp(event) }
                    />
                    <FloatingActionButton
                        mini={true} style={{ boxShadow: 'none' }}
                        onClick={ () => this.handleSendMessage(this.state.input, 'Me') } >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: chatReducer.messages,
    isLoading: messageReducer.isLoading,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats, loadMessages }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);