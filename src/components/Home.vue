<template>

  <div>
    <div2 :key=imageID >
    <img :src="imageURL" />
    </div2>
    
    <h1>--Happiness is not in the having.</h1>
    <h2>It's in just being.</h2>
  <p>
    {{introduction}}
  </p>
  </div>
</template>

<style scoped>

  div{
  height: 90%;
  width: 70%;
  background-color: rgba(8, 8, 8, 0.4);
  margin: 5% 15%;

  padding-bottom:3%;
  padding-top:3%;
  padding-right:-5%;
  

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 8px;
  }

  
  h1{
  
  font-size:2em;
  margin-left:50%;
  
  margin-top:-20%;
  }
  h2{
  margin-left:50%;
  }
  div2 {

  height: 90%;
  width: 60%;
  margin-left:-45%;

  -webkit-filter: drop-shadow(10px 10px 15px rgb(0,0,0));
  filter: drop-shadow(10px 10px 15px rgb(0,0,0));
  }
  p{

  margin-top:10%;
  margin-left:8%;
  height: 90%;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 4px;
  padding:15px 15px;
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
