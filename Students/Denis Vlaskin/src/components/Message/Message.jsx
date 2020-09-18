import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    const className = "d-flex flex-column msg " + ((sender == 'Chatbot') ? "msg-bot" : "msg-person");

    return (
            <div className={ className }>
                { sender && <strong>{ sender }</strong> }
                { !sender && <strong>LUKE S.</strong> }
                <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
            </div>
    )
}