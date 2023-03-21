import { combineReducers } from "redux";

import send from "./chat";
import logon from "./login";
import signup from "./signup";
import register from "./home";

export default combineReducers({
    send,
    logon,
    signup,
    register
});