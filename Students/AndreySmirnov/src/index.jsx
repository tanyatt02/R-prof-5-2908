import React from 'react';
import ReactDom from 'react-dom'
import './layout/css/styles.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from "./router.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
