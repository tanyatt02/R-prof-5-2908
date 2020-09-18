import React from 'react';
import {connect} from "react-redux";
import {addChat, onTextChange, sendMessage, setCurrentChat} from "../../../store/actions/messagesAction";
import ChatList from "./ChatList/ChatList.jsx";
import NewMessage from "./MessageField/NewMessage.jsx";
import Messages from "./MessageField/Messages.jsx";

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.props.onTextChange(evt.target.value);
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.props.addMessage(this.props.currentUser)
    }

    render() {
        return (
            <div className="content">
                <div className="content__chatList">
                    <ChatList chats={this.props.messages} setCurrentChat={this.props.setCurrentChat} currentChat={this.props.currentChat} addChat={this.props.addChat}/>
                </div>
                <div className='content__messageField'>
                    <Messages chatId={this.props.chatId} messages={this.props.messages}/>
                    <NewMessage newMessageText={this.props.newMessageText} handleChange={this.handleChange}
                                sendMessage={this.sendMessage}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.chats,
        newMessageText: state.messages.newMessageText,
        currentChat: state.messages.currentChat,
        currentUser: state.logInfo.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => {
            dispatch(onTextChange(text));
        },
        addMessage: (sender) => {
            dispatch(sendMessage(sender));
        },
        addChat:() => {
            dispatch(addChat())
        },
        setCurrentChat: (chatID) => {
            dispatch(setCurrentChat(chatID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)