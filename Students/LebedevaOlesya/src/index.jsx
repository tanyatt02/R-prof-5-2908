import React from 'react';
import ReactDom from 'react-dom';

// import MuiThemeProvider from '@material-ui/styles/ThemeProvider/'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MessageField/MessageField.jsx';
import ChatList from './components/ChatList/ChatList.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <MuiThemeProvider>
        <div className="">
            <div>
                <ChatList />
            </div>
            <div>
                <MessageField />
            </div>
        </div>
    </MuiThemeProvider>,
    container,
 );

// ReactDom.render(
//     <div className="layout">
//         <MessageField name="Darth Vader"/>
//     </div>,
//     container
// )