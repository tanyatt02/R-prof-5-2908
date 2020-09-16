import './style.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Chat from '../Chat/Chat.jsx';
import ContentSend from 'material-ui/svg-icons/content/send';

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
                    <List>
                        <Link to="/chat/1/">
                            <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/2/">
                            <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/3/">
                            <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
                        </Link>
                    </List>

                    { chatsArray }
                    <div>
                        <ChatsDialog addFunction={ this.state.addNewChat } />
                    </div>
                </div>
            </Fragment>
        )
    }
}