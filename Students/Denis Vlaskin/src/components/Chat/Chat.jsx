import './style.css';
import React, { Fragment } from 'react';

export default props => {
    let { name, messages } = props;

    return (
        <Fragment>
            <div className="chat d-flex flex-column">
                <span className="chatName">{ name }</span>
                <p className="chatMsgs">{ messages }</p>
            </div>
        </Fragment>
    )
}