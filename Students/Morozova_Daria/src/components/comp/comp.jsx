import './style.css';

import React from 'react';

export default props => {

    let { name } = props;

    return (
        <div className="d-flex align-items-center flex-column">
            <h2>Something from react-comp</h2>
            <p className="red">hello { name }</p>
        </div>
    )
}