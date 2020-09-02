import React, { useState } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessagesField from './components/messagesField/messagesField.jsx';
import Button from './components/button/button.jsx';
import DeleteBtn from './components/deleteBtn/deleteBtn.jsx';


const container = document.getElementById('app');

function App() {
	const [messages, addMessage] = useState(["Hello", "I'm React"]);
	return (
		<div>
			<MessagesField messages = { messages }/>
			<Button onClick={props => {
				addMessage([...messages, props]);
			}}/>
			<DeleteBtn onClick={() => {
				messages.splice(messages.length - 1, 1);
			}}/>
		</div>
	)
}

ReactDom.render(
	<App />,
	container
)