import React from "react";
import PropTypes from 'prop-types';

import Chat from "../Chat/Chat.jsx";

export default class Layout extends React.Component {

    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }

    render() {
        return (
                <Chat chatId = { this.props.chatId }/>
        );
    }
}