import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { LoginProvider } from "./components/context/Login";
import { SignUpProvider } from "./components/context/SignUp";
import { MessageProvider } from "./components/context/Message";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <SignUpProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </SignUpProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
