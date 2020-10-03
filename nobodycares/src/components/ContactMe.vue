<template>
  <div class="contact" :style="note">
    <H1>Contact Me</H1>
    <p> -If we are destined to meet </p>
    <div class="input-div1">
      <label for="name">Your name:</label>
      <input type="text"  style=" margin:8px;width:600px;height:60px" name="name" v-model.trim="name">
    </div>

    <div class="input-div2">
      <label for="email">Your email:</label>
      <input type="text"  style=" margin:8px;width:600px;height:60px" name="email" v-model.trim="email">
    </div>

    <div class="input-div3">
      <label for="message">Message: </label>
      <textarea name="textarea" style="width:600px;height:150px;" v-model.trim="message"></textarea>
    </div>
    

    <button @click="submit">Submit</button>

  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/'
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundAttachment: "fixed",
                   },
    };
  },
  methods: {
    submit() {
      if (!this.name) {
        alert('Please enter your name');
        return;
      } else if (!this.email) {
        alert('Please enter your email address');
        return;
      } else {
        let formData = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        axios({
          method: 'post',
          url: '/mail',
          data: formData,
        });
      }
    },
  },
};
</script>

<style scoped>
    .contact{
      width:98.95%;
      height:100%;
      z-index:-1;
      position: absolute;
      background-size:100% 100%;
    }
    H1{
    color: #F0F0F0;
    padding: 60px;
    font-size:3em;
    }
    label{
      cursor: pointer;
      display: inline-block;
      padding: 3px 6px;
      text-align: right;
      width: 150px;
      vertical-align: top;
    }
    button{
      margin: 25px;
      height: 60px;
      width: 300px;
      font-size: 1.2em;
    }
    p {

    font-size: 1.2em;
    }
</style>