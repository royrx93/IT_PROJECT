<template>
<sideBar></sideBar>
  <body>
  <h1>Subtitle Management</h1>

  <div style="display: inline-block"><button class="smallbuttons" @click="switchToTimeline">Timeline</button></div>
  <div style="display: inline-block; margin-left: 20px"><button class="smallbuttons" @click="switchToGallery">Gallery</button></div>
  <div style="display: inline-block; margin-left: 20px"><button class="smallbuttons" @click="switchToArticle">Article</button></div>


  <div style="margin-top: 30px; font-size: 30px">Update "{{ display }}" Subtitle</div>

  <div style="margin-top: 30px; margin-bottom: 40px">
    <div style="margin-bottom: 10px">
      <input id="subtitle" class="title" name="title" v-model="content" />
    </div>
    <div style="margin-top: 40px; margin-right: 130px">
      <button id="update" @click="updateSubTitle">Submit</button>
    </div>
  </div>
  </body>>
</template>
<script>
import sideBar from "@/components/Sidebar";
import ArticleService from "@/services/ArticleService";
import BackstageGalleryService from "@/services/BackstageGalleryService";
import TimelineService from "@/services/TimelineService";
export default {
  components: {
    sideBar
  },
  data() {
    return {
      content: "",
      display: ""
    };
  },
  methods: {
    async updateSubTitle() {
      if(this.content.length > 50){
        alert("Maximum Length is 50")
      }else if(this.display == "Article"){
        const response = await ArticleService.updateSubTitle({
          subtitle: this.content
        });
        this.$router.push("/articles");
        console.log(response);
      }else if(this.display == "Timeline"){
        const response = await TimelineService.updateSubTitle({
          subtitle: this.content
        });
        this.$router.push("/timeline");
        console.log(response);
        console.log("t")
      }else if(this.display == "Gallery"){
        const response = await BackstageGalleryService.updateSubTitle({
          subtitle: this.content
        });
        this.$router.push("/gallery");
        console.log(response);
      }
    },

    switchToArticle(){
      this.display = "Article"
    },

    switchToTimeline(){
      this.display = "Timeline"
    },

    switchToGallery(){
      this.display = "Gallery"
    },
  }
};
</script>

<style scoped>
  body {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-image: url("../assets/background.jpeg");
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  #subtitle {
  background: #E0E0E0;
  border: none;
  border-radius: 5px;
  height: 25px;
  width: 300px;
  }

  #subtitle:focus {
  background: whitesmoke;
  }


  #update{
    margin-top:20px;
    margin-left:130px;
    height: 30px;

    font-size: 1.2em;
    padding-right: 10px;
    padding-bottom: 40px;
    cursor: pointer;
    width: 100px;
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

  .smallbuttons{
    width: 90px;
    height: 40px;
    font-size: 20px;
    background-color: #33a5ff;
    color: #ffffff;
    border: none;
    border-radius: 10%;
  }
  .smallbuttons:hover{
    background: #339900;
  }
</style>
