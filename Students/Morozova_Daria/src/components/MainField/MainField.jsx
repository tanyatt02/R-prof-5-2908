import './style.css';
import React, { Component } from 'react';

import InputComp from '../Input/Input.jsx';
import FieldComp from '../MessageField/MessageField.jsx';
import { connect } from 'react-redux';


// export default 
class MainField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // messages: [
                // {
                //     sender: 'Vasya',
                //     text: 'Ciao!',
                // },
                // {
                //     sender: 'Petr',
                //     text: 'Hello!',
                // },
                // {
                //     sender: null,
                //     text: 'Privet!',
                // },
                // {
                //     sender: 'Ann',
                //     text: 'Guten tag!',
                // }
            // ],
            sendFunc: this.sendMessage.bind(this),
        }
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.props.messages, 
                {
                    sender: '',
                    text: text
                }
            ]
        })
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.props.messages[this.props.messages.length-1].sender !== 'Bot') {
                this.setState({
                    messages: [...this.props.messages, 
                        {
                            sender: 'Bot',
                            text: `${this.props.messages[this.props.messages.length-1].sender !== '' ? this.props.messages[this.props.messages.length-1].sender : 'Anonim'}, what do you want from me?`
                        }
                    ]
                })
            }
        }, 600)        
    }

    render() {        
        return (
            <div className="d-flex flex-column layout">
                <FieldComp messages = { this.state.messages } />
                <InputComp send = { this.sendMessage } />
            </div>     
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages
})

export default connect(mapStateToProps, mapDispatchToProps)(MainField);