<template>
  <Sidebar></Sidebar>
  <body>
    <h2>test1 </h2>
    <div class="border">
      <m3> whatever you want </m3>
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

</style>
