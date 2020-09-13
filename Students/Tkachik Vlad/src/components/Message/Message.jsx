import React from 'react';
import './style.css';

export default props => {

    let { sender, text, isUser } = props;
    let msgClass = 'msg';
    if (isUser) {
        msgClass += ' user-msg';
    }

    return  (<div className={ msgClass }>
                { sender && <strong>{ sender }</strong> }
                { !sender && <strong>LUKE S.</strong> }
                <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
            </div>
    );
}