import React, { createContext, useState, useContext, useEffect } from "react";

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) throw new Error("useToken must be used within a TokenProvider");
  const { token, setToken } = context;
  return { token, setToken };
}
