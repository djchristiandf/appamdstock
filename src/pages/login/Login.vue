<template>
  <div class="main">
    <div class="login">
      <h2>Login</h2>
      <label class="mt-2" for="username"></label>
      <input v-model="username" type="text" id="username">
      <label class="mt-3" for="password"></label>
      <input v-model="password" type="password" id="password">
      <button v-on:click="enviarDadosLogin" class="btn btn-primary btn-sm">Login</button>
    </div>

  </div>
</template>

<script>
import Axios from "axios";
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    enviarDadosLogin(){
      const dados = {
        username:this.username,
        password:this.password
      }
      Axios.post('http://localhost:8090/login', dados).then(response => {
        localStorage.setItem('token', response.data)
        //console.log(response.data)
        this.$router.push('/')
      })
      console.log(dados)
    }
  }

}
</script>

<style lang="scss" scoped>
@import './src/scss/colors.scss';
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  .login{
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: $secondary;
    padding: 4%;
    border-radius: 7%;
    input {
      border: none;
      border-bottom: solid 0.5px $dark;
    }
    input:focus{
      outline: none;
    }
  }
}
</style>