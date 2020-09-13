
import './style.css';
import React, { Fragment } from 'react';
import PropTypes from "prop-types";

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    
    static defaultProps = {
        chatId: 1,
    };
    
    render () {
        return (
            <Fragment>
                <div className="Header w-100 col-12">
                    <div className="chatName">MY CHAT { this.props.chatId }</div>
                </div>
            </Fragment>
        )
    }
}