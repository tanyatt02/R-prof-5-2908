        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text } = props;

            if ( text.length < 1 ) {
                return null;
            } else {
                return (
                    <div className="msg" style={{ alignSelf: sender === 'Bot' ? 'flex-start' : 'flex-end'}}>
                        <div className = "name">{ sender }</div>
                        <div className = "text">{ text }</div>
                    </div>
                )
            }
        } 
        //     return (
        //             <div className = " d-flex flex-column msg" >
        //                 { sender && <strong>{ sender }</strong> }
        //                 { !sender && <strong>LUKE S.</strong> }
        //                 <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
        //             </div>
        //     )
        // }
    