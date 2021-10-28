<template>
  <login v-if="username.length == 0" @send-nick = "getNick"></login>
  <chat v-else  :messages = "messages" :username = "username" @send-message = "insertMessage" @chat-mounted = "stripes"></chat>
</template>

<script>
import chat from './components/chat.vue'
import login from './components/login.vue'
import config from './services/config'
import { io } from "socket.io-client"
import {event} from './emitter'

const socket = io('http://localhost:8081', { transports : ['websocket'] })
socket.emit('test')

export default {
  name: 'App',
  components: {
    chat, login
  },
  data(){
    return{
      username:'',
      OddEven:1,
      messages: [],
      messageID: 0,
      socketID: ''
    }
  },
  methods:{
    getNick(un){
      this.username = un
    },
    updateMessages(){
      /*config.get().then(res => {
        this.messages = []
        Object.keys(res.data.data).forEach(i => {
          res.data.data[i] = res.data.data[i].data
          this.messages.push(res.data.data[i])
        })
      })*/
      socket.emit('getMessages')
      socket.on('sendMessages', data => {
        this.messages = []
        this.messages = data.messages
        console.log('array:\n', this.messages)
      })
    },
    insertMessage(msg){
      const chat = document.querySelector('.messages')

      /*chat.innerHTML += `<div class="message ${(this.OddEven > 0)?"odd":"even"}"><p><span class="nickname">${msg.username}:</span> &nbsp; ${msg.message}</p></div>`*/

      /*this.OddEven *= -1

      const obj = {
        data:{
          username: msg.username,
          message: msg.message,
          id: this.messageID
        }
      }
      console.log('obj#', obj, '\n')

      config.add(obj)

      this.messageID++

      this.updateMessages()*/
      const obj = {
        username: msg.username,
        message: msg.message,
        id: this.messageID
      }
      this.messageID++

      socket.emit('sendMessage', obj)
    },
    stripes(){
      const chat = document.querySelector('.messages')

      if(chat != null){
        chat.childNodes.forEach((element, index) => {
        if(element.classList != undefined){
            element.classList.add(`${(this.OddEven > 0)?"odd":"even"}`)
            this.OddEven *= -1
          }
        })
      }
    }
  },
  created(){
    this.updateMessages()

    socket.on('newMessageOnServer', (useless) => {
      useless;
      this.updateMessages()
    })

    socket.on('connected', () => {console.log('conectou com sucesso')})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
