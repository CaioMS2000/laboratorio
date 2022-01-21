import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import { GlobalStyles } from "../styles/Global";
import * as S from "./styles";
import * as API from "../../services";
import Login from "../Login";
import Chat from "../Chat";
import Home from "../Home";
import SignUp from "../SignUp";
import { useLogin } from "../context/Login";
import { useSignUp } from "../context/SignUp";
import { Card } from "../Card";

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
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <GlobalStyles className="GlobalStyles" />
      <Card inputs={["Name", "Age"]}></Card>
      {/* <S.AppWrapper className="AppWrapper">
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
      </S.AppWrapper> */}
    </>
  );
}

export default App;
