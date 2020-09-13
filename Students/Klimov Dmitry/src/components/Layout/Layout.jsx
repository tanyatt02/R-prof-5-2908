
        import './style.css';
        import React, { Component, Fragment } from 'react';

        import Header from '../Header/Header.jsx'
        import MessageField from '../MessageField/MessageField.jsx';
        import ChatList from '../ChatList/ChatList.jsx';

        export default class Layout extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    //
                }
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    <div className="d-flex flex-wrap">
                        <Header />
                        <ChatList  />
                        <MessageField  name="Darth Vader"/>
                    </div>
                    
                )
            }
        }
    