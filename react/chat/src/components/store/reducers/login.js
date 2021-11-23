const initialState = {
    logedIn: false,
    nickname: ''
}

export default function logon(state = initialState, action){

    if(action.type === "SEND_NICK"){
        return{
            ...state,
            logedIn: action.logedIn,
            nickname: action.nick
        };
    }
    else if(action.type === "LOGOUT"){
        return{
            ...state,
            logedIn: false,
            nickname: ''
        };
    }

    return state;
}