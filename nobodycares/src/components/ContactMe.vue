<template>
  <div class="contact">
    <H1>Contact Me</H1>
    <div class="input-div1">
      <label for="name">Your name:</label>
      <input type="text" name="name" v-model.trim="name">
    </div>
    <div class="input-div2">
      <label for="email">Your email: </label>
      <input type="text" name="email" v-model.trim="email">
    </div>

    <div class="input-div3">
      <label for="message">Message: </label>
      <input type="text" name="message" v-model.trim="message">
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
      message: ''
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
    width:99.15%;
    height:100%;
    z-index:-1;
    position: absolute;
    }
    H1{
    color: #F0F0F0;
    padding: 60px;
    font-size:3em;
    }
    input-div1{
        margin: 8px;
        height:60px;
        width: 600px;
        font-size: 1.2em;
    }
    input-div2{
        margin: 8px;
        height:60px;
        width: 600px;
        font-size: 1.2em;
    }
    input-div3{
        margin: 80px;
        height:120px;
        width: 1200px;
        font-size: 1.2em;
        
    }
    button{
        margin: 60px;
        height: 60px;
        width: 300px;
        font-size: 1.2em;
    }

</style>