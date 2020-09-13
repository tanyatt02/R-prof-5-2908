
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
                            sender: 'Dear',
                            text: 'Hello'
                        },
                        {
                            sender: 'Maks',
                            text: 'Call me later'
                        },
                        {
                            sender: null,
                            text: 'Hello'
                        },
                        {
                            sender: 'What',
                            text: 'Nooooooo'
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
                
                // this.state.text = evt.target.value // NO REACTIVITY
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

                // let contentArray = Object.keys(messages).map(key => {
                //     let { text, sender } = messages[key];
                //     return <Message text = { text } sender = { sender } key = { key }/>
                // });
        
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