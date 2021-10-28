import express from "express"
import http from "http"
import { Server, Socket } from 'socket.io'
import ejs from 'ejs'
const app = express()
const server = http.createServer(app)
const socketio = new Server(server)
let users = new Map()
let messages = []

app.use(express.static('./'))
app.set('views', './')
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.use('/', (req, res) => {
    res.render('login.html')
})

socketio.on('connection', socket => {
    console.log(`socket connected: ${socket.id}`);

    socket.emit('previousMessages', messages)

    socket.on('sendNick', data => {
        console.log(`recebendo nick: ${data.username} | ${data.id}`)
        users.set(data.id, data.username)
    })

    socket.on('sendMessage', data => {
        console.log(`recebendo mensagem: ${data.username} | ${data.message}`)
        messages.push(data)

        socket.broadcast.emit('receivedMessage', data)
    })

    socket.on('requestNick', () => {
        let string = Array.from(users.values()).pop()
        console.log(`emitindo nick: ${string}`)
        socket.emit('answerOfrequestNick', string)
    })
})

server.listen(3000, () => console.log('listening on port 3000!'))