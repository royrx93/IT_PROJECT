<template>
  <div class="timelineadd" :style ="note"></div>
    <H1>Add Timeline</H1>
<!--    <input-->
<!--            type="string"-->
<!--            name="string"-->
<!--            v-model="year"-->
<!--            placeholder="year">-->
<!--    <br>-->
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
    <button @click="timelineAdd" to="/timeline">Submit</button>
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
                    backgroundAttachment: "scroll",
                   },
            }
        },
        methods:{
            async timelineAdd(){
                await AuthenticationService.timelineAdd({
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
  .timelineadd{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin-left:-10px;
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