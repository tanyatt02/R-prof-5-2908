import './style.css';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import MessageField from '../MessagesField/MessagesField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends Component {

	static propTypes = {
		chatId: PropTypes.number
	}

	static defaultProps = {
		chatId: 1
	}

	render() {

		return (
			<StylesProvider>
					<div className="layout d-flex w-200 justify-content-center flex-column">
						<Header chatId = { this.props.chatId }/>
						<main className="content">
							<ChatList id = { this.props.chatId } className="chatList"/>
							<MessageField chatId = { this.props.chatId } /> 
						</main>
					</div>
			</StylesProvider>
		)
	}
}