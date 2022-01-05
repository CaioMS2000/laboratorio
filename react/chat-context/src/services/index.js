import useWebSocket from "react-use-websocket";

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

// export const connectSocket = () => {
//   const date = new Date();
//   const socket_id = `${date.getFullYear()}${
//     date.getMonth() + 1
//   }${date.getDate()}${date.getHours()}${date.getMinutes}${date.getSeconds()}${
//     date.getMilliseconds
//   }`;

//   console.log(socket_id);

//   // const ws = new WebSocket("ws://localhost:8000/ws/" + socket_id);
//   const { lastJsonMessage, sendMessage } = useWebSocket(
//     "ws://localhost:8000/ws/" + socket_id,
//     {
//       onOpen: () => console.log(`Connected to App WS`),
//       onMessage: () => {
//         if (lastJsonMessage) {
//           console.log(lastJsonMessage);
//         }
//       },
//       // queryParams: { 'token': '123456' },
//       onError: (event) => {
//         console.error(event);
//       },
//       shouldReconnect: (closeEvent) => true,
//       reconnectInterval: 3000,
//     }
//   );

//   return { socket_id, ws };
// };

export const sendUser = (nickname, password) => {
  console.log("stringfy", JSON.stringify({ nickname, password }));
  return fetch(url + "users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname, password }),
  });
};

export const sendMessage = (userID, content) => {
  console.log("stringfy", JSON.stringify({ owner_id: userID, content }));
  return fetch(url + "messages/users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ owner_id: userID, content }),
  });
};

export const getMessages = () => {
  return fetch(url + "messages");
};

export const getUserByNick = (nick) => {
  return fetch(url + "users/?user_nick=" + nick);
};

export const getUserById = (id) => {
  return fetch(url + "users/?user_id=" + id);
};
