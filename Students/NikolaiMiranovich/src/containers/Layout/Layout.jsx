import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import ChatList from '../ChatList/ChatList.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import { sendMessage } from '../../actions/messageActions.js';
import './style.css';

class Layout extends React.Component {

    static propTypes = {
      chatId: PropTypes.number,
      sendMessage: PropTypes.func.isRequired,
    }

    static defaultProps = {
      chatId: 1,
    }

    state = {
      messages: {
          1: { text: 'Привет', sender: 'bot' },
          2: { text: 'Здравствуйте', sender: 'bot' },
          3: { text: 'Доброго дня', sender: 'bot' },
      },
    };

  componentDidUpdate(prevProps, prevState) {
      const { messages } = this.state;
      if (Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages) [Object.values(messages).length - 1].sender === 'me') {
        setTimeout(() =>
        this.sendMessage('Не беси меня, я робот!', 'bot'), 1000);
      }
  }

  sendMessage = (message, sender) => {
    const { messages } = this.state;
    const { chatId } = this.props;

    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: {...messages,[messageId]: {text: message, sender: sender}},
        });
        this.props.sendMessage(messageId, message, sender, chatId);
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
                <MessageField 
                  chatId={ this.props.chatId }
                  messages={ this.state.messages }
                  sendMessage={ this.sendMessage }
                />
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps) (Layout);