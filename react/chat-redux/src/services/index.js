const url = "http://127.0.0.1:8000/";

// const makePost = (nickname, password) => {

//     console.log("stringfy", JSON.stringify({nickname, password}));
//     return fetch(url + "users/", {
//         method: 'POST',
//         headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({nickname, password})
//     });
// }

// export async function get_messages(){
export const getMessages = () => {
  
    return fetch(url + "messages");
}


export const getUserByNick = (nick) => {
    return fetch(url + "users/?user_nick=" + nick);
}

export const getUserById = (id) => {
    return fetch(url + "users/?user_id=" + id);
}