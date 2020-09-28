
        import './style.css';
        import React, { Component, Fragment } from 'react';

        export default class Header extends Component {
            
        
            render() {
                // let { some } = this.state;
        
                return (
                    <Fragment>
                        <div className="header">
                            <h1> Chat { this.props.chatId }</h1>
                        </div>
                    </Fragment>
                )
            }
        }
    