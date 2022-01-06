import React, { useEffect, useRef, useState } from "react";

const client_id = Date.now();
const ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);

function App() {
  // let ws = null;
  const input = useRef();
  const msgbox = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(function () {
    // ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
    ws.onopen = function () {
      // ws.send("React is connected");
      console.log("React is connected");
    };

    ws.onmessage = function (event) {
      // console.log(`F: just received something ${JSON.stringify(event)}`);
      // console.log("F: just received something");
      console.log(event);
      console.log("########");
      console.log(JSON.parse(`{${event.data}}`));
      // setMessages(messages.concat(event.data));
      setMessages(messages.concat(JSON.parse(`{${event.data}}`)));
    };
  });

  useEffect(() => {
    return () => {
      console.log("unmounting\n");
    };
  });

  function sendMessage(msg) {
    console.log(`sneding: ${msg}\n`);
    ws.send(msg);
    // ws.send(JSON.stringify({ message: msg }));
  }

  return (
    <div className="App">
      <span>{client_id}</span>
      <br />
      <input
        style={{
          width: "30vw",
          height: "3vh",
        }}
        onKeyUp={(e) => {
          // console.log(e);
          if (e.code === "Enter") {
            sendMessage(input.current.value);
            // setMessages(messages.concat(input.current.value));
            setMessages(
              messages.concat(
                JSON.parse(
                  `{"nick":${client_id}, "msg":"${input.current.value}"}`
                )
              )
            );
            input.current.value = "";
          }
        }}
        ref={input}
      ></input>
      <div className="messages" ref={msgbox}>
        {messages.map((e, i) => (
          <p key={i}>
            {e.nick}: {e.msg}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
