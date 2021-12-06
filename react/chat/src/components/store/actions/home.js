export function register (){
    console.log("action")
    return{
        type: 'REGISTER',
        signingUp: true,
    }
}