import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "../styles/Global";
import * as S from "./styles";
import * as API from "../../services";
import Login from "../Login";
import Chat from "../Chat";
import Home from "../Home";
import SignUp from "../SignUp";
import { useLogin } from "../context/Login";
import { useSignUp } from "../context/SignUp";

function App() {
  const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();
  const nickname = user.nickname;

  // useEffect(() => {
  //   async function main() {
  //     const res = await API.getToken("caio", "123");
  //     console.log(res);

  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log(data);
  //     } else {
  //       console.log("erro ao buscar o token");
  //     }
  //   }

  //   main();
  // }, []);

  return (
    <>
      <S.AppWrapper className="AppWrapper">
        <GlobalStyles className="GlobalStyles" />
        <BrowserRouter>
          <S._Link
            to="/"
            onClick={() => {
              setSignedUp(false);
              setSigningUp(false);
              setLogedIn(false);
              setUser({ nickname: "" });
            }}
            className="global-nick"
            style={{ cursor: "pointer" }}
          >
            {logedIn && (
              <S.UserName className="UserName">
                <span>{nickname}</span>
              </S.UserName>
            )}
          </S._Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<>{"THIS PAGE DOESN'T EXIST"}</>} />
          </Routes>
        </BrowserRouter>
      </S.AppWrapper>
    </>
  );
}

export default App;
