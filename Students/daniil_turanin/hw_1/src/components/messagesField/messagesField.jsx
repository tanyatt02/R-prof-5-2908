import './style.css';
import React from 'react';
import message from '../message/message.jsx';

export default (props) => {
	return (
		props.messages.map(message => <message text={ message } />)
	)
}
