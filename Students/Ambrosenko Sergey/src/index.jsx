import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import Router from './Router/Router.jsx';
import { Provider } from 'react-redux';
import initStore, { history } from './Store/Utils/store.js';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('app');
const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor } >
            <ConnectedRouter history={ history }>
                <StylesProvider>
                    <div className="d-flex flex-wrap w-100">
                        <Router />
                    </div>
                </StylesProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container
)