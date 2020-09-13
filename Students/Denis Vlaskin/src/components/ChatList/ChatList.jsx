import './style.css';
import React, { Component, Fragment } from 'react';
import Chat from '../Chat/Chat.jsx';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            addNewChat: this.addChat.bind(this),
        }
        
    }

    addChat = (name) => {
        this.setState({
            chats: [...this.state.chats, {
                    name: name,
                    messages: '0 messages',
                }
            ],
        });
    }

    componentDidUpdate() {
        this.render();
    }

    render() {
        let { chats } = this.state;
        let chatsArray = chats.map((chat, index) => {
            let { name, messages } = chat;
            return <Chat name = { name } messages = { messages } key = { index }/>
        });

        return (
            <Fragment>
                <div className="chatList d-flex flex-column">

                    { chatsArray }
                    <div>
                        <ChatsDialog addFunction={ this.state.addNewChat } />
                    </div>
                </div>
            </Fragment>
        )
    }
}