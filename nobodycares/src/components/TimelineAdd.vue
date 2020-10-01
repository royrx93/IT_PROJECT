<template>
  <div class="timelineadd" :style ="note"></div>
    <H1>Add Timeline</H1>
    <input
            type="string"
            name="string"
            v-model="year"
            placeholder="year">
    <br>
    <input
            type="string"
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
    <button @click="timelineAdd">Submit</button>
</template>

<script>
    import AuthenticationService from "../services/TimelineAddService";
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
                    backgroundAttachment: "fixed",
                   },
            }
        },
        methods:{
            async timelineAdd(){
                const response = await AuthenticationService.timelineAdd({
                    year:this.year,
                    month: this.month,
                    description:this.description
                })
                console.log(response.data())
            }
        }
    }

</script>

<style scoped>
  .timelineadd{
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