import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ContentSend from '@material-ui/icons/send';

export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    render() {
        return (
            <Fragment>
                <div className="chat-List d-flex flex-column">
                    <List style={ {display: 'flex', flexDirection: 'column', marginRight: 'auto' } }>
                        <Link className="chat-link" to="/chat/1/">МТС</Link>
                        <Link className="chat-link" to="/chat/2/">Ростелеком</Link>
                        <Link className="chat-link" to="/chat/3/">Сбербанк</Link>
                    </List>
                    <div>
                        <ChatsDialog />
                    </div>
                </div>
            </Fragment>
        )
    }
}