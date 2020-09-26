import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import { ConnectedRouter } from 'connected-react-router';
import Router from './Router.jsx';
import { Provider } from 'react-redux';
import initStore from './store';
import { history } from './store';

const container = document.getElementById('app');

ReactDom.render(
    <Provider store={ initStore() }>
       <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    container,
 );