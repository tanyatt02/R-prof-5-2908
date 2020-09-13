
        import './style.css';
        import React, { Component, Fragment } from 'react';
        
        import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
        import List from '@material-ui/core/List';
        import ListItemText from '@material-ui/core/ListItemText';
        import SendIcon from '@material-ui/core/SvgIcon';

        export default class ChatList extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    //
                }
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    
                    <div>
                            <List>
                                <ListItemText primary="Chat 1" />
                                <ListItemText primary="Chat 2" />
                                <ListItemText primary="Chat 3" />
                            </List>

                        
                            <ChatsDialog />
                    </div>
                )
            }
        }
    