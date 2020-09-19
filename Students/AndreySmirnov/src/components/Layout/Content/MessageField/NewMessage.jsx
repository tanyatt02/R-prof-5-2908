import React from "react";
import {TextField} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";

const NewMessage = (props) => {
    return (
        <div className='addMessage'>
            <TextField
                name="input"
                fullWidth={true}
                hintText="Введите сообщение"
                style={{fontSize: '18px'}}
                value={props.newMessageText}
                onChange={props.handleChange}
                onKeyDown={props.handleChange}
            />
            <SendIcon onClick={props.sendMessage}
                      style={{cursor: 'pointer', width: '22px', height: '22px'}}/>
        </div>
    )
}

export default NewMessage