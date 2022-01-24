const initialState = {
    logedIn: false,
    nickname: '',
    password: ''
}

export default function logon(state = initialState, action){

    if(action.type === "LOGIN"){

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