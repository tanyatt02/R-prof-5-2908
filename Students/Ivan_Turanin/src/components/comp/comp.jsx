import './style.css';
import React from 'react';

export default props => {
    let { name } = props;
    let { i } = props;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="title">Hello react!</h1>
            <p>hi { name[i] }</p>
        </div>
    )
}