import React, {createContext, useState} from 'react';

import * as API from '../../../services';

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [logedIn, setLogedIn] = useState(false)
    const Login = async () => {
        const response = await API.getUserByNick('john')
        const data = await response.json();

        console.log(data);
    }

    return (
        <LoginContext.Provider value = {{
            logedIn,
            setLogedIn
        }}>
            {children}
        </LoginContext.Provider>
    );
}