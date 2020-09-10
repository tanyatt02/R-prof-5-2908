import './style.css';
import React, {Component, Fragment} from 'react';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			messages: [
				{
					sender: 'ReactJS',
					text: 'Hello, I,m React!'
				}
			]
		}
	}

	sendMessage = () => {
		this.setState({
			text: '',
			messages: [...this.state.messages, {
				sender: this.props.name,
				text: this.state.text
			}]
		});
	}

	handleChange = event => {
		this.setState({ text: event.target.value });
	}

	componentDidUpdate() {
		let lastMsg = this.state.messages[this.state.messages.length - 1];
		if (lastMsg.sender !== 'Bot') {
			console.log(lastMsg.sender);
			setTimeout(() => {
				this.setState({
					text: '',
					messages: [...this.state.messages, {
						sender: 'Bot',
						text: 'Hello, I,m ROBOT'
					}]
				})
			}, 1000)
		}
	}

	render() { 
		let { messages } = this.state;
		let contentArr = messages.map((msg, index) => {
			let { text, sender } = msg;
			return <Message text = { text } sender = { sender } key = { index }/>
		})

		return (
			<div className="d-flex flex-column content">
				<h1>React Messager</h1>
				<div>
					{ contentArr }
				</div>
				<div className="controls d-flex">
					<input type="text" value = { this.state.text } onChange = { this.handleChange }/>
					<button onClick = { this.sendMessage }>Send</button>
				</div>
			</div>
		)
	}
}