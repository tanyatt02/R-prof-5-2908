
import './style.css';
        import React, { Component, Fragment } from 'react';

        import Message from '../Message/Message.jsx';

        export default class MessageField extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    text: '',
                    messages: [
                        {
                            sender: 'Maks',
                            text: 'Hello'
                        },
                        {
                            sender: 'Maks',
                            text: 'Call me later, am busy'
                        },
                        {
                            sender: null,
                            text: 'Hello'
                        },
                        {
                            sender: 'null',
                            text: 'Nooooooo, I need right NOW'
                        }
                    ]
                
                }
            }

            handleChange = evt => {
                if (evt.keyCode !== 13) {
                    this.setState({ text: evt.target.value });
                } else {
                    this.sendMessage();
                }
                
            }

            sendMessage = () => {
                this.setState({ 
                    text: '',
                    messages: [...this.state.messages, {
                            sender: this.props.name,
                            text: this.state.text
                        } 
                    ]
                });
            }

            componentDidUpdate() {
                //сделать, чтобы нам отвечал бот
            }

            render() {
                let { messages } = this.state;

                let contentArray = messages.map((msg, index) => {
                    let { text, sender } = msg;
                    return <Message text = { text } sender = { sender } key = { index }/>
                });
        
                return (
                    <div className="d-flex flex-column">
                        <div>
                            { contentArray }
                        </div>
                        <div className="controls d-flex">
                            <input 
                                type="text" 
                                value = { this.state.text }
                                onChange = { this.handleChange }
                                onKeyUp = { this.handleChange }
                            />
                            <button onClick = { this.sendMessage }>Send</button>
                        </div>
                    </div>
                )
            }
        }