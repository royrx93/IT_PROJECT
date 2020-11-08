<template>
  <body>
    <h1>Hey, nice to see you _</h1>
    <div class="border">
      <div class="input-div1">
        <img src="../assets/user_icon.png" alt="user" width="40" height="40" />
        <label for="username"></label>
        <input
          type="text"
          name="username"
          v-model="username"
          placeholder="Username"
        />
      </div>

      <div class="input-div2">
        <img
          src="../assets/password_icon.png"
          alt="user"
          width="40"
          height="40"
        />
        <label for="password"></label>
        <input
          type="text"
          name="password"
          v-model="password"
          placeholder="Password"
        />
      </div>

      <button @click="login">Login</button>
    </div>
  </body>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      userToken: "",
      note: {
        backgroundImage: "url(" + require("../assets/login.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      }
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    async login() {
      if (this.username === "" || this.password === "") {
        alert("Username or Password cannot be empty");
      } else {
        let loginData = {
          username: this.username,
          password: this.password
        };
        const response = await AuthenticationService.login(loginData);
        console.log(response.data);
        if (response.data.state === 1) {
          alert("Login success");
          this.$store.commit("loginSuccess");
          this.$router.push({ path: "/backstage" });
        } else {
          alert("Username or Password incorrect");
          console.log(response);
        }
      }
    }
    
  }
};
</script>

<style scoped>
  body {
  width: 100%;
  height: 1;
  z-index: -1;
  position: absolute;
  margin-top: 300px;
  margin-left: 40px;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  }
  .input-div1 img {
  margin-left: 15px;

  margin-top: 20px;
  position: absolute;
  }
  .input-div2 img {
  margin-left: 15px;

  margin-top: 20px;
  position: absolute;
  }
  .border {
  margin: 30px 34% 20px 34%;
  padding-top: 40px;
  padding-bottom: 20px;

  background-color: rgba(25, 25, 25, 0.6);
  }
  label {
  margin-left: -40px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 14px;
  text-align: right;
  width: 150px;
  vertical-align: top;
  font-size: 2em;
  }

  button {
  margin-top:30px;
  margin-left:20px;
  margin-bottom:30px;
  height: 30px;
  width: 100px;
  font-size: 1.3em;
  padding-right: 10px;
  padding-bottom: 40px;
  cursor: pointer;
  width: 140px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;

  border-radius: 5px;

  position: relative;
  overflow: hidden;
  color: 	#505050;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }
  button:hover{
  background:		#FFFFFF;


  }
  input {
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: -60px;
  }
  h1 {
  color: #f0f0f0;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 1.8em;

  background-color: rgba(25, 25, 25, 0.6);
  margin: -20px 34% -20px 34%;
  }
</style>
