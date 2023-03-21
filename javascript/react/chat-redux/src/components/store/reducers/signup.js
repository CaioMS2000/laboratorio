const initialState = {
    signedUp: false,
}

export default function signup(state = initialState, action){

    if(action.type === "SIGNUP"){
        return{
            ...state,
            signedUp: action.signedUp,
        };
    }

    return {...state};
}