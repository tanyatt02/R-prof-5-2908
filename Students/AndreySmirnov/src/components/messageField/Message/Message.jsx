import React from 'react'

const Message = (props) => {
    let { sender, text } = props;

    return (
        <div className='messageItem'>
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>I'M BOT</strong> }
            <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
        </div>
    )
}

export default Message