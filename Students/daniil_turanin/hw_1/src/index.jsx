import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import messagesField from './components/messagesField/messagesField.jsx';

let messages = ["Hello", "I'm React"];
const container = document.getElementById('app');
/*
const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};
*/

ReactDom.render(
	<MessageField messages = { messages }/>,
	container
)