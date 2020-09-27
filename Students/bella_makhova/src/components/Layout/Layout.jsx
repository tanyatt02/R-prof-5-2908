
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
        import PropTypes from 'prop-types';

        import ChatList from '../ChatList/ChatList.jsx';
        import MessageField from '../Comp/Comp.jsx';
        import {bindActionCreators} from "redux";
        import {connect} from "react-redux";
        import { setActiveChat } from "../../store/actions/chats-actions";
        import {Link} from "react-router-dom";

        class Layout extends Component {
            constructor(props) {
                super(props);
            }

            componentDidUpdate() {
                this.props.setActiveChat(this.props.chatId);
            }

            render() {

                return (
                    <StylesProvider>
                        <Link to = '/profile'>Profile</Link>
                        <h1>Chat: { this.props.chatId }</h1>
                        <div className="d-flex w-100 justify-content-center">
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

        const mapDispatchToProps = dispatch => bindActionCreators({ setActiveChat }, dispatch);

        export default connect(null, mapDispatchToProps)(Layout);
