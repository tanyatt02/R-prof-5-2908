
        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text } = props;
            
            return (
                    <div className="d-flex flex-column msg">
                        { sender && <strong>{ sender}</strong> }
                        { !sender && <strong>Harry Potter</strong> }
                        <p>{ sender || (!sender && text) ? text : 'Sorry, но я машина!' }</p>
                    </div>
            )
        }
    