
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
        import PropTypes from 'prop-types';

        import Header from '../Header/Header.jsx'
        import MessageField from '../MessageField/MessageField.jsx';
        import ChatList from '../ChatList/ChatList.jsx';

        export default class Layout extends Component {
            static propTypes = {
                chatId: PropTypes.number
            }

            static defaultProps = {
                chatId: 1
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    <StylesProvider>
                        <div className="d-flex flex-wrap">
                            <Header  chatId = { this.props.chatId } />
                            <ChatList id = { this.props.chatId }  />
                            <MessageField  name="Darth Vader"/>
                        </div>
                    </StylesProvider>
                )
            }
        }
    