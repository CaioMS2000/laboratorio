import { Server, Socket } from 'socket.io'

const PORT = 8081
const io = new Server({
    path: "/",
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
})
var AllData = []
//io.on('', () => {})

function addData(data){
    while(AllData.length > 100){
        AllData.shift()
    }

    AllData.push(data)
}
    
io.on("connection", (socket) => {
    const D = new Date();

    console.log(`${D.getHours()}:${D.getMinutes()}:${D.getSeconds()} -> socket connected: ${socket.id}`)

    socket.on('sendMessage', (data) => {
        console.log('recebeu uma mensagem no socket')
        addData(data)
        console.log(`${AllData}\ntotal de mensagens: ${AllData.length}\n`)
    
        io.sockets.emit('newMessageOnServer')
    })
    
    socket.on('test', () => {
        console.log('testou')
    })
    
    socket.on('getMessages', (socket_) => {
        console.log('recebeu um pedido pelas mensagens\n')
        AllData.forEach(e => { console.log(`${e.username}: ${e.message}; `) })
        console.log('\n')
        io.emit('sendMessages', {
            client: socket.id,
            messages: AllData
        })
        console.log('realizou o pedido')
    })
})

io.listen(PORT);