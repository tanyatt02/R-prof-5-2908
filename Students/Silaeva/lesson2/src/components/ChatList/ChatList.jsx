
        import './style.css';
        import React, { Component, Fragment } from 'react';

        import { Link } from 'react-router-dom';

        import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

        import List  from '@material-ui/core/List/List';
        import ListItem  from '@material-ui/core/ListItem/ListItem';
        import ContentSend from '@material-ui/icons/Send';

        export default class ChatList extends Component {
            constructor(props) {
                super(props);
            }
        
            render() {
        
                return (
                    <Fragment>
                        <div className="ChatList d-flex flex-column">
                            {/* <List>
                            <ListItem primary = "Chat 1" />
                            <ListItem primary = "Chat 2" />
                            <ListItem primary = "Chat 3" />
                            </List> */}
                            <ul>
                                <Link to = '/chat/1'>
                                    <li>Chat 1</li>
                                </Link>
                                <Link to = '/chat/2'>
                                    <li>Chat 2</li>
                                </Link>
                                <Link to = '/chat/3'>
                                    <li>Chat 3</li>
                                </Link>
                            </ul>
                            <div>
                                <ChatsDialog />
                            </div>
                        </div>
                    </Fragment>
                )
            }
        }