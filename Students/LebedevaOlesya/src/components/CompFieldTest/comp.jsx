<<<<<<< HEAD
import './style.css';
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

export default class FieldComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { messages } = this.props;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text={ text } sender={ sender } key={ index } />
        });

        return (
            <div className="test">
               <div>
                   { contentArray}
               </div>
            </div>
        )
    }
=======
import './style.css';
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

export default class FieldComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { messages } = this.props;

        let contentArray = messages.map((msg, index) => {
            let { text, sender } = msg;
            return <Message text={ text } sender={ sender } key={ index } />
        });

        return (
            <div className="test">
               <div>
                   { contentArray}
               </div>
            </div>
        )
    }
>>>>>>> c1f317307805d71d7423a0b5b7291b1f4987a096
}