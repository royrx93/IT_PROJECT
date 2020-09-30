<template>
    <div>
        <H1>Register</H1>
        
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
    </div>
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

</style>