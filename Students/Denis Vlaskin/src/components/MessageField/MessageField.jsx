import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired
    };

    state = {
        input: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSendMessage = (message, sender) => {
        if ((this.state.input.length > 0) || (sender === 'bot')) {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'me') {
            this.setState({ input: '' })
        }
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'me');
        }
    };

    render() {
        const { chatId, messages, chats } = this.props;
        console.log(messages)
        const messageElements = Object.entries(messages).map(([key, msg]) => (
            <Message
                key={ key }
                text={ msg.text }
                sender={ msg.sender }
            />));
 
        return [
            <div key='messageElements' className="d-flex flex-column">
                { messageElements }
            </div>,
            <div key='textInput' style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />
                <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    };
}

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
