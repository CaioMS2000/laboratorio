<template>
  <div class="container">
    <label for="username">Login</label>
      <div class="type-send">
        <input type="text" v-on:keydown.enter = "Login()" v-model="loginUsername" id="username" placeholder="username">
        <button id = "sendNick" v-on:click.stop.prevent = "Login()"><i class="fas fa-arrow-circle-right"></i></button>
      </div>
  </div>
</template>

<script>
import {event} from '../emitter'

export default {
  name: 'login',
  data(){
    return {
      loginUsername: ''
    }
  },
  methods:{
    Login(){
      this.$emit('send-nick', this.loginUsername)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    text-align: center;
  }

  #username{
    border: none;
    border-bottom: 1px solid black;
    padding: 3px;
    font-size: 15pt;
  }

  label{
    font-size: 30pt;
    margin-bottom: 20px;
  }

  .container{
    background-color: #ffffff;
    min-width: 1vw;
    max-width: 80vw;
    width: 40vw;
    margin: 40vh auto 0 auto;
    padding: 5vh 0 5vh 0;
    border-radius: 20px;
  }

  .type-send{
    display: inline-block;
    margin: 0 auto;
  }

  #sendNick{
    background-color: transparent;
    margin: 15px auto 0 auto;
  }

  i{
    font-size: 20pt;
  }
</style>
