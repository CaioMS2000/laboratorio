import * as API from '../../../services/'

export function login(nick, pswd){

    API.getUserByNick(nick).then((resp) => resp.json()).then(data => {
        console.log("user nick", data)
      })
    
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