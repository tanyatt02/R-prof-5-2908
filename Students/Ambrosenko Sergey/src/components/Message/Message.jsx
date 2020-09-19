import './style.css';
import React from 'react';

export default class Message extends React.Component {
    render() {
        let { sender, text } = this.props;
        
        if ( text.length < 1 ) {
            return null;
        } else {
            return (
                <div className="msg" style={{ alignSelf: sender === 'Bot' ? 'flex-start' : 'flex-end'}}>
                    <div>{ text }</div>
                    <div className="msg-sender">{ sender }</div>
                </div>
            )
        }
    }
}