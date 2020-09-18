import './style.css';
import React, { Component, Fragment } from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";
import AddIcon from 'material-ui/svg-icons/content/add';
import { TextField } from 'material-ui';
import { addChat } from '../../store/actions/chatActions';

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    }; 

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    };
 
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link 
                key={ chatId } 
                to={ `/chat/${chatId}` }>
                <ListItem
                    primaryText={ chats[chatId].title }
                    leftIcon={ <ContentSend /> } 
                />
            </Link>)
        );
        return (
            <div className="ChatList d-flex flex-column">
               <List className='list'>
                    { chatElements }
                    <ListItem
                        key="Add new chat"
                        leftIcon={ <AddIcon /> }
                        onClick={ this.handleAddChat }
                        style={ { height: '60px', width: '90%' } } 
                        children= {
                            <TextField
                                key="textField"
                                fullWidth
                                name="input"
                                hintText="Добавить новый чат"
                                style={ { fontSize: '16px', alignItems: 'top'} }
                                onChange={ this.handleChange }
                                value={ this.state.input }
                                onKeyUp={ this.handleKeyUp }
                            />
                        }
                    />
                </List> 
                <div>
                    <ChatsDialog />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
 