<template>
  <div class="timelineUpdate" :style="note"></div>
  <H1>Update Timeline</H1>
  <input type="hidden" name="ID" v-model="ID"/>
  <div>
    <div>
      <label>Year</label>
      <input
              style="height: 50px; width: 300px;margin-top: 10px;margin-left: 50px"
              type="text"
              name="year"
              v-model="year"
      />
    </div>
    <div>
      <label>Month</label>
      <input
              style="height: 50px; width: 300px;margin-top: 30px;margin-left: 40px"
              type="text"
              name="month"
              v-model="month"
      />
    </div>
  </div>
  <br />
  <div>
    <label>Description</label>
    <input
            style="height: 50px; width: 300px;margin-top: 10px;"
            type="text"
            name="description"
            v-model="description"
    />
  </div>
  <br />
  <div>
    <button class="buttons" @click="timelineUpdate" to="/backstageTimeline">Update</button>
    <button class="buttons" @click="goBack">back</button>
  </div>
</template>

<script>
  import AuthenticationService from "../services/TimelineService";
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

    async mounted() {
      this.timeline = (await AuthenticationService.getAllInfo()).data;
      for (var i = 0; i < this.timeline.length; i++) {
        if (this.timeline[i].ID == this.$route.params.ID) {
          this.year = this.timeline[i].year,
                  this.month = this.timeline[i].month,
                  this.description = this.timeline[i].description;
        }
      }
    },

    methods: {
      async timelineUpdate() {
        if(this.year < 1900){
          alert("Please enter a year possible")
        }else if(this.month<1 || this.month>12){
          alert("Please enter a month number(1 to 12)")
        }else if(this.year > 2020){
          alert("Please enter a time already done")
        }else{
          await AuthenticationService.timelineUpdate({
            year: this.year,
            month: this.month,
            description: this.description,
            ID:this.$route.params.ID
          });
        }

        // console.log(response.data())
      },
      goBack(){
        this.$router.go(-1)
      }
    }
  };
</script>

<style scoped>

</style>
