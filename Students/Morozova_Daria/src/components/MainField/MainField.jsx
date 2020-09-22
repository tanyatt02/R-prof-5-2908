import './style.css';
import React, { Component } from 'react';

import InputComp from '../Input/Input.jsx';
import FieldComp from '../MessageField/MessageField.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { sendMessage } from '../../store/actions/messages-actions';

// export default 
class MainField extends Component {

    sendMessage = (text, sender = 'me') => {
        this.props.sendMessage(text, sender);
    }

    // componentDidUpdate() {
    //     setTimeout(() => {
    //         if (this.props.messages[this.props.messages.length-1].sender !== 'Bot') {
    //             this.setState({
    //                 messages: [...this.props.messages, 
    //                     {
    //                         sender: 'Bot',
    //                         text: `${this.props.messages[this.props.messages.length-1].sender !== '' ? this.props.messages[this.props.messages.length-1].sender : 'Anonim'}, what do you want from me?`
    //                     }
    //                 ]
    //             })
    //         }
    //     }, 600)        
    // }

    render() {        
        return (
            <div className="d-flex flex-column layout">
                <FieldComp messages = { this.props.messages } />
                <InputComp send = { this.sendMessage } />
            </div>     
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages
})

//где? мапдиспатчтупропс?
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainField);