import './style.css';
import React from 'react';

export default props => {
	return(
		<div className="d-flex justify-content-center">
			<button onClick={() => {
				props.onClick("new message!")}
			}>New message</button>
		</div>
	)
}