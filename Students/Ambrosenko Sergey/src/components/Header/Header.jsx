import './style.css';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header">
                <span className="header-title">Чат { this.props.chatId }</span>
                <Link className="profile" to="profile">Профиль</Link>
            </div>
        )
    }
}