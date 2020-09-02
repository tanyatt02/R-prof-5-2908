import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const MessageComponent = (props) => <div>{ props.text }</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />)
};

function AddNewMessage() {
    const [messages, setMessages] = useState(["Привет!", "Как дела?"]);
    function handleClick () {
        const newMassage = [...messages, "Нормально"]
        setMessages(newMassage);
    }

    return (  
        <div className='content'>
            <MessageField messages={ messages } />
            <button onClick={ handleClick } className='btn'>Ответить</button>
        </div>
    )
}

export default AddNewMessage;