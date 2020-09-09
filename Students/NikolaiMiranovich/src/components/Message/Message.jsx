import './style.css';
import React from 'react';

    export default props => {
        let { sender, text } = props;
            
        return (
                <div className="d-flex flex-column message">
                    { sender && <strong>{ sender}</strong> }
                    { !sender && <strong>CHUBAKKA</strong> }
                    <p>{ sender || (!sender && text) ? text : 'Не беси меня, я робот!' }</p>
                </div>
        )
    }
    