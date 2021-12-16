import React from "react";

import * as S from "./styles";
// import {useLogin} from '../context/Login';
import { useSignUp } from "../context/SignUp";

const Home = () => {
  // const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();

  return (
    <S.Container>
      <S.Label>LIVE CHAT</S.Label>
      <S.Button
        onClick={() => {
          console.log("login");
          setSignedUp(true);
          setSigningUp(false);
          console.log("signedUp ", signedUp, "signingdUp", signingUp);
        }}
      >
        LOGIN
      </S.Button>
      <S.Button
        onClick={() => {
          console.log("sign up");
          setSignedUp(false);
          setSigningUp(true);
          console.log(signedUp, signingUp);
        }}
      >
        SIGN UP
      </S.Button>
    </S.Container>
  );
};

export default Home;
