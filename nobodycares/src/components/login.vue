<template>
    <body>
      
      <h1>Hey, nice to see you _</h1>
      <div class="border">
        <div class="input-div1">
            <img src="../assets/user_icon.png" alt="user" width="40" height="40">
            <label for="username"></label>
            <input type="text"  name="username" v-model="username" placeholder="Username">
        </div>

        <div class="input-div2">
          <img src="../assets/password_icon.png" alt="user" width="40" height="40">
            <label for="password"></label>
            <input type="text"  name="password" v-model="password" placeholder="Password">
        </div>
      
    <button @click="login">Login</button>
     </div>
  </body>
</template>
 
<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
export default {
  data () {
    return {
      username: '',
      password: '',
      userToken: '',
      note: {
                    backgroundImage: "url(" + require("../assets/login.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                },
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin']),
    login () {

      if (this.username === '' || this.password === '') {
        alert('Username or Password cannot be empty');
      } else {
        axios({
          method: 'post',
          url: '/login',
          data: {
            username: this.username,
            password: this.password,
          }
        }).then(res => {
          console.log(res.data);
          if(res.data.state === 1){
            
            alert('Login success');
            this.$store.commit('loginSuccess');
            this.$router.push({path:'/backstage'})

          }else{
            alert('Username or Password incorrect');
            console.log(res);
          }
          
          
        });
      }
    }
  }
};
</script>

<style scoped>
  body{
  width:100%;
  height:1;
  z-index:-1;
  position: absolute;
  margin-top:300px;
  margin-left:40px;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;

  }
  .input-div1 img{
  margin-left:15px;

  margin-top:20px;
  position: absolute;
  }
  .input-div2 img{
  margin-left:15px;

  margin-top:20px;
  position: absolute;
  }
  .border{
  margin: 30px 34% 20px 34%;
  padding-top:40px;
  padding-bottom:20px;

  background-color: rgba(25, 25, 25, 0.6);

  }
  label{
  margin-left:-40px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 14px;
  text-align: right;
  width: 150px;
  vertical-align: top;
  font-size:2em;

  }

  button{
  margin: 25px;
  height: 35px;
  width: 100px;
  font-size: 1.5em;
  margin-left:40px;

  }
  input{
  padding:10px 25px;
  margin-top:20px;
  margin-bottom:10px;
  margin-left:-60px;
  }
  h1{
  color: #f0f0f0;
  padding-bottom: 20px;
  padding-top:20px;
  font-size: 1.8em;

  background-color: rgba(25, 25, 25, 0.6);
  margin: -20px 34% -20px 34%;
  }
</style>