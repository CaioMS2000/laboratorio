console.log('Main JS')

let usernameInput = document.querySelector('#username')
let btnJoin = document.querySelector('#btn-join')

let username;
let webSocket;

const webSocketOnMessage = event => {
    let parseData = JSON.parse(event.data)
    let message = parseData['message']
    console.log(`Message -> ${message}`)
}

btnJoin.addEventListener('click', () => {
    username = usernameInput.value
    
    console.log(`Username -> ${username}`)

    if(username == ''){
        return;
    }
    
    usernameInput.value = ''
    usernameInput.disable = true
    usernameInput.style.visibility = 'hidden'
    
    btnJoin.disable = true
    btnJoin.style.visibility = 'hidden'

    let labelUsername = document.querySelector('#label-username')
    labelUsername.innerHTML = username

    let loc = window.location
    let wsStart = loc.protocol == 'https:'? 'wss://':'ws://'
    let endPoint = wsStart + loc.host + loc.pathname

    console.log(`endPoint -> ${endPoint}`)

    webSocket = new WebSocket(endPoint)

    webSocket.addEventListener('open', e => {
        console.log('New connection')

        let jsonStr = JSON.stringify({
            'message': 'Any message'
        })

        webSocket.send(jsonStr)
    })
    webSocket.addEventListener('message', webSocketOnMessage)
    webSocket.addEventListener('close', e => {
        console.log('Connection closed')
    })
    webSocket.addEventListener('error', e => {
        console.log('Error occurred')
    })
})

let localStream = new MediaStream();
const constraints = {'video': true, 'audio': true}
const localVideo = document.querySelector('#local-video')
let userMedia = navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    localStream = stream;
    localVideo.srcObject = localStream;
    localVideo.muted = true;
}).catch(error => {
    console.log('# Error accessing media devices', error)
})