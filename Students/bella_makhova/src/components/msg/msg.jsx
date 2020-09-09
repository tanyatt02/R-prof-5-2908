import './style.css';

import React from 'react';

export default props => {
    // let name = props.name;
    let { messages } = props;
    const list = messages.map((message, index) =>
        <div key={index.toString()}>{message}</div>
    );

    return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                {list}
            </div>
    )
}