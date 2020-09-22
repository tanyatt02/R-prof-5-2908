import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Item from '../ChatListItem/ChatListItem.jsx';

export default class ChatList extends Component {
    render() {
        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">
                    <List>
                        <Link to = '/chat/1'>
                            <Item name="Chat 1" />
                        </Link>
                        <Link to = '/chat/2'>
                            <Item name="Chat 2" />
                        </Link>
                    </List>
                    <div>
                        <ChatsDialog />
                    </div>
                </div>
            </Fragment>
        )
    }
}
    
