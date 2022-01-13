import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "../styles/Global";
import * as S from "./styles";
import Login from "../Login";
import Chat from "../Chat";
import Home from "../Home";
import SignUp from "../SignUp";
import LoginContext, { useLogin } from "../context/Login";
import { SignUpProvider, useSignUp } from "../context/SignUp";

function App() {
  const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();
  const nickname = user.nickname;

  return (
    <>
      {logedIn && (
        <S.UserName className="UserName">
          <span
            onClick={() => {
              setSignedUp(false);
              setSigningUp(false);
              setLogedIn(false);
              setUser({ nickname: "" });
            }}
            className="global-nick"
            style={{ cursor: "pointer" }}
          >
            {nickname}
          </span>
        </S.UserName>
      )}
      <S.AppWrapper className="AppWrapper">
        <GlobalStyles className="GlobalStyles" />
        {signedUp ? (
          logedIn ? (
            <Chat />
          ) : (
            <Login />
          )
        ) : signingUp ? (
          <SignUp />
        ) : (
          <Home />
        )}
      </S.AppWrapper>
    </>
  );
}

export default App;
