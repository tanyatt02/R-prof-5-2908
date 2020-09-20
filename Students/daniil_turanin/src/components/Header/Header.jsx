import './style.css';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

export default class Header extends Component {

	static propTypes = {
		chatId: PropTypes.number
	}

	static defaultProps = {
		chatId: 1
	}

	render() {
		return (
			<header className="header">
				<h1>Untitled chat</h1>
				<h4>Made with ReactJS</h4>
				<span className="chatNumber">Чат { this.props.chatId }</span>
			</header>
		)
	}
}