import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDilog from '../ChatsDilog/ChatsDilog.jsx'
        
        
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
                <div className="ChatList d-flex flex-column">
                    {/* chat-list */}
                    <div>
                        <ChatsDilog />
                    </div>
                </div>
            </Fragment>
        )
    }
}
    