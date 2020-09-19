import React from "react";
import Message from "./Message.jsx";

const Messages = (props) => {
    let messages

    if (props.chatId===undefined){
        messages = props.messages[1].messageList;
    } else {
        messages = props.messages[props.chatId].messageList;
    }

    const messageItem = messages.map((msg, index) => {
        let {sender, text} = msg;
        return <Message text={text} sender={sender} key={index}/>
    });

    return (
        <div className='messages'>
            {messageItem}
        </div>
    )
}

export default Messages