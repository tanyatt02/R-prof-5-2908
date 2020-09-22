import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
            <div className="d-flex flex-column msg" style={{alignSelf: sender === 'bot' ? 'flex-start' : 'flex-end'}}>
                { sender && <strong>{ sender }</strong> }
                { !sender && <strong>LUKE S.</strong> }
                <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
            </div>
    )
}