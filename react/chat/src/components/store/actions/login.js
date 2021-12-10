import * as API from '../../../services/'

export function login(nick, pswd){
        
    // API.getUserByNick(nick).then(r => r.json()).then(r => {
    //     console.log("sem await", r);
    // });

    const f = async () => {
        try {
            const response = await API.getUserByNick(nick);
            const data = await response.json()
            console.log(data)      
        } catch (error) {
            const {data, status} = error;
            console.log(data)
            console.log(status)
        }


    }
    
    f();
    console.log("final");
    
    return{
        type: 'LOGINN',
        nickname: nick,
        password: pswd,
        logedIn: true
    }

    // return{
    //     type: "FAIL"
    // };   

}

export function logout(){
    return{
        type:"LOGOUT"
    }
}