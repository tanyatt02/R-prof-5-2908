
import './style.css';
import React from 'react';

export default props => {
    let { sender, text} = props;
    return (
        <div className="msg d-flex" style={ { alignSelf: sender === 'Me' ? 'flex-end' : 'flex-start' } }>
            <p className="message-text" >{ sender || (!sender && text) ? text: 'Cyber answer...'}</p>
            <div className="message-sender"> ~ 
                { sender && <strong>{ sender }</strong> }
                { !sender && <strong>Bot</strong> }
            </div>
        </div>
    )
}
    