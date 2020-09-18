
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
        import PropTypes from 'prop-types';
    // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


        import ChatList from '../components/ChatList/ChatList.jsx';
        import MessageField from '../components/MessageField/MessageField.jsx';
        import Header from '../components/Header/Header.jsx';

        export default class Layout extends Component {

            static propTypes = {
                chatId: PropTypes.number
            }

            static defaultProps = {
                chatId: 1
            }
        
            render() {              
                return (
                    <StylesProvider>
                        <h1>Chat: { this.props.chatId }</h1>
                            <div>
                                <Header/>
                            </div>
                            <div>
                                <ChatList id = { this.props.chatId }/>
                            </div>
                            <div>
                                <MessageField name="12345"/>
                            </div>
                        </div>
                    </StylesProvider>
                )
            }
        }
    