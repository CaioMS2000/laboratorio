import React, { useRef, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";

import * as S from "./styles";
import LoginContext, { useLogin } from "../context/Login";

const Login = () => {
  const nickInput = useRef();
  const passwordInput = useRef();
  const button = useRef();
  const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const handleLogin = async (n, p) => {
    console.log("handle");
    return await login(n, p);
  };

  return (
    <>
      <S.Container>
        <S.Title>
          <p style={{ lineHeight: "17vw" }}>LOGIN</p>
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
              onClick={() =>
                handleLogin(
                  nickInput.current.value,
                  passwordInput.current.value
                )
              }
              ref={button}
            >
              <BsArrowRightSquareFill
                style={{ width: "10vw", height: "10vh" }}
              />
            </S.Button>
          </IconContext.Provider>
        </S.Body>
      </S.Container>
    </>
  );
};

export default Login;
