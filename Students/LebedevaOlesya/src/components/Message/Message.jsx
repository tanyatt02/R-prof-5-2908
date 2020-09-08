
import './style.css';
import React from 'react';

export default props => {
    let { sender, text} = props;
    return (
        <div className="msg" style={ { alignSelf: sender === 'Me' ? 'flex-end' : 'flex-start' } }>
            <div className="message-sender">
                { sender && <strong>{ sender }</strong> }
                { !sender && <strong>Me</strong> }
            </div>
            <p >{ sender || (!sender && text) ? text: 'Cyber answer...'}</p>
        </div>
    )
}
    