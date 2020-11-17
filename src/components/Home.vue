<template>
  <p>
    {{introduction}}
  </p>

  <div :key=imageID >
      <img :src=imageURL />
  </div>

</template>

<style scoped>
div {
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;
  margin: 10px;
  margin-top: 20px;
}
</style>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import HomepageService from "../services/HomepageService";

export default {
  data() {
    return {
      homepage: null,
      introduction: "",
      imageID: "",
      imageURL: ""
    };
  },

  async mounted() {
    this.homepage = (await HomepageService.getHomepage()).data;
    this.introduction = this.homepage.introduction;
    this.imageID = this.homepage.imageID;
    this.imageURL = this.homepage.image_url;
  }
};
</script>
