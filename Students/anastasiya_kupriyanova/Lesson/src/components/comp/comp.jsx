import './style.css';

import React from 'react';

export default props => {
    let { name } = props;
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h2>Something from React-component</h2>
            <p className="red">Hello { name }</p>
        </div>
    )
}

