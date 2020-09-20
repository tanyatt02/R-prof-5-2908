import React from 'react';
import {connect} from "react-redux";
import Welcome from "./Welcome.jsx";
import {onUserNameChange, setUser} from "../../../store/actions/welcomeActions";

class WelcomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Welcome onUserNameChange={this.props.onUserNameChange}
                     setUser={this.props.setUser}
                     userName={this.props.userName}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.logInfo.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameChange: (text) => {
            dispatch(onUserNameChange(text));
        },
        setUser: () => {
            dispatch(setUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)