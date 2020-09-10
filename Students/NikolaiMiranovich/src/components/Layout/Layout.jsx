
import React from 'react';
import PropTypes from "prop-types";
import ChatList from '../ChatList/ChatList.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import './style.css';

export default  class Layout extends React.Component {
    render() {
      return (
        <div className="layout">
          <Header />
          <div className="layout-wrp">
          <div className="chatList-wrp">
            <ChatList />
          </div>
          <div className="messageField-wrp">
            <MessageField />
          </div>
        </div>
        </div>
      )
    }
  }