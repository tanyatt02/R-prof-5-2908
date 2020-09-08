import './style.css';

import React from 'react';


export default props =>  {
    const text = props.text;

    const list = text.map((text) =>
        <li key={text.toString()}>{text}</li>
    );

    return (
        <div>{list}</div>
    )
}





