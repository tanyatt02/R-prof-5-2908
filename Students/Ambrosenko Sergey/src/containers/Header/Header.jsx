import './style.css';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        const { name } = this.props.profileDate
        return (
            <div className="header">
                <span className="header-title">Чат { this.props.chatId }</span>
                <div className="header-profile">
                    <PortraitOutlinedIcon style={ { width: '1.5em', height: '1.5em' } } />
                    <Link to="/profile">{ name }</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profileDate: profileReducer.profileDate,
});

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);