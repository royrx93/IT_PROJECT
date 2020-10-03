<template>
  <div class="register" :style ="note"></div>
    <div>
        <H1>Register</H1>
        <input
        type="username"
        name="username"
        v-model="username"
        placeholder="username">
        <br>
        <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password">
        <br>
        <input
                type="email_address"
                name="email_address"
                v-model="email_address"
                placeholder="email">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
    import AuthenticationService from "../services/AuthenticationService";
    export default {
        data(){
            return{
                username:'',
                password:'',
                email_address:'',
                note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                   },
            }
        },
        methods:{
            async register(){
                const response = await AuthenticationService.register({
                    username:this.username,
                    password: this.password,
                    email_address:this.email_address
                })
                console.log(response.data())
            }
        }
    }
</script>

<style scoped>
  .register{
  width:120%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  }
  H1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
  input{
  margin: 8px;
  height:60px;
  width: 600px;
  font-size: 1.2em;
  }
  button{
  margin: 60px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  }
</style>