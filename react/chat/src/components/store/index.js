import {createStore} from 'redux';

const initialState = {
    logedIn: false,
    nickname: ''
}
function reducer(state = initialState, action){
    return {...state};
}

const store = createStore(reducer);

export default store;