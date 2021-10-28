import http from 'http'
import express from 'express'
import cors from 'cors'
import { Server, Socket } from 'socket.io'

const app = express()
const router = express.Router()
const PORT = 8081
const server = http.createServer(app)
//const socketio = new Server(server)
/*const io = require("socket.io")(8081, {
    path: "/",
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
  });*/

const io = new Server({
path: "/",
serveClient: false,
// below are engine.IO options
pingInterval: 10000,
pingTimeout: 5000,
cookie: false
})

io.on("connection", (socket) => {
    console.log(`socket connected: ${socket.id}`)
})

io.listen(PORT);

server.listen(PORT+1, () => { console.log(`Server listening to port: ${PORT+1}`) })

app.use(cors())

var data = []

router.get('/', (req, res, next) => {
    console.log('GET\ntamanho de \"data\": ', data,data.length, '\n\n')
    res.send({msg:'UTILIZOU O GET', data})
})

router.post('/', (req, res, next) => {
    console.log('chegou na API')
    data.push(req.body);
    console.log(data)
   
    console.log('POST\ntamanho de \"data\": ', data.length, '\n\n')

    io.sockets.emit('newMessageOnServer', {})
    console.log('postou e emitiu')
    res.send({msg:'UTILIZOU O POST', data})
})

router.delete('/', (req, res, next) => {
    console.log(req.body)
    console.log('DELETE\ntamanho de \"data\": ', data.length, '\n\n')
    
    res.send({msg:'UTILIZOU O DELETE', data})    
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', router)

app.use((req, res, next) => {
    const error = new Error('not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{mensagem:error.message}
    })
})

export {app, router, PORT}