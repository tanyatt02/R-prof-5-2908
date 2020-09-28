
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import FieldComp from '../CompField/comp.jsx';
        import InputComp from '../InputSend/InputSend.jsx'

        import { connect } from 'react-redux';
        import { bindActionCreators } from 'redux';

        import  { sendMessage } from '../../store/actions/messages-actions';

class MessageField extends Component {

    send = (text, sender = 'Darth Vader') => {
        this.props.sendMessage(text, sender);
    }

    render() {
        return (
            <div className="d-flex flex-column">
               <FieldComp messages = { this.props.messages } />
               <InputComp send = { this.send } />
            </div>
        )
    }
}


const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
