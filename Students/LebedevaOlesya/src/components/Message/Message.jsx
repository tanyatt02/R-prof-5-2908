
        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text} = props;

            return (
                <div className="msg d-flex flex-column">
                    { sender && <strong>{ sender }</strong> }
                    { !sender && <strong>LUKE S.</strong> }
                    <p>{ sender || (!sender && text) ? text: 'Cyber answer...'}</p>
                </div>
            )
        }
    