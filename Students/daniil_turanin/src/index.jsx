import React, { useState } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { StylesProvider, createGenerteClassName } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

const container = document.getElementById('app');

ReactDom.render(
	<BrowserRouter>
		<StylesProvider>
			<Router />
		</StylesProvider>
	</BrowserRouter>,
	container
)