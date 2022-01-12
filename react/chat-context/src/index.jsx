import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { LoginProvider } from "./components/context/Login";
import { SignUpProvider } from "./components/context/SignUp";
import { MessageProvider } from "./components/context/Message";
import { WindowProvider } from "./components/context/Window";

ReactDOM.render(
  <React.StrictMode>
    <WindowProvider>
      <LoginProvider>
        <SignUpProvider>
          <MessageProvider>
            <App />
          </MessageProvider>
        </SignUpProvider>
      </LoginProvider>
    </WindowProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
