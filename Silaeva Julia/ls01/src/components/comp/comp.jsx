import './style.css';

import React from 'react';

export default props => {
    let { name } = props;
    return (
     <div className="d-flex flex-column justify-content-center aling-items-center">
      <h2>Something from react-component</h2>
      <p className="red">Hello { name }</p>
     </div>
    )
}