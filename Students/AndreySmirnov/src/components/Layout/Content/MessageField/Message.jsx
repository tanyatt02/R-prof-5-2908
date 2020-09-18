import React from 'react'

const Message = (props) => {
    let {sender, text} = props;

    return (
        <div className='messageItem'
             style={{alignSelf: sender === 'bot' ? 'flex-start' : 'flex-end'}}
        >
            <p><strong>{sender}:</strong> {text}</p>
        </div>
    )
}

export default Message