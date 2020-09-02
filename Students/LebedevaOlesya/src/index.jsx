// import React from 'react';
// import ReactDom from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './layout/css/styles.css';

// import Comp from './components/comp/comp.jsx';

// const container = document.getElementById('app');

// ReactDom.render(
//     <div>
//         <Comp name="Darth Vader"/>
//     </div>,
//     container
// )

import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('app'),
);
