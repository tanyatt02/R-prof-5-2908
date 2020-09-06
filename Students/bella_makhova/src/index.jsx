import React, {useState} from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

//import Comp from './components/comp/comp.jsx';
import Msg from './components/msg/msg.jsx';

const container = document.getElementById('app');

function App() {
    let [messages, setMessages] = useState([]);

    function handleClick() {
        setMessages([...messages, 'Нормально']);
    }

    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-outline-info m-2 p-2">Button</button>
            <Msg messages={messages} />
        </div>
    )
}

ReactDom.render(
    <App/>,
    container
)
