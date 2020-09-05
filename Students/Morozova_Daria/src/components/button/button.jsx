import './style.css';

import React from 'react';

import Message from '../message-test/message-test.jsx'

export default class Button extends React.Component {
    state = {
      count: 0,
    }
  
    onClick = () => {
      this.setState(({ count }) => ({
        count: count + 1,
      }));
    }
  
    render() {
      return (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button onClick={this.onClick}>Нормально?</button>
          {[...Array(this.state.count)].map(() => <Message />)}
        </div>
      );
    }
}