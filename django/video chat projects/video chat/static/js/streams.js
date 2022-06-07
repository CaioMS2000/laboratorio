const APP_ID = '8dd6a3ad450348529810a670823dc695'
const CHANNEL = sessionStorage.getItem('room')
const TOKEN = sessionStorage.getItem('token')
let UID = Number(sessionStorage.getItem('UID'))
let NAME = sessionStorage.getItem('name')

console.log("\n# CREATE CLIENT\n")
const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})
console.log("\n#\n\n")
let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    client.on('user-published', handleUserJoined)
    client.on('user-left', handleUserLeft)

    document.getElementById('room-name').innerText = CHANNEL

    console.log("\n# JOIN\n")
    console.log(APP_ID, CHANNEL, TOKEN, UID)
    try{
        await client.join(APP_ID, CHANNEL, TOKEN, UID)
    }catch(error){
        console.log("ERRO\n")
        console.log(error)
        window.open('/', '_self')
    }
    console.log("\n#\n\n")
    
    console.log("\n# CREATE MIC AND CAM\n")
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
    console.log("\n#\n\n")

    let member = await createMember()
    
    let player =`<div class="video-container" id="user-container-${UID}">
    <div class="username-wrapper"><span class="user-name">${member.name}</span></div>
    <div class="video-player" id="user-${UID}"></div>
    </div>  `
    
    document.getElementById("video-streams").insertAdjacentHTML('beforeend', player)
    
    console.log("\n# PLAY\n")
    localTracks[1].play(`user-${UID}`)
    console.log("\n#\n\n")
    
    console.log("\n# PUBLISH\n")
    await client.publish([localTracks[0], localTracks[1]])
    console.log("\n#\n\n")

    // document.getElementById('cam-btn').click()
    // document.getElementById('mic-btn').click()
}

let handleUserJoined = async (user, mediaType) => {
    remoteUsers[user.uid] = user
    await client.subscribe(user, mediaType)

    if(mediaType === 'video'){
        let player = document.getElementById(`user-conatainer-${user.uid}`)

        if(player != null){
            player.remove()
        }

        let member = await getMember(user)

        player =`<div class="video-container" id="user-container-${user.uid}">
                <div class="username-wrapper"><span class="user-name">${member.name}</span></div>
                <div class="video-player" id="user-${user.uid}"></div>
                </div>  `
    
    document.getElementById("video-streams").insertAdjacentHTML('beforeend', player)
    user.videoTrack.play(`user-${user.uid}`)
    }

    if(mediaType === 'audio'){
        user.audioTrack.play()
    }
}

let handleUserLeft = async user => {
    delete remoteUsers[user.uid]

    document.getElementById(`user-container-${user.uid}`).remove()
}

let leaveAndRemoveLocalStream = async () => {
    for(let i = 0; localTracks.length > i; i++){
        localTracks[i].stop()
        localTracks[i].close()
    }

    await client.leave()
    deleteMember()
    window.open('/', '_self')
}

let toggleCamera = async (e) => {
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }
    else{
        await localTracks[1].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}

let toggleMic = async (e) => {
    if(localTracks[0].muted){
        await localTracks[0].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }
    else{
        await localTracks[0].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}

let createMember = async () => {
    let response = await fetch('/create_member/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'name':NAME, 'room_name':CHANNEL, 'UID':UID})
    })

    let member = await response.json()

    return member
}

let getMember = async (user) => {
    let response = await fetch(`/get_member/?UID=${user.uid}&room_name=${CHANNEL}`)
    let member = await response.json()
    
    return member
}

let deleteMember = async () => {
    let response = await fetch('/delete_member/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'name':NAME, 'room_name':CHANNEL, 'UID':UID})
    })

    let member = await response.json()
}

joinAndDisplayLocalStream()

document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('cam-btn').addEventListener('click', toggleCamera)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
window.addEventListener('beforeunload', deleteMember)