import './style.css';
import React from 'react'
export default props => {
    let { sender, text } = props
    return (
            <div className="message d-flex flex-column">
                {  sender && <div className="message__rightSide">
                                <strong>{ sender }</strong>
                                <p>{ text }</p> 
                             </div> }
                { !sender && <div className="message__leftSide">
                                <strong>bot</strong> 
                                <p>{ text }</p> 
                             </div> }
            </div>
    )
}
    

//<p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>