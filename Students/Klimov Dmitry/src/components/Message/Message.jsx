        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text, typeMessages } = props;

            return (
                    <div className={ typeMessages +" "+ "d-flex flex-column msg"} >
                        { sender && <strong>{ sender }</strong> }
                        { !sender && <strong>LUKE S.</strong> }
                        <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
                    </div>
            )
        }
    