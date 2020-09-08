import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDilog from '../ChatsDilog/ChatsDilog.jsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
        
        
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
            <Fragment>
                <Box className="ChatList d-flex flex-column col-3" color="primary.contrastText">
                    {/* chat-list */}
                    <div>
                        <ChatsDilog />
                    </div>
                </Box>
            </Fragment>
        )
    }
}
    