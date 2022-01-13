import React, { useRef, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";

import * as S from "./styles";
import LoginContext, { useLogin } from "../context/Login";
import { useWindow } from "../context/Window";

const Login = () => {
  const nickInput = useRef();
  const passwordInput = useRef();
  const button = useRef();
  const { logedIn, setLogedIn, login, user, setUser } = useLogin();
  const { windowSize, setWindowSize } = useWindow();
  const handleLogin = async (n, p) => {
    return await login(n, p);
  };

  return (
    <>
      <S.Container className="container">
        <S.Title className="title">
          <p style={{ lineHeight: "17vw", color: "#272932" }}>LOGIN</p>
        </S.Title>
        <S.Body className="body">
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
          <IconContext.Provider
            value={{
              color: "#5c5a5a",
              size: `${windowSize.width > 554 ? 10 : 7}vw`,
            }}
          >
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
              // style={{ width: "30vw", height: "10vh" }}
              />
            </S.Button>
          </IconContext.Provider>
        </S.Body>
      </S.Container>
    </>
  );
};

export default Login;
