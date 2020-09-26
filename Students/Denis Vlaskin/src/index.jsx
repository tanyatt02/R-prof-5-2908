import React from 'react';
import ReactDom, { render } from 'react-dom';
import Router from './components/Router/Router.jsx';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './utils/store';

const { store, persistor } = initStore();

const container = document.getElementById('app');
ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor= { persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>    
    </Provider>,
    container
)
