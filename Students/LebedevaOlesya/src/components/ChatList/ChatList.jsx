<<<<<<< HEAD
import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';

        
        
export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }
    render() {
        return (
            <div className="ChatList d-flex flex-column">
                <div>
                    <List className='list'>
                        <Link to="/chat/1/">
                            <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/2/">
                            <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/3/">
                            <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
                        </Link>
                    </List>
                </div>
                <div>
                    <ChatsDialog />
                </div>
            </div>
        ) 

        // return (
        //     <Fragment>
        //         <Box className="ChatList d-flex flex-column col-3" color="primary.contrastText">
        //             {/* chat-list */}
        //             <div>
        //                 <ChatsDilog />
        //             </div>
        //         </Box>
        //     </Fragment>
        // )
    }
}
=======
import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';

        
        
export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }
    render() {
        return (
            <div className="ChatList d-flex flex-column">
                <div>
                    <List className='list'>
                        <Link to="/chat/1/">
                            <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/2/">
                            <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
                        </Link>
                        <Link to="/chat/3/">
                            <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
                        </Link>
                    </List>
                </div>
                <div>
                    <ChatsDialog />
                </div>
            </div>
        ) 

        // return (
        //     <Fragment>
        //         <Box className="ChatList d-flex flex-column col-3" color="primary.contrastText">
        //             {/* chat-list */}
        //             <div>
        //                 <ChatsDilog />
        //             </div>
        //         </Box>
        //     </Fragment>
        // )
    }
}
>>>>>>> c1f317307805d71d7423a0b5b7291b1f4987a096
    