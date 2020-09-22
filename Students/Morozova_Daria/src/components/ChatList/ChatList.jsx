import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

import List from '@material-ui/core/List';
import Item from '../ChatListItem/ChatListItem.jsx';

// import Chat from '../Chat/Chat.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //         addFunc: this.addChat.bind(this),
    //     }
        
    // }
    

    addChat = (name) => {
        this.setState({
            chats: [...this.props.chats, {
                    name: name,
                    messages: '0 messages',
                }
            ],
        });
        console.log('chat was added to the list');
        
    }

    render() {
        
        // let { chats } = this.state;
        // let chatsArray = chats.map((chat, index) => {
        //     let { name, messages } = chat;
        //     return <Chat name = { name } messages = { messages } key = { index } id = { this.props.id + index } />
        // });

        let {chats} = this.props; 

        let linksArr = chats.map(ch =>  
            <Link to = {`/chat/${ch.id}/`}>
                <Item name={ch.title} />
            </Link>)

        return (
            // <Fragment>
            //     <div className="chatList d-flex flex-column">

            //         { chatsArray }
            //         <div>
            //             <ChatsDialog addFunction={ this.state.addFunc } />
            //         </div>
            //     </div>
            // </Fragment>
            <Fragment>
                <div className="ChatList d-flex flex-column">
                    <List>
                        { linksArr }
                    </List>
                    <div>
                        <ChatsDialog addFunction={ this.addChat }/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
 
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);