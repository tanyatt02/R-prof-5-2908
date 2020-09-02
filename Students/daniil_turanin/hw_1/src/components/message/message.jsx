import './style.css';

import React from 'react';

export default (props) => {
	let { text } = props;
	return (
		<div className="d-flex justify-content-center message">
			{props.text}
		</div>
	)
}