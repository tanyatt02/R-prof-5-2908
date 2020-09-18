import React from 'react'
import Header from "./Header/Header.jsx";
import {connect} from "react-redux";
import WelcomeContainer from "./Welcome/WelcomeContainer.jsx";
import ContentContainer from "./Content/ContentContainer.jsx";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {!this.props.logInfo.loggedIn ? <div className='wrapperWelcome'>
                    <WelcomeContainer/>
                </div> :
                <div className='wrapper'>
                    <Header chatId={this.props.chatId} userName={this.props.logInfo.userName}/>
                    <ContentContainer chatId={this.props.chatId}/>
                </div>}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        logInfo: state.logInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)