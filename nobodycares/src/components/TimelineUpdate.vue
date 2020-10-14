<template>
    <div class="timelineUpdate" :style ="note"></div>
    <H1>Update Timeline</H1>
    <input
            type="month"
            name="string"
            v-model="month"
            placeholder="month">
    <br>
    <input
            type="description"
            name="description"
            v-model="description"
            placeholder="description">
    <br>
    <button @click="timelineUpdate" to="/timeline">Update</button>
</template>

<script>
    import AuthenticationService from "../services/TimelineUpdateService";
    export default {
        data(){
            return{
                year:'',
                month:'',
                description:'',
                note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "scroll",
                },
            }
        },
        methods:{
            async timelineUpdate(){
                await AuthenticationService.timelineUpdate({
                    year:this.month.toString().substr(0,4),
                    month: this.month.toString().substr(5,2),
                    description:this.description
                })
                // console.log(response.data())

            }
        }
    }
</script>

<style scoped>

</style>