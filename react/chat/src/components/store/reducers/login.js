const initialState = {
    logedIn: false,
    nickname: '',
    password: ''
}

const url = "http://127.0.0.1:8000/"
const makePost = (nickname, password) => {

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

        const getLoginResponse = async () => {

            const response = await makePost(action?.nickname, action?.password);
            console.log(response);

        }

        getLoginResponse()

        return{
            ...state,
            logedIn: action.logedIn,
            nickname: action.nickname,
            password: action.password
        };

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