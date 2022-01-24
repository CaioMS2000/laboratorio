const initialState = {
    // messages: [
    //     {
    //         id: 0,
    //         sent_date: "2021-12-02T13:35:53.871611",
    //         num_char: 0,
    //         deleted: false,
    //         content: "string",
    //         owner_id: 0
    //       }
    // ]
    messages: []
}

export default function send(state = initialState, action){

    if(action.type === "SEND_MESSAGE"){
        return{
            ...state,
            messages: (state.messages.concat({
                nickname: action.nickname,
                message: action.message
            }))
        };
    }
    
    else if(action.type === "STORED_MESSAGES"){
        console.log("dentro da action", action.payload);
        console.log("concatenado", state.messages.concat(action.payload))
        return{
            ...state,
            messages: (state.messages.concat(action.payload))
        };
    }

    return {...state};
}