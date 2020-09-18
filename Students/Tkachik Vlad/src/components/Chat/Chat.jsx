import React from 'react';


import ChatList from "../ChatList/ChatList.jsx";
import MessageField from '../MessageField/MessageField.jsx';
import Login from "../Login/Login.jsx";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            chatNames: ['Darth', 'Chub aka', 'Lea'],
        }
    }

    onChangeUserName = (arg) => {
        this.setState({ userName: arg })
    }

    render() {
        return (
        <div className="flex-wrapper">
            <div className="chat-list-box">
                <h3>Пользователь: { this.state.userName !== '' ? this.state.userName : 'Luke' }</h3>
                <h3>Чат: { this.state.chatNames[this.props.chatId - 1]}</h3>
                <h3>Выберите чат:</h3>
                <ChatList chatNames = { this.state.chatNames } />
            </div>
            <div className="message-field-box">
                <MessageField userName={ this.state.userName }
                              chatId = { this.props.chatId }/>
            </div>
            <Login getUserName={ this.onChangeUserName }
                   userName={ this.state.userName }/>
        </div>

    );
    }
}

