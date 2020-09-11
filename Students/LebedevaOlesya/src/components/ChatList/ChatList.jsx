import './style.css';
import React, { Component, Fragment } from 'react';
// import ChatsDilog from '../ChatsDilog/ChatsDilog.jsx';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
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
            <List>
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
    