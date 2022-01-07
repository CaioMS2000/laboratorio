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
          setSignedUp(true);
          setSigningUp(false);
        }}
      >
        LOGIN
      </S.Button>
      <S.Button
        onClick={() => {
          setSignedUp(false);
          setSigningUp(true);
        }}
      >
        SIGN UP
      </S.Button>
    </S.Container>
  );
};

export default Home;
