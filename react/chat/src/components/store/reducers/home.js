const initialState = {
    signingUp: false,
}

export default function register(state = initialState, action){

    if(action.type === "REGISTER"){
        console.log("reducer")
        return{
            ...state,
            signingUp: action.signingUp,
        };
    }

    return {...state};
}