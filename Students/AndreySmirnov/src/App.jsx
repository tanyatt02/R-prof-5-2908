import React from 'react'
import AddMessage from "./components/addMessage/AddMessage.jsx";
import Messages from "./components/messages/Messages.jsx";

const App = ({dispatch, state}) => {
    return (
        <div className='wrapper'>
            <Messages messages={state.messages}/>
            <AddMessage dispatch={dispatch}
                        newMessageText={state.newMessageText}/>
        </div>
    )

}

export default App