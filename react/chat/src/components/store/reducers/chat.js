const initialState = {
    messages: [
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
        {
            nickname: 'John',
            message: 'slhfgowief'
        },
        {
            nickname: 'Chris',
            message: 'efpoejf0wj0ef'
        },
        {
            nickname: 'Lis',
            message: '4g6r5g56rg'
        },
        {
            nickname: 'Maria',
            message: '4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg 4g6r5g56rg4 efpoejf0wj0efg6r 5g56rg '
        },
    ]
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

    return state;
}