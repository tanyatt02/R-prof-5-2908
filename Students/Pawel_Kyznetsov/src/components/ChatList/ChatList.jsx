
        import './style.css';
        import React, { Component, Fragment } from 'react';

        import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

        export default class ChatList extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    //
                }
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    <Fragment>
                        <div className="ChatList d-flex flex-column">
                            {/* chat-list */}
                            {/* В виде списка открытых (активных) чатов */}
                            <div>
                                <ChatsDialog />
                            </div>
                        </div>
                    </Fragment>
                )
            }
        }
    