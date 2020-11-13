<template>
  <body>
    <div class="contact">
      <v-layout column>
        <v-flex xs6 offset-xs3>
          <h1>Contact Me</h1>
          <p>-If we are destined to meet</p>
        </v-flex>
      </v-layout>
  
      <div class="border">
        <div class="input-div1">
          <label for="name">Your name:</label>
          <input
            type="text"
       
            name="name"
            v-model.trim="name"
          />
        </div>

        <div class="input-div2">
          <label for="email">Your email:</label>
          <input
            type="text"

            name="email"
            v-model.trim="email"
          />
        </div>

        <div class="input-div3">
          <label for="message">Message:</label>
          <textarea
            name="textarea"
            
            v-model.trim="message"
          ></textarea>
        </div>
      </div>

      <button @click="contact">Submit</button>
    </div>
  </body>
</template>

<script>
import ContactService from "../services/ContactService";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    async contact() {
      if (!this.name) {
        alert("Please enter your name");
        return;
      } else if (!this.email) {
        alert("Please enter your email address");
        return;
      } else {
        let formData = {
          name: this.name,
          email: this.email,
          message: this.message
        };
        const response = await ContactService.contact(formData);
        console.log(response.data);
        if (response.data.state === 1) {
          alert("sending sucess");
        } else {
          alert("sending failed");
        }
      }
    }
  }
};
</script>

<style scoped>
  body {
  width: 100%;
  height: auto;

  z-index: -1;
  position: absolute;
  margin-top: 150px;
  margin-left: 10px;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  }
  .border {
  height: 250px;
  width: 600px;
  margin-top:-30px;
  margin-left: 260px;
  padding-top: 40px;
  padding-bottom: 20px;
  font-size:1.2em;
  }
  .border div{
  margin-top:20px;
  }
  .contact button{
  margin-top:120px;
  }
  label {
  margin-left: -33%;

  
  
  padding: 3px 6px;
  
  

  vertical-align: top;
  }

  button {
  margin-top:20px;
  margin-left:90px;
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

  input {
  padding: 10px 40px;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  }
  h1 {
  color: #f0f0f0;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 2.5em;
  margin-left:120px;

  }

  p {
  margin-left: 90px;
  font-size: 1.2em;

  }
  .contact {

  background-color: rgba(25, 25, 25, 0.6);
  margin: 0px 25% 40% 25%;
  padding-bottom:3%;
  padding-right:4%;
  padding-left:2%;
  z-index: -1;
  position:absolute;
  }
  .input-div1{
  height:50px;
  }
  .input-div2{
  height:50px;
  }
  .input-div3{
  margin-left:-80px;

  }
  .input-div3 label{
  padding-right:00px;
  padding-left:30px;
  margin-top:60px;
  }
  .input-div3 textarea{
  margin-left:40px;
  padding-right:350px;
  padding-bottom:150px;
  }
</style>
