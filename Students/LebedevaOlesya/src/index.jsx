import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import Layout from './components/Layout/Layout.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <MuiThemeProvider>
        <Fragment>
            <Layout />
        </Fragment>
    </MuiThemeProvider>,
    container,
 );

// ReactDom.render(
//     <div className="layout">
//         <MessageField name="Darth Vader"/>
//     </div>,
//     container
// )