import React from 'react';
import ReactDom from 'react-dom'
import './layout/css/styles.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.jsx'

ReactDom.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('app')
)
