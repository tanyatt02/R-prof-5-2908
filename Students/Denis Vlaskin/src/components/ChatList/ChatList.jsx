import './style.css';
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { push } from 'connected-react-router';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { addChat } from '../../store/actions/chatActions';

class ChatList extends React.Component {

    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
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

    handleNavigate = (link) => {
        this.props.push(link);
    }

    render() {
        const { chats } = this.props;

        const chatsElements = Object.keys(chats).map(chatId => (
            <ListItem 
                key={ chatId }
                primaryText={ chats[chatId].title }
                leftIcon={ <ContentSend /> }
                onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
            /> ));
  
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
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
