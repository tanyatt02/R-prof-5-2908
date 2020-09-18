import React from 'react';
import {TextField} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "./Message/Message.jsx";
import ChatList from "./ChatList/ChatList.jsx";


class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: []
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({text: evt.target.value});
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {
                sender: 'Andrey',
                text: this.state.text
            }
            ]
        });
    }

    componentDidUpdate(prevProps, prevState) { //Аргументы содержат props и state до их обновления
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].sender != 'bot') {
            setTimeout(() =>
                    this.setState(
                        {
                            messages: [...this.state.messages, {
                                sender: 'bot',
                                text: 'Cyber answer....'
                            }]
                        }),
                1000);
        }
    }


    render() {
        let {messages} = this.state;

        let chatDisplay = messages.map((msg, index) => {
            let {text, sender} = msg;
            return <Message text={text} sender={sender} key={index}/>
        });

        return (
            <div className="content">
                <div className="content__chatList">
                    <ChatList/>
                </div>
                <div className='content__messageField'>
                    <div className='messages'>
                        {chatDisplay}
                    </div>
                    <div className='addMessage'>
                        <TextField
                            name="input"
                            fullWidth={true}
                            hintText="Введите сообщение"
                            style={{fontSize: '22px'}}
                            value={this.state.text}
                            onChange={this.handleChange}
                            onKeyDown={this.handleChange}
                        />
                        <SendIcon onClick={this.sendMessage}
                                  style={{cursor: 'pointer', width: '22px', height: '22px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageField