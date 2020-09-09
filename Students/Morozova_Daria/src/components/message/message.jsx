
        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text } = props;

            return (
               <div className="d-flex flex-column msg">
                   { sender && <strong className="msgName">{ sender }</strong>}
                   { !sender && <strong className="msgName">Bot</strong>}
                   <p className="msgText">{ sender || (!sender && text) ? text : 'Cyber answer...'}</p>
               </div>               
            )
        }
    