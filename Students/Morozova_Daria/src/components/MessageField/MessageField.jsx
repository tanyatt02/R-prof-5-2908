
        import './style.css';
        import React, { Component, Fragment } from 'react';

        // import {TextField} from '@material-ui/core';
        // import FloatingActionButton from '../FloatingButton/FloatingButton.jsx';
       import InputComp from '../Input/Input.jsx';
       import FieldComp from '../MessageFieldNew/MessageFieldNew.jsx';

        // import Message from '../Message/Message.jsx';

        export default class MessageField extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    text: '',
                    sender: '',
                    messages: [
                        {
                            sender: 'Vasya',
                            text: 'Ciao!',
                        },
                        {
                            sender: 'Petr',
                            text: 'Hello!',
                        },
                        {
                            sender: null,
                            text: 'Privet!',
                        },
                        {
                            sender: 'Ann',
                            text: 'Guten tag!',
                        }
                    ],
                    sendFunc: this.sendMessage.bind(this),
                }
            }

            // handleChange = event => {
            //     if (event.keyCode !== 13) {
            //         this.setState({ text: event.target.value });
            //     } else {
            //         this.sendMessage();
            //     }                
            // }

            handleChangeSender = event => {
                this.setState({ sender: event.target.value });
            }

            sendMessage = (text) => {
                this.setState({
                    // text: '',
                    sender: '',
                    messages: [...this.state.messages, {
                            sender: this.state.sender,
                            text: text
                        }
                    ]
                })
            }

            componentDidUpdate() {
                if (this.state.messages[this.state.messages.length-1].sender !== 'Bot') {
                    this.setState({
                        messages: [...this.state.messages, {
                                sender: 'Bot',
                                text: `${this.state.messages[this.state.messages.length-1].sender !== '' ? this.state.messages[this.state.messages.length-1].sender : 'Anonim'}, what do you want from me?`
                            }
                        ]
                    })
                }
            }
        
            render() {
                // let { messages } = this.state;
                //             let contentArray = messages.map((msg, index) => {
                //                 let { sender, text } = msg;
                //                 return <Message text = { text } sender = { sender } key = { index }/>
                //             });
        
                return (
                    <div className="d-flex flex-column layout">
                        <FieldComp messages = { this.state.messages } />
                        <InputComp send = { this.sendMessage } />

                        {/* <div className="d-flex flex-column content-wrp">
                            { contentArray }
                        </div> */}
                        {/* <div className="controls d-flex justify-content-end align-items-baseline"
                             style={ {width: '100%', display: 'flex'} }
                        >
                            <TextField
                                name="input"
                                fullWidth={ true }
                                placeholder="Type your message here"
                                style={ {fontSize: '22px', margin: '0 0 20px 0', width: '80%'} }
                                onChange={ this.handleChange }
                                onKeyUp={ this.handleChange }
                                value={ this.state.text }
                            />

                            <FloatingActionButton
                                send={ this.state.sendFunc }
                            ></FloatingActionButton> */}
                            {/* <input 
                                placeholder="Name"
                                className="inputName" type="text" 
                                value = {this.state.sender } 
                                onChange={ this.handleChangeSender }
                            />

                            <input 
                            placeholder="Message"
                                className="inputText" type="text" 
                                value = {this.state.text } 
                                onChange={ this.handleChange }
                                onKeyUp={ this.handleChange }
                            />
                            
                            <button className="sendBtn" onClick = { this.sendMessage }>Send</button> */}
                        {/* </div> */}
                    </div>
                    
                )
            }
        }
    