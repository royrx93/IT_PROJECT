<template>
  <Sidebar></Sidebar>
  <body>
    <h2>Manage Your Profile</h2>
    <div class="border">
      <m3> --- Draw your life </m3>
    </div>
  </body>
</template>

<script>
import BackstageService from "../services/BackstageService";
import store from "../store";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar
  },

  data() {
    return {
    };
  },
  methods: {
    async verify(){
      let _token = store.state.Authorization;
      const response = await BackstageService.verify(_token);
      console.log(response.data);

      if(response.data.state != 1){
        alert("Token Invalidation");
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>

<style scoped>
  h2 {

  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-top: 70px;
  margin-left: 80px;

  }
  .border{

  color: #f0f0f0;
  padding: 40px;
  font-size: 1.6em;
  margin-top: 50px;
  margin-left: 30px;
  }
  
</style>
