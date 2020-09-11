import React from 'react'
import MessageField from "./messageField/MessageField.jsx";
import Header from "./Header/Header.jsx";

const Layout = (props) => {

    return (
        <div className='wrapper'>
            <Header/>
            <MessageField/>
        </div>
    )
}

export default Layout