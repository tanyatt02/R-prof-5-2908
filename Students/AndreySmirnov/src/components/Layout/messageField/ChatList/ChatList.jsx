import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ChatList = () => (
    <div>
        <List>
            <Subheader>Recent chats</Subheader>
            <ListItem
                primaryText="Brendan Lim"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Eric Hoffman"

                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Grace Ng"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Kerem Suer"
                rightIcon={<CommunicationChatBubble />}
            />
        </List>
    </div>
);

export default ChatList;