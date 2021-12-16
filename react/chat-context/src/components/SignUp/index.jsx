import React, { useRef, useEffect } from "react";
import { IconContext } from "react-icons";

import * as S from "./styles";
import * as API from "../../services";
import { useSignUp } from "../context/SignUp";

const SignUp = () => {
  const nickInput = useRef();
  const passwordInput = useRef();
  const button = useRef();
  const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();
  const clearInputs = () => {
    nickInput.current.value = "";
    passwordInput.current.value = "";
  };
  const handleRegister = async (nick, pswd) => {
    const res = await API.sendUser(nick, pswd);
    // console.log(res);
    if (res.detail === undefined) {
      const json = await res.json();
      console.log(json);
      clearInputs();
      setSignedUp(true);
      setSigningUp(false);
    } else {
      console.log(res.detail);
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>
          <p style={{ lineHeight: "25vh" }}>SIGN UP</p>
        </S.Title>
        <S.Body>
          <S.Input
            type="text"
            ref={nickInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                passwordInput.current.focus();
              }
            }}
          />
          <S.Input
            type="text"
            ref={passwordInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                button.current.click();
              }
            }}
          />
          <IconContext.Provider value={{ color: "#9c9c9c", size: "50px" }}>
            <S.Button
              onClick={() => {
                handleRegister(
                  nickInput.current.value,
                  passwordInput.current.value
                );
              }}
              ref={button}
            >
              REGISTER
            </S.Button>
          </IconContext.Provider>
        </S.Body>
      </S.Container>
    </>
  );
};

export default SignUp;
