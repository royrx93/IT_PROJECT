<template>
  <div class="timelineUpdate" :style="note"></div>
  <H1>Update Timeline</H1>
  <input type="month" name="string" v-model="month" placeholder="month" />
  <br />
  <input
    type="description"
    name="description"
    v-model="description"
    placeholder="description"
  />
  <br />
  <button @click="timelineUpdate" to="/timeline">Update</button>
</template>

<script>
import AuthenticationService from "../services/TimelineUpdateService";
export default {
  data() {
    return {
      year: "",
      month: "",
      description: "",
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "scroll"
      }
    };
  },
  methods: {
    async timelineUpdate() {
      await AuthenticationService.timelineUpdate({
        year: this.month.toString().substr(0, 4),
        month: this.month.toString().substr(5, 2),
        description: this.description
      });
      // console.log(response.data())
    }
  }
};
</script>

<style scoped>
  button {
  margin-top:20px;
  margin-left:40px;
  height: 30px;
  width: 100px;
  font-size: 1.1em;
  padding-right: 10px;
  padding-bottom: 40px;
  cursor: pointer;
  width: 140px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;

  border-radius: 5px;

  position: relative;
  overflow: hidden;
  color: 	#505050;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #E0E0E0 inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }
  button:hover{
  background:		#FFFFFF;


  }

</style>
