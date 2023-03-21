export function sendMessage(msg, nickname){
    return{
        type: 'SEND_MESSAGE',
        message: msg,
        nickname: nickname,
    }
}

export function loadMessages(objarr){
    console.log("load messages", objarr);
    return{
        type: 'STORED_MESSAGES',
        payload: objarr
    }
}