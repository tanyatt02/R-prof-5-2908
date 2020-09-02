import './style.css';
import React from 'react';
import Message from '../message/message.jsx';

export default props => {
	let { messages } = props;
	return (
		props.messages.map(message => <Message text={ message } />)
	)
}