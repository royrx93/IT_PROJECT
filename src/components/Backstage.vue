<template>
  <body>
    <Sidebar> </Sidebar>
    <div class="backstage" :style="note"></div>
    
  </body>
</template>

<script>
import BackstageService from "../services/BackstageService";
import Sidebar from "@/components/Sidebar";
//import {right} from "core-js";
export default {
  components: {
    Sidebar
  },

  data() {
    return {
      backstage: null
    };
  },
  async mounted() {
    this.backstage = (await BackstageService.index()).data;
  },
  // methods: {
  //   redirectToGallery() {
  //     this.$router.replace("/backstageGallery");
  //   },
  //   redirectToArticle() {
  //     this.$router.replace("/article");
  //   },
  //   redirectToTimeline() {
  //     this.$router.replace("/backstageTimeline");
  //   },
  //   redirectToHomepage() {
  //     this.$router.replace("/backstageHomage");
  //   }
  // }
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin-left: -10px;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
}


</style>
