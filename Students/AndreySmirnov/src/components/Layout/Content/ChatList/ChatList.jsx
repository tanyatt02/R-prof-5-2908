import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {NavLink} from "react-router-dom";

const ChatList = (props) => {

    const setChat = (chatId) => {
        props.setCurrentChat(chatId)
    }

    const chatsArray = Object.keys(props.chats)

    const chatItem = chatsArray.map(chatNumber => <NavLink to={chatNumber} key={chatNumber}>
        <ListItem
            onClick={() => setChat(chatNumber)}
            primaryText={props.chats[chatNumber].title}
            rightIcon={<CommunicationChatBubble/>}
        />
    </NavLink>)

    /* Не работает, в браузере дублируется NavLink to={chatNumber}

    const chatItem = chatsArray.map(chatNumber => <NavLink to={`chat/${chatNumber}`} key={chatNumber}>
        <ListItem
            onClick={()=>setChat(chatNumber)}
            primaryText={props.chats[chatNumber].title}
            rightIcon={<CommunicationChatBubble/>}
        />
    </NavLink>)
     */


    return (
        <div>
            <List>
                <Subheader>Recent chats</Subheader>
                {chatItem}
            </List>
            <div className='addChat'>
                <div>Добавить чат</div>
                <Fab onClick={()=>props.addChat()} color="primary" aria-label="add" style={{width: 30, height: 20}}>
                    <AddIcon/>
                </Fab>
            </div>
        </div>)
}

export default ChatList;