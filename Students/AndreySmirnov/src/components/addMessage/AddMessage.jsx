import React from 'react';

const AddMessage = ({newMessageText, dispatch}) => {

    const newMessage = React.createRef()

    const onTextChange = () => {
        const text = newMessage.current.value
        dispatch({
            type: 'UPDATE_NEW_MESSAGE_TEXT',
            text: text
        })
    }

    const addMessage = () => {
        dispatch({type: 'ADD_MESSAGE'})
    }

    return (
        <div className='addMessage'>
            <textarea placeholder='Введите сообщение' ref={newMessage} onChange={onTextChange} value={newMessageText}/>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default AddMessage