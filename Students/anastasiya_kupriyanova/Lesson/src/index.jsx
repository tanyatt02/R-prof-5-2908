import React, {useState} from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';


import Comp from "./components/comp/comp.jsx";
import Message from "./components/comp/message.jsx";

const container = document.getElementById('app');

function App() {
    let [text, setText] = useState([]);

    function Click() {
        setText([...text, 'Нормально']);
    }
    return (
        <div>
            <button onClick={Click} type="button">
                Кликни меня!
            </button>
            <Message text = {text}/>
        </div>
    )
}

ReactDom.render(
    <div>
        <Comp/>
        <App/>
    </div>,
    container
)