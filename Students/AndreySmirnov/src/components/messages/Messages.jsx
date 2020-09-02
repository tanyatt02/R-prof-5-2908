import React from 'react';

const Messages = ({messages}) => {
    const messageItem = messages.map(message => <div className="messageItem" key={message.id}> {message.text}</div>)
    return (
        <div className='messages'>
            {messageItem}
        </div>
    )
}

export default Messages