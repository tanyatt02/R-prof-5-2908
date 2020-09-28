import './style.css';
import React, { Component, Fragment } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage, loadMessages } from '../../store/actions/messageActions.js';

class MessageField extends React.Component {
    constructor(props) {
        super(props);
        // this.textInput = React.createRef();
        // this.msgField = React.createRef();
    }

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    state = {
        input: '',
    };

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
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

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        // this.textInput.current.focus();
        // this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
        fetch('/api/messages.json').then(body => body.json()).then(json => { json.forEach(msg => { this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);})
        });
        this.props.loadMessages();
    }

    componentDidUpdate(prevProps, prevState) {
        // this.textInput.current.focus();
        // this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
    }
    
    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { chatId, messages, chats } = this.props;

        let contentArray = chats[chatId].messageList.map((messageId) => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));

        return (
            <div className="layout-msg-field col-9 d-flex flex-column" key='contentArray'>
                <div className="message-field" ref={ this.msgField }>
                    { contentArray } 
                </div>
                <div className="controls d-flex pt-3 align-items-center align-self-end" >
                    <TextField
                        id="standard-basic"
                        // ref={ this.textInput }
                        fullWidth={ true }
                        name="input"
                        hintText="Message"
                        type="text"
                        value={ this.state.input }
                        onChange={ this.handleChange}
                        onKeyUp={ this.handleKeyUp }
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
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);