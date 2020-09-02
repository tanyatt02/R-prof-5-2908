import './style.css';

import React from 'react';

export default props => {
    let { name } = props;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>Something from component</h2>
            <p className="green">HELLO { name }</p>
        </div>
    )
}