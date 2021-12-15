import React, {createContext, useState} from 'react';

import * as API from '../../services';

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [logedIn, setLogedIn] = useState(false);
    const [user, setUser] = useState({});
    const Login = async (nick, pswd) => {
        const response = await API.getUserByNick(nick)
        const data = await response.json();

        console.log(data);
        console.log("context");
        if(data.detail === undefined){
            if(data.password === pswd){
                console.log("logado com sucesso")
                setLogedIn(true);
            }
            else{
                console.log("login falhou, a senha está errada")
            }
        }
        else{
            console.log("login falhou, usuário não existe")
        }
    }

    return (
        <LoginContext.Provider value = {{
            logedIn, setLogedIn, Login, user, setUser
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;