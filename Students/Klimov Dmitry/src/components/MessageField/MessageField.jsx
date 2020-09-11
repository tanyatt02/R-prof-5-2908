
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import ButtonSend from '../ButtonSend/ButtonSend.jsx'
        import Message from '../Message/Message.jsx';
        import {TextField} from '@material-ui/core';


        export default class MessageField extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    text: '',
                    messages: [
                        {
                            sender: 'Darth Vader',
                            text: 'Hello',
                            typeMessages: 'send'
                        },
                        {
                            sender: 'Darth Vader',
                            text: 'I am your father',
                            typeMessages: 'send'
                        },
                        {
                            sender: null,
                            text: 'Hello',
                            typeMessages: 'send'
                        },
                        {
                            sender: null,
                            text: 'Nooooooo',
                            typeMessages: 'send'
                        }
                    ]
                                        // messages: {
                    //     1: {
                    //         sender: 'Darth Vader',
                    //         text: 'Hello'
                    //     },
                    //     2: {
                    //         sender: 'Darth Vader',
                    //         text: 'I am your father'
                    //     },
                    //     3: {
                    //         sender: null,
                    //         text: 'Hello'
                    //     },
                    //     4: {
                    //         sender: null,
                    //         text: 'Nooooooo'
                    //     }
                    // }
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
                            text: this.state.text,
                            typeMessages: 'send'
                        } 
                    ]
                });
            }

            componentDidUpdate() {
               if(this.state.messages.length % 2 === 1){
                setTimeout(() =>
                this.setState(
                        { messages: [...this.state.messages, {
                            sender: 'Robot',
                            text: 'I am robot',
                            typeMessages: 'answer'
                        } 
                    ]
                 }), 1000);
               } 
            }

            render() {
                let { messages } = this.state;

                let contentArray = messages.map((msg, index) => {
                    let { text, sender, typeMessages } = msg;
                    return <Message 
                                text = { text } 
                                sender = { sender } 
                                typeMessages = { typeMessages }  
                                key = { index }/>
                });

                // let contentArray = Object.keys(messages).map(key => {
                //     let { text, sender } = messages[key];
                //     return <Message text = { text } sender = { sender } key = { key }/>
                // });
        
                return (
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            { contentArray }
                        </div>
                        <div className="controls d-flex">
                             <TextField
                                name="input"
                                fullWidth={ true }
                                placeholder="Type your message"
                                style={ {marginTop: 'inherit'} }
                                onChange={ this.handleChange }
                                onKeyUp={ this.handleChange }
                                value={ this.state.text }
                            />
                            <ButtonSend send ={ this.sendMessage } />
                            
                        </div>
                    </div>
                )}
    } 
    