
import './style.css';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
        
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';

export default class ChatList extends Component {
    // constructor(props) {
    // super(props);
    // }
        
    render() {
        
        return (
            <div>
                <List>
                    <Link to = '/chat/1'>
                        <ListItem>
                        <ListItemIcon><SendTwoToneIcon />
                        </ListItemIcon><ListItemText primary="Chat 1" />
                        </ListItem>
                    </Link>
                    <Link to = '/chat/2'>
                        <ListItem>
                        <ListItemIcon><SendTwoToneIcon /></ListItemIcon><ListItemText primary="Chat 2" />
                        </ListItem>
                    </Link>
                    <Link to = '/chat/3'>
                        <ListItem>
                        <ListItemIcon><SendTwoToneIcon />
                        </ListItemIcon><ListItemText primary="Chat 3" />
                        </ListItem>
                    </Link>
                </List>
                <ChatsDialog />
            </div>
        )
    }
}
    