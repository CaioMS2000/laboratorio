<template>
  <div class="chat-container">
    <div class="messages">
      <div class="message"
      v-for = "(m, index) in this.messages" :key = "m.id" :class = "{'odd': index%2 == 0, 'even': index%2 != 0}" >
        <span><strong class="nickname">{{m.username}}</strong></span><span>{{m.message}}</span>
      </div>
    </div>
    <div class="type-send">
      <textarea type="text" v-model = "message" id="messageInput" v-on:keydown.enter = "SendMessage"></textarea>
      <button id = "sendMessage" v-on:click.stop.prevent = "SendMessage"><i class="fas fa-arrow-circle-right"></i></button>
    </div>
  </div>
</template>

<script>
import {event} from '../emitter'

export default {
  name: 'chat',
  props:{
    username: {type: String},
    messages: {type: Array}
  },
  data(){
    return{
      message: '',
      OddEven:1
    }
  },
  methods:{
    SendMessage(){

      if(this.message.length == 0){
        return;
      }

      this.$emit('send-message',{
        username: this.username,
        message: this.message
      })

      this.message = ''
      this.pageScroll()
    },
    pageScroll(time = 500) {
      const chat = document.querySelector('.messages')

      if(chat == undefined || chat == null){
        return;
      }

      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight
      }, time)
    }
  },
  mounted(){
    this.$emit('chat-mounted')
    this.pageScroll(100)
    console.log('mounted')
  },
  created(){
    this.pageScroll(100)
    console.log('created')
  },
  updated(){
    this.pageScroll(100)
    console.log('updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 *{
   font-size: 12pt;
 }

 .chat-container{
   margin: 2.5vh auto;
   height: 95vh;
   width: 60vw;
   background-color: rgba(179, 24, 24, 0);
 }

 .messages {
   height: 93%;
   width: 100%;
   background-color: rgb(32, 35, 44);
   padding: 10px 0;
   border-radius: 10px 10px 0 0;   
   color: rgb(182, 182, 182);
   overflow-y: scroll;
 }

 .message{
   word-wrap: break-word;
   word-break: break-word;
   padding: 7px 5px;
 }
 .message p{
   display: inline;
 }

 .nickname{
   font-weight: bold;
   color: #fff;
 }

 .type-send{
   display: flex;
   height: 7%;
   background-color: rgba(48, 121, 48, 0);
 }

 #messageInput{
   width: 95%;
   background-color: rgb(37, 46, 71);
   padding: 8px 5px;
   border-radius: 0 0 0 5px;
   color: #ffffff;
   height: 100%;
   word-wrap: break-word;
   word-break: break-word;
   overflow-wrap: break-word;
   resize: none;
 }

 #sendMessage{
   background-color: rgb(10, 23, 65);
   padding: 2px;
   border-radius: 0 0 5px 0;
   color: #ffffff;
   font-size: 9pt;
   height: 100%;
   width: 5%;
 }

 ::-webkit-scrollbar{
      width: 10px;
  }

  ::-webkit-scrollbar-track{
      border-radius: 5px;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.637);
  }

  ::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background-color: rgb(24, 24, 24);
  }

  .odd{
   background-color: rgb(23, 28, 44);
 }

 .even{
   background-color: rgb(32, 35, 44);
 }
</style>