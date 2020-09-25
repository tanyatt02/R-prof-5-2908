import './style.css';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import { sendMessage } from '../../store/actions/messageActions';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        messages: PropTypes.object.isRequired
    };

    static defaultProps = {
        chatId: 1
    }

     sendMessage = (message, sender) => {
        const { chatId } = this.props;
 
        this.props.sendMessage(message, sender);
    };
 
    render() {
        return (
                <div className="layout">
                    <Header chatId={ this.props.chatId } />
                    <div className="d-flex w-100 justify-content-center layout-canvas">
                        <div className="layout-left-side">
                            <ChatList />
                        </div>
                        <div className="layout-right-side">
                            <MessageField 
                                chatId={ this.props.chatId } 
                                messages={ this.props.messages }
                                sendMessage={ this.sendMessage }
                            />
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({ messages: chatReducer.messages });
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
