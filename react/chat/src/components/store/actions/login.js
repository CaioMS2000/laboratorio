import * as API from '../../../services/'

export function login(nick, pswd){
    let res = {};

    // (async() => {
    //     const res = await API.getUserByNick(nick);
    //     console.log(res);        
        
    //     if(res.status === 200){
    //         return{
    //             type: 'LOGINN',
    //             nickname: nick,
    //             password: pswd,
    //             logedIn: true
    //         }
    //     }
    // })();
            
    API.getUserByNick(nick).then(r => r.json()).then(r => {
        console.log(r)
        if(!r.detail){
            res["nickname"] = r.nickname,
            res["password"] = r.password
        }
    });

    console.log(res);

    return{
        type: "FAIL"
    };
    

}

export function logout(){
    return{
        type:"LOGOUT"
    }
}