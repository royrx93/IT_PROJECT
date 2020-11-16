<template>
  <body>
    <h1>See you, bye_</h1>
    <div class="border">
    
      <button @click="logout">Logout</button>

    </div>
  </body>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
     
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    async logout() {
      //location.reload();
      alert("You will logout");
      
      this.logout();
      
      this.$router.push("/login");
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
  
  .border {
  margin: 30px 34% 20px 34%;
  padding-top: 40px;
  padding-bottom: 20px;

  background-color: rgba(25, 25, 25, 0.6);
  }
  

  button {
  margin-top:50px;
  margin-left:20px;
  margin-bottom:25px;
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
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #E0E0E0 inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }
  button:hover{
  background:		#FFFFFF;

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
