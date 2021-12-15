import React, {createContext, useState} from 'react';

import * as API from '../../../services';

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [logedIn, setLogedIn] = useState(false)
    const Login = async (nick, pswd) => {
        const response = await API.getUserByNick(nick)
        const data = await response.json();

        console.log(data);
        console.log("context");
        if(data.detail === undefined){
            console.log("existe")
            return /*LoginActions.login(data.nickname, data.password);*/0
        }
        else{
            return{
                type:"FAIL"
            }
        }
    }

    return (
        <LoginContext.Provider value = {{
            logedIn,
            setLogedIn,
            Login
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;