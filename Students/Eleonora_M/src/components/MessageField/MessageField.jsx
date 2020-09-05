
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
                            sender: 'Eleonora',
                            text: 'Hello'
                        },
                        {
                            sender: 'Valeri',
                            text: 'Hi'
                            
                        },
                        {
                            sender: 'Eleonora',
                            text: 'how are you?'
                            
                        },
                        {
                            sender: 'Valeri',
                            text: 'fine'
                        }
                    ]
                   
                }
            }

            handleChange = evt => {
                this.setState({ text: evt.target.value });
               
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
                if (this.state.messages.length % 2 === 1) {
                    setTimeout(() =>
                    this.setState({
                        messages: [...this.state.messages,  {
                            sender: "evm", 
                            text: `${this.state.messages[this.state.messages.length-1].sender}. Не приставай ко мне, я робот!`
                        }]
                    }),
                    1000);
                }
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
                            />
                            <button className="send_Btn" onClick = { this.sendMessage }>Send</button>
                        </div>
                    </div>
                )
            }
        }
    