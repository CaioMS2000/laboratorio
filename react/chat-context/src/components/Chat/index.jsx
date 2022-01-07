import React, { useRef, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import useWebSocket from "react-use-websocket";
import { w3cwebsocket } from "websocket";

import * as S from "./styles";
import * as API from "../../services";
import { useMessage } from "../context/Message";
import { useLogin } from "../context/Login";

const ws = new WebSocket(`ws://localhost:8000/ws/`);
// const date = new Date();
// const socket_id = `${date.getFullYear()}${
//   date.getMonth() + 1
// }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

const Chat = () => {
  const { message, setMessage } = useMessage({});
  const { user } = useLogin();
  const nickname = user.nickname;
  const input = useRef();
  const button = useRef();
  const messageScreen = useRef();
  const [loadedMessages, setMessages] = useState([]);

  const renderMessages = async (array) => {
    const res = await array.map(async (e, i) => {
      // console.log(`mensagem recebida\n${JSON.stringify(e)}\n`);
      console.log(`mensagem recebida`);
      console.log(e);
      console.log("#########");
      console.log(`id a procurar: ${e.owner.id}`);
      user = await API.getUserById(e.owner.id);
      console.log("terminou o get");
      user = await user.json();
      console.log("usuario");
      console.log(user);
      console.log("#########");
      return (
        <S.Message className="message" key={i}>
          <p>
            <span className="nick">{e.nick}</span>:<span>&nbsp;&nbsp;</span>
            {e.msg}
          </p>
        </S.Message>
      );
    });

    return await res;
  };

  const insertMessages = async (m) => {
    const res = await renderMessages(m);
    console.log("depois de renderizar");
    console.log(res);
    console.log("#########");
    setMessages(res);
  };
  const scrollToBottom = () => {
    messageScreen.current.scrollTop = messageScreen.current.scrollHeight;
  };
  const getMessages = async () => {
    const res = await API.getMessages();
    const data = await res.json();

    if (data.detail === undefined) {
      console.log("chegou da API");
      console.log(data);
      console.log("#########");
      await insertMessages(data);
    }
  };
  const sendMessage = async (msg) => {
    const response = await API.getUserByNick(user.nickname);
    const data = await response.json();

    if (data?.detail === undefined) {
      API.sendMessage(data.id, msg);
      msg = JSON.stringify({ content: `${msg}`, user: data.nickname });
      ws.send(msg);
    }
  };

  // mount and update
  // useEffect(() => {
  //     console.log("mounted or updated")
  // })

  // mounted
  // useEffect(() => {
  //     console.log("mounted")
  // }, [])

  useEffect(() => {
    getMessages();

    scrollToBottom();
  }, []);

  useEffect(function () {
    // ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
    ws.onopen = function () {
      console.log("React is connected");
    };

    ws.onmessage = function (event) {
      // console.log(event.data);
      setMessages(loadedMessages.concat(event.data));
    };
  });
  return (
    <S.Container className="Chat-Container">
      <IconContext.Provider value={{ color: "#9c9c9c", size: "50px" }}>
        <S.Messages ref={messageScreen}>{loadedMessages}</S.Messages>
        <S.TypeSend>
          <S.Input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                button.current.click();
              }
            }}
            ref={input}
          />
          <S.Button
            ref={button}
            onClick={() => {
              console.log("envie a mensagem");
              sendMessage(input.current.value);
              input.current.value = "";
            }}
          >
            Send
          </S.Button>
        </S.TypeSend>
      </IconContext.Provider>
    </S.Container>
  );
};

export default Chat;
