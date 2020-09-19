import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../../components/ChatsDialog/ChatsDialog.jsx';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from '../../Store/Actions/chatActions.js';

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    render() {
        const { chats, addChat } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link className="chat-link" key={ chatId } to={ `/chat/${chatId}` } >
                { `${chats[chatId].title}` }
            </Link>));
        return (
            <Fragment>
                <div className="chat-List d-flex flex-column">
                    <List style={ {display: 'flex', flexDirection: 'column', marginRight: 'auto' } } >
                        { chatElements }
                    </List>
                    <div>
                        <ChatsDialog chats={ chats } addChat = {chatName => { addChat(chatName) }} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);