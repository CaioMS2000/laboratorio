import React, { createContext, useState, useContext } from "react";

import * as API from "../../services";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({});
  const login = async (nick, pswd) => {
      console.log("iniciando função Login")
    if (typeof nick != "object") {
      const response = await API.getUserByNick(nick);
      const data = await response.json();

      // console.log(`buscando ${nick}#`)
      console.log(data);
      console.log("login context");
      if (data.detail === undefined) {
        if (data.password === pswd) {
          console.log("logado com sucesso");
          setLogedIn(true);
        } else {
          console.log("login falhou, a senha está errada");
        }
      } else {
        console.log("login falhou, usuário não existe");
      }
    }
    else{
        console.log("não passou nome")
    }
  };

  return (
    <LoginContext.Provider
      value={{
        logedIn,
        setLogedIn,
        login,
        user,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");
  const { logedIn, setLogedIn, login, user, setUser } = context;
  return { logedIn, setLogedIn, login, user, setUser };
}
