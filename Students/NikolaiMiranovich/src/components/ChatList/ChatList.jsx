import './style.css';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';   
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { TextField } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';

export default class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    }

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
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                        <ListItem>
                        <ListItemIcon><SendTwoToneIcon />
                        </ListItemIcon><ListItemText primary={ chats[chatId].title} />
                        </ListItem>
            </Link>));
        return (
                <List>
                    { chatElements }
                    <ListItem
                    key="Add new chat"
                    button
                    onclick={ this.handleAddChat }
                    style={ { height: '60px' } }
                    children= {<TextField
                        key="textField"
                        fullWidth
                        name="input"
                        helperText="Добавить новый чат"
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                    />}
                    />
                <ChatsDialog />
                </List>
        )
    }
}