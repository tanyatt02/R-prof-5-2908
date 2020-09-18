import './style.css';
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { addChat } from '../../actions/chatActions';

class ChatList extends React.Component {

    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired
    };

    state = {
        input: ''
    }

    handleAddChat = () => {
        if (this.state.input.length > 0){
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13){
            this.handleAddChat();
        }
    }

    render() {
        const { chats } = this.props;

        const chatsElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem 
                    primaryText={ chats[chatId].title }
                    leftIcon={ <ContentSend /> } />
            </Link>));

        return (
                <List>
                    { chatsElements }
                    <ListItem
                        key="Add new chat"
                        leftIcon={ <AddIcon />}
                        onClick={ this.handleAddChat }
                        style={ { height: '60px' } }
                        children={ <TextField
                            key="textField"
                            fullWidth
                            name="input"
                            hintText="Добавить новый чат"
                            onChange={ this.handleChange }
                            value={ this.state.input }
                            onKeyUp={ this.handleKeyUp }
                        />}
                    />
                </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });
const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
