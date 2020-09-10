import './style.css';
import React from 'react';

export default props => {
	let { sender, text } = props;
	return (
		<div className="d-flex flex-column message">
			{ sender && <strong>{ sender }</strong> }
			{ !sender && <strong>User</strong> }
			<p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>

		</div>
	)
}