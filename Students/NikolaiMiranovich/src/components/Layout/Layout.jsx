
import React from 'react';
import PropTypes from "prop-types";
import ChatList from '../ChatList/ChatList.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';

export default  class Layout extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <div className="height=30%">
            <ChatList />
          </div>
          <div className="height=70%">
            <MessageField />
          </div>
        </div>
      )
    }
  }