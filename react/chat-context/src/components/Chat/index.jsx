import React, { useRef, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import useWebSocket from "react-use-websocket";
import { w3cwebsocket } from "websocket";

import * as S from "./styles";
import * as API from "../../services";
import { useMessage } from "../context/Message";
import { useLogin } from "../context/Login";
/*
{
	"content": "here we put some words",
	"owner_id": 3
}
*/

const date = new Date();
const socket_id = `${date.getFullYear()}${
  date.getMonth() + 1
}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

const Chat = () => {
  const WSclient = new w3cwebsocket("ws://localhost:8000/ws/" + socket_id);
  console.log("socket criado\n");
  const { message, setMessage } = useMessage({});
  const { user } = useLogin();
  const nickname = user.nickname;
  const input = useRef();
  const button = useRef();
  const messageScreen = useRef();
  const [loadedMessages, setMessages] = useState(<></>);

  const renderMessages = (array) => {
    const res = array.map((e, i) => {
      console.log(`mensagem recebida\n${JSON.stringify(e)}\n`);
      return (
        <S.Message className="message" key={e.id}>
          <p>
            <span className="nick">{e.id}</span>:<span>&nbsp;&nbsp;</span>
            {e.content}
          </p>
        </S.Message>
      );
    });

    return res;
  };
  const insertMessages = (m) => {
    const res = renderMessages(m);
    console.log("renderizadas", res);
    setMessages(res);
  };
  const scrollToBottom = () => {
    messageScreen.current.scrollTop = messageScreen.current.scrollHeight;
  };
  const getMessages = async () => {
    const res = await API.getMessages();
    const data = await res.json();

    if (data.detail === undefined) {
      //   console.log(data);
      insertMessages(data);
    }
  };
  const sendMessage = async (msg) => {
    console.log("nick a procurar ", user?.nickname);
    const response = await API.getUserByNick(user.nickname);
    const data = await response.json();

    if (data?.detail === undefined) {
      API.sendMessage(data.id, msg);
      console.log(JSON.stringify({ content: `${msg}`, owner_id: data.id }));

      setMessages(
        loadedMessages +
        (
          <S.Message className="message">
            <p>
              <span className="nick">{"new"}</span>:<span>&nbsp;&nbsp;</span>
              {msg}
            </p>
          </S.Message>
        )
      );
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
    // useEffect(async () => {
    console.log("chat mounted\n=============================\n");

    getMessages();

    scrollToBottom();

    WSclient.onopen = () => {
      console.log("Client socket connected".toUpperCase());
    };

    WSclient.onmessage = (msg) => {
      // insira essa mensagem
      console.log(`socket recebeu a mensagem:\n${msg}`);
      sendMessage(msg);
    };

    console.log("passou por todas as funções");
    console.log("\n===========================================\n");
  }, []);

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
