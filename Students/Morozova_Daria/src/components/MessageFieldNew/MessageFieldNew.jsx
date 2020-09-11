
        import './style.css';
        import React, { Component, Fragment } from 'react';

        import Message from '../Message/Message.jsx';

        export default class MessageFieldNew extends Component {
            constructor(props) {
                super(props);
            }
        
            render() {
                let { messages } = this.props;
                    let contentArray = messages.map((msg, index) => {
                        let { sender, text } = msg;
                        return <Message text = { text } sender = { sender } key = { index }/>
                    });
        
                return (
                    <Fragment>
                        <div className="MessageFieldNew">
                            <div className="d-flex flex-column content-wrp">
                                { contentArray }
                            </div>
                        </div>
                    </Fragment>
                )
            }
        }
    