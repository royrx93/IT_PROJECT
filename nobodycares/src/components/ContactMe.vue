<template>
    <div class="contactme" :style ="note"></div>

        <H1>ContactMe</H1>
        
        <input
            type="firstname"
            name="firstname"
            v-model="firstname"
            placeholder="firstname">
        <br>
        <input
            type="lastname"
            name="lastname"
            v-model="lastname"
            placeholder="lastname">
        <br>
        <input
            type="email_address"
            name="email_address"
            v-model="emailaddress"
            placeholder="email">
        <br>
        <input
            type="content"
            name="content"
            v-model="content"
            placeholder="content">
        <br>        
        <button @click="ContactMe">Submit</button>

</template>

<script>
    import ContactService from "../services/ContactService";
    export default {
        data(){
            return{
                firstname:'',
                lastname:'',
                email_address:'',
                content:''
            }
        },
        methods:{
            async contactMe(){
                const response = await ContactService.contact({
                    //username: this.username,
                    //password: this.password,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email_address:this.email_address,
                    content: this.content
                })
                console.log(response.data())
            }
        }
    }
</script>

<style scoped>
  .contactme{
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