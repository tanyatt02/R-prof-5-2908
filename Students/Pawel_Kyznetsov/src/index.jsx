import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import MessageField from "./components/MessageField/MessageField.jsx";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.jsx";

function App() {
  const [messages, addMessage] = useState(["Привет", "Как дела?"]);
  console.log(messages);
  return (
    <>
      <MessageField messages={messages} />
      <ButtonComponent
        onClick={(props) => {
          addMessage([...messages, props]);
        }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
