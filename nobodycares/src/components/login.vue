<template>
    <div class="loginlabel" :style="note">
        <div class="input-div1">
            <label for="username">Username:</label>
            <input type="text"  name="username" v-model="username" placeholder="Username">
        </div>

        <div class="input-div2">
            <label for="password">Password:</label>
            <input type="text"  name="password" v-model="password" placeholder="Password">
        </div>
    <!-- <input type="text" v-model="loginForm.username" placeholder="用户名"/>
    <input type="text" v-model="loginForm.password" placeholder="密码"/> -->
    <button @click="login">Login</button>
  </div>
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
      userToken: ''
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      //let _this = this;
      if (this.username === '' || this.password === '') {
        alert('Username or Passport cannot be empty');
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
            
            //_this.userToken = 'Bearer ' + res.data.data.body.token;
            // 将用户token保存到vuex中
            //_this.changeLogin({ Authorization: _this.userToken });
            //_this.$router.push('/backstage');
          }else{
            alert('Username or Passport incorrect');
            //console.log(res);
          }
          
          
        });
      }
    }
  }
};
</script>

<style scoped>
  .loginlabel{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin-top:180px;
  margin-left:-10px;
  }

  label{
  margin-left:-100px;
  cursor: pointer;
  display: inline-block;
  padding: 3px 6px;
  text-align: right;
  width: 150px;
  vertical-align: top;
  }
  
  button{
  margin: 25px;
  height: 30px;
  width: 100px;
  font-size: 1.2em;
  margin-left:40px;
  }

</style>