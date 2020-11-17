<template>

  <div>
    <div2 :key=imageID >
    <img :src="imageURL" />
    </div2>
  </div>
 
  <p>
    {{introduction}}
  </p>

</template>

<style scoped>
  div2 {

  height: 90%;
  width: 60%;

  -webkit-filter: drop-shadow(10px 10px 15px rgb(0,0,0));
  filter: drop-shadow(10px 10px 15px rgb(0,0,0));
  }
  div{
  height: 90%;
  width: 60%;
  background-color: rgba(8, 8, 8, 0.6);
  margin: 5% 19%;
  padding-bottom:3%;
  padding-top:3%;

  z-index: -1;
  position:absolute;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 8px;
  }

  line{
  margin-top:300px;
  background-color: rgba(200, 200, 200, 0.6);
  }
  p{
  margin-top:36%;
  margin-left:24%;
  height: 90%;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 4px;

  text-align:center;
  text-indent:50px;
  line-height:180%;
  letter-spacing:1px;
  word-spacing:2px;
  font-size:1.5em;
  margin-bottom: 40px;
  background: rgb(8,8,8,0.6);

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
