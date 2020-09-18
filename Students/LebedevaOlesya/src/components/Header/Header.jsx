import './style.css';
import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

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
                    <Link to="#">
                        <div className="chatName">MY CHAT { this.props.chatId }</div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}