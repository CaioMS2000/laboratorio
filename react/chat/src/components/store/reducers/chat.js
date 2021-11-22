const initialState = {
    messages: []
}

export default function send(state = initialState, action){

    if(action.type === "SEND_MESSAGE"){
        return{
            ...state,
            messages: (state.messages.push(action.message))
        };
    }

    return state;
}