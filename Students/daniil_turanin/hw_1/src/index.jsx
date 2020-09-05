import React, { useState } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessagesField from './components/MessagesField/MessagesField.jsx';

const container = document.getElementById('app');

ReactDom.render(
	<MessagesField />,
	container
)