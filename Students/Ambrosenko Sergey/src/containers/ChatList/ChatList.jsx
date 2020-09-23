import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../../components/ChatsDialog/ChatsDialog.jsx';
import List from '@material-ui/core/List';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from '../../Store/Actions/chatActions.js';
import { push } from 'connected-react-router';

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };
    
    handleNavigate = (link) => {
        this.props.push(link);
    };

    render() {
        const { chats, addChat, chatLink } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <span className="chat-link" key={ chatId } onClick={ () => this.handleNavigate( `/chat/${chatId}` ) } >
                { `${chats[chatId].title}` }
            </span>));
        return (
            <Fragment>
                <div className="chat-List d-flex flex-column">
                    <List ref={ chatLink } style={ {display: 'flex', flexDirection: 'column', marginRight: 'auto' } } >
                        { chatElements }
                    </List>
                    <div>
                        <ChatsDialog chats={ chats } addChat = { chatName => { addChat(chatName) } } />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    chatLink: chatReducer.chatLink,
});
 
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);