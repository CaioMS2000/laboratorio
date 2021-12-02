const initialState = {
    logedIn: false,
    nickname: '',
    password: ''
}

const url = "http://127.0.0.1:8000/"
const makePost = (nickname, password) => {
    // fetch(url + "users/", {
    //     method: 'POST',
    //     mode: 'cors',
    //     cache: 'default',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    // })

    console.log("stringfy", JSON.stringify({nickname, password}));
    return fetch(url + "users/", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({nickname, password})
    });
}

export default function logon(state = initialState, action){

    if(action.type === "LOGIN"){
       
        // makePost(action.nickname, action.password).then((resp) => {
        //     try{
        //         console.log("resp", resp)
        //         if(resp.statusText === "Bad Request"){
        //             console.log("Bad Request")
        //             return {...state}
        //         }

        //         else if(resp.status === 200){
        //             console.log("deu certo, colocando: ", action.logedIn, action.nickname)
        //             return{
        //                 ...state,
        //                 logedIn: action.logedIn,
        //                 nickname: action.nickname,
        //                 password: action.password
        //             };
        //         }

        //         else throw resp;
        //     }catch(e){
        //         console.log(e)
        //     }
        // })
        // console.log("saiu do try")

        const getLoginResponse = async () => {

            const response = await makePost(action?.nickname, action?.password);
            console.log(response);

        }

        getLoginResponse()


    }

    else if(action.type === "LOGOUT"){
        return{
            ...state,
            logedIn: false,
            nickname: '',
            password: ''
        };
    }

    return state;
}