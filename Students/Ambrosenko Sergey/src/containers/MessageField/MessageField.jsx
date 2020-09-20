import './style.css';
import PropTypes from "prop-types";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
import Message from '../../components/Message/Message.jsx';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessageField extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.msgField = React.createRef();
    };

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'Bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'Me') {
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { 
            this.handleSendMessage(this.state.input, 'Me');
        }
    };

    componentDidMount() {
        this.textInput.current.children[0].firstChild.focus();
        this.textInput.current.children[0].firstChild.style.color = '#787878';
    }

    componentDidUpdate() {
        this.textInput.current.children[0].firstChild.focus();
        this.msgField.current.scrollTop = this.msgField.current.scrollHeight;
    }
 
    render() {
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={ messageId }
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
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
