import React from 'react'
import { Switch, Route}  from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx";

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout }/>
                <Route exact path='/:chatId/' render={ obj => <Layout //<Route exact path='/chat/:chatId/'
                        chatId={ Number(obj.match.params.chatId) } />
                    }
                />
            </Switch>
        )
    }
}

export default Router