
import React from 'react';
import PropTypes from 'prop-types';
import ChatList from '../ChatList/ChatList.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';

import './style.css';

export default  class Layout extends React.Component {

    static propTypes = {
      chatId: PropTypes.number
    }

    static defaultProps = {
      chatId: 1
    }

    render() {
      
      return (
          <div className="layout">
            <Header chatId={ this.props.chatId }/>
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