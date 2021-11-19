import React, { createContext, useState, useContext } from "react";

const MessageContext = createContext();

export default function MessageProvider({ children }) {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useCount must be used within a MessageProvider");
  const { message, setMessage } = context;
  return { message, setMessage };
};
