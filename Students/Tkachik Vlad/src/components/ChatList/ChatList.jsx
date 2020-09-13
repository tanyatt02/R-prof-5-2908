import React from 'react';
import './style.css';

import List from './List/List.jsx';
import ListBtn from "./List/ListBtn.jsx";

export default (props) => {
    return (
        <div className="chatList">
            <List chatNames = { props.chatNames }/>
            <ListBtn />
        </div>
    )
}