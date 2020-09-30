import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx';
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

class Header extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        chatId: PropTypes.number.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };
    
    // static defaultProps = {
    //     chatId: 1,
    // };
    
    render () {
        const { chats, chatId, isLoading } = this.props;
        let chatRoom = '???';
        if (!isLoading) {
            chatRoom = chats[chatId].title;
        }
        return (
            <Fragment>
                <div className="Header w-100 col-12">
                <   div className="chatName"> Комната: { chatRoom }</div>

                    {/* <Link to="#">
                        <div className="chatName"> { this.props.chatId }</div>
                    </Link> */}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({ 
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);