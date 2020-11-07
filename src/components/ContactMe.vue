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
          <label for="message">Message: </label>
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
  margin: 10px 34% 20px 34%;
  margin-left: 390px;
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: rgba(25, 25, 25, 0.6);
}
label {
  margin-left: -300px; 
  cursor: pointer;
  display: inline-block;
  padding: 3px 6px;
  text-align: right;
  width: 150px;
  vertical-align: top;
}
button {
  margin: 25px;
  height: 35px;
  width: 100px;
  font-size: 1.5em;
  margin-left: 10px;
}
input {
  padding: 10px 25px;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}
h1 {
  color: #f0f0f0;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 1.8em;

  background-color: rgba(25, 25, 25, 0.6);
  margin: -20px 34% -20px 34%;
}

p {
  margin-left: 00px;
  font-size: 1.2em;
}

</style>
