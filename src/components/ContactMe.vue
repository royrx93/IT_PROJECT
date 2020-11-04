<template>
  <body>
    <div class="contact">
      <H1>Contact Me</H1>
      <p>-If we are destined to meet</p>
      <div class="input-div1">
        <label for="name">Your name:</label>
        <input
          type="text"
          style=" margin:8px;width:600px;height:60px"
          name="name"
          v-model.trim="name"
        />
      </div>

      <div class="input-div2">
        <label for="email">Your email:</label>
        <input
          type="text"
          style=" margin:8px;width:600px;height:60px"
          name="email"
          v-model.trim="email"
        />
      </div>

      <div class="input-div3">
        <label for="message">Message: </label>
        <textarea
          name="textarea"
          style="width:600px;height:150px;"
          v-model.trim="message"
        ></textarea>
      </div>

      <button @click="contact">Submit</button>
    </div>
  </body>
</template>

<script>
import ContactService from "../services/ContactService";
//import axios from 'axios';
//axios.defaults.baseURL = 'http://localhost:3000/'
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

    // submit() {
    //   if (!this.name) {
    //     alert('Please enter your name');
    //     return;
    //   } else if (!this.email) {
    //     alert('Please enter your email address');
    //     return;
    //   } else {

    // let formData = {
    //   name: this.name,
    //   email: this.email,
    //   message: this.message,
    // };

    //     axios({
    //       method: 'post',
    //       url: '/mail',
    //       data: formData,
    //     })
    //     .then(res =>{
    //       console.log(res.data);
    //       if(res.data.state === 1){
    //         alert("sending sucess")
    //       }
    //       else{
    //         alert("sending failed")
    //       }
    //     })
    //     .catch(error=>{
    //     console.log(error);
    //     alert('Internet failed');
    //   });

    //   }
    // },
  }
};
</script>

<style scoped>
body {
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
}

h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-left: 60px;
  margin-top: 40px;
}
label {
  margin-left: -100px;
  cursor: pointer;
  display: inline-block;
  padding: 3px 6px;
  text-align: right;
  width: 150px;
  vertical-align: top;
}
button {
  margin: 25px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  margin-left: 40px;
}
p {
  margin-left: 40px;
  font-size: 1.2em;
}
</style>
