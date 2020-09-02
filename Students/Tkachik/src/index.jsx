import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

/*import Comp1 from './components/comp1/comp1';*/

const textTemplate = `<span>Нормально</span>`;
let textBlock = ``;

ReactDom.render (
    <button className="normal" onClick={messageRender}>Normal</button>,
    document.querySelector('.buttonBlock')
)

function messageRender () {
    textBlock += textTemplate;
    console.log(textTemplate);
    ReactDom.render (
        <div dangerouslySetInnerHTML={{__html: textBlock}} />,
        document.querySelector('.textContainer')
    )
}
