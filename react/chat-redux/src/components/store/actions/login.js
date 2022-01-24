
export function login(nick, pswd){
    console.log("action", nick, pswd)
    return{
        type: 'LOGIN',
        nickname: nick,
        password: pswd,
        logedIn: true
    }
}

export function logout(){
    return{
        type:"LOGOUT"
    }
}