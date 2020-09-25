<template>
    <div>
        <H1>Register</H1>
        <input
        type="username"
        name="username"
        v-model="username"
        placeholder="username">
        <br>
        <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password">
        <br>
        <input
                type="email_address"
                name="email_address"
                v-model="email_address"
                placeholder="email">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
    import AuthenticationService from "../services/AuthenticationService";
    export default {
        data(){
            return{
                username:'',
                password:'',
                email_address:''
            }
        },
        methods:{
            async register(){
                const response = await AuthenticationService.register({
                    username:this.username,
                    password: this.password,
                    email_address:this.email_address
                })
                console.log(response.data())
            }
        }
    }
</script>

<style scoped>

</style>