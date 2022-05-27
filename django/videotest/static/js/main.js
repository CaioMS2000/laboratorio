console.log('Main JS')

let mapPeers = {}

let messageList = document.querySelector('#message-list')
let usernameInput = document.querySelector('#username')
let btnJoin = document.querySelector('#btn-join')

let username;
let webSocket;

const webSocketOnMessage = event => {
    let parseData = JSON.parse(event.data)
    let peerUsername = parseData['peer']
    let action = parseData['action']

    if (username == peerUsername)
        return;
    
    let receiver_channel_name = parseData['message']['receiver_channel_name']

    if(action == 'new-peer'){
        createOffer(peerUsername, receiver_channel_name)
        return;
    }

    if(action == 'new-offer'){
        let offer = parseData['message']['sdp']

        createAnswer(offer, peerUsername, receiver_channel_name)
    }

    if(action == 'new-answer'){
        let answer = parseData['message']['sdp']
        let peer = mapPeers[peerUsername][0]

        peer.setRemoteDescription(answer)

        return;
    }
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

        sendSignal('new-peer', {})

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
const btnToggleAudio = document.querySelector('#btn-toggle-audio')
const btnToggleVideo = document.querySelector('#btn-toggle-Video')

let userMedia = navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    localStream = stream;
    localVideo.srcObject = localStream;
    localVideo.muted = true;

    let audioTracks = stream.getAudioTracks()
    let videoTracks = stream.getVideoTracks()

    audioTracks[0].enabled = true
    videoTracks[0].enabled = true

    btnToggleAudio.addEventListener('click', () => {
        audioTracks[0].enabled = !audioTracks[0].enabled

        btnToggleAudio.innerHTML = 'Audio '
        btnToggleAudio = audioTracks[0].enabled? 'Mute':'Unmute'
    })

    btnToggleVideo.addEventListener('click', () => {
        videoTracks[0].enabled = !videoTracks[0].enabled

        btnToggleVideo.innerHTML = 'Video '
        btnToggleVideo = videoTracks[0].enabled? 'Off':'On'
    })
}).catch(error => {
    console.log('# Error accessing media devices', error)
})

let btnSendMsg = document.querySelector('#btn-send-msg')

let messageInput = document.querySelector('#msg')
// const sendMsgOnClick = () => {
//     let message = messageInput.value
//     let li = document.createElement('li')

//     li.appendChild(document.createTextNode('Me: '+message))
//     messageList.appendChild(li)
    
//     let dataChannels = getDataChannels()
    
//     message = `${username}: ${message}`
    
//     for(index in dataChannels){
//         dataChannels[index].send(message)
//     }
    
//     messageInput.value = ''
// }
function sendMsgOnClick(){
    let message = messageInput.value
    let li = document.createElement('li')

    li.appendChild(document.createTextNode('Me: '+message))
    messageList.appendChild(li)
    
    let dataChannels = getDataChannels()
    
    message = `${username}: ${message}`
    
    for(index in dataChannels){
        dataChannels[index].send(message)
    }
    
    messageInput.value = ''
}
btnSendMsg.addEventListener('click', sendMsgOnClick)

function sendSignal(action, message){
    
    let jsonStr = JSON.stringify({
        'peer': username,
        'action': action,
        'message': message,
    })
    
    webSocket.send(jsonStr)
}

const createOffer = (peerUsername, receiver_channel_name) => {
    let peer = new RTCPeerConnection(null)

    addLocalTracks(peer)

    let dc = peer.createDataChannel('channel')
    dc.addEventListener('open', () => {
        console.log('Connection opened')
    })
    dc.addEventListener('message', dcOnMessage)

    let remoteVideo = createVideo(peerUsername)
    setOnTrack(peer, remoteVideo)

    mapPeers[peerUsername] = [peer, dc]

    peer.addEventListener('iceconnectionstatechange', () => {
        let iceConnectionState = peer.iceConnectionState

        if(['failed', 'disconnected', 'closed'].findIndex(element => {
            return element === iceConnectionState
        }) > -1){
            delete mapPeers[peerUsername]

            if(iceConnectionState != 'closed'){
                peer.close()
            }

            removeVideo(remoteVideo)
        }
    })

    peer.addEventListener('icecandidate', (event) => {
        if(event.candidate){
            console.log('New ice candidate: ', JSON.stringify(peer.localDescription))
            return;
        }

        sendSignal('new-offer', {
            'sdp': peer.localDescription,
            'receiver_channel_name': receiver_channel_name
        })
    })

    peer.createOffer().then((o) => { peer.setLocalDescription(o) }).then(() => { console.log('Local description set successfully') })
}

const createAnswer = (offer, peerUsername, receiver_channel_name) => {
    let peer = new RTCPeerConnection(null)

    addLocalTracks(peer)

    let remoteVideo = createVideo(peerUsername)
    setOnTrack(peer, remoteVideo)

    peer.addEventListener('datachannel', (e) => {
        peer.dc = e.channel

        peer.dc.addEventListener('open', () => {
            console.log('Connection opened')
        })
        peer.dc.addEventListener('message', dcOnMessage)

        mapPeers[peerUsername] = [peer, peer.dc]
    })

    peer.addEventListener('iceconnectionstatechange', () => {
        let iceConnectionState = peer.iceConnectionState

        if(['failed', 'disconnected', 'closed'].findIndex(element => {
            return element === iceConnectionState
        }) > -1){
            delete mapPeers[peerUsername]

            if(iceConnectionState != 'closed'){
                peer.close()
            }

            removeVideo(remoteVideo)
        }
    })

    peer.addEventListener('icecandidate', (event) => {
        if(event.candidate){
            console.log('New ice candidate: ', JSON.stringify(peer.localDescription))
            return;
        }

        sendSignal('new-answer', {
            'sdp': peer.localDescription,
            'receiver_channel_name': receiver_channel_name
        })
    })

    peer.setRemoteDescription(offer).then(() => {
        console.log('Remote descriptio set succesfully for %s.', peerUsername)
        return peer.createAnswer()
    }).then((a) => {
        console.log('Answer created')

        peer.setLocalDescription(a)
    })
}

const addLocalTracks = (peer) => {
    localStream.getTracks().forEach(track => {
        peer.addTrack(track, localStream)
    })
}

const dcOnMessage = (event) => {
    let message = event.data
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(message))
    messageList.appendChild(li)
}

const createVideo = (peerUsername) => {
    let videoContainer = document.querySelector('#video-container')

    let remoteVideo = document.createElement('video')
    remoteVideo.id = peerUsername+'-video'
    remoteVideo.autoplay = true
    remoteVideo.playsInline = true

    let videoWrapper = document.createElement('div')

    videoContainer.appendChild(videoWrapper)
    videoWrapper.appendChild(remoteVideo)

    return remoteVideo
}

const setOnTrack = (peer, remoteVideo) => {
    let remoteStream = new MediaStream()

    remoteVideo.srcObject = remoteStream

    peer.addEventListener('track', async event => {
        remoteStream.addTrack(event.track, remoteStream)
    })
}

const removeVideo = (video) => {
    let videoWrapper = video.parentNode

    videoWrapper.parentNode.removeChild(videoWrapper)
}

const getDataChannels = () => {
    let dataChannels = []

    for(peerUsername in mapPeers){
        let datachannel = mapPeers[peerUsername][1]

        dataChannels.push(datachannel)
    }

    return dataChannels
}