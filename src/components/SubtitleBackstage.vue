<template>
<sideBar></sideBar>
  <h1>Subtitle Management</h1>

  <div style="display: inline-block"><button @click="switchToTimeline">Timeline</button></div>
  <div style="display: inline-block; margin-left: 20px"><button @click="switchToGallery">Gallery</button></div>
  <div style="display: inline-block; margin-left: 20px"><button @click="switchToArticle">Article</button></div>
  <div style="display: inline-block; margin-left: 20px"><button @click="switchToContactMe">Contact</button></div>

  <div style="margin-top: 30px; font-size: 30px">Update "{{ display }}" Subtitle</div>

  <div style="margin-top: 30px; margin-bottom: 40px">
    <div style="margin-bottom: 10px">
      <input id="subtitle" class="title" name="title" v-model="content" />
    </div>
    <div style="margin-top: 40px">
      <button id="updateSubtitle" @click="updateSubTitle">Submit</button>
    </div>
  </div>


</template>
<script>
import sideBar from "@/components/Sidebar";
import ArticleService from "@/services/ArticleService";
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
      if(this.content.length > 20){
        alert("Maximum Length is 15")
      }else if(this.display == "Article"){
        const response = await ArticleService.updateSubTitle({
          subtitle: this.content
        });
        this.$router.push("/articles");
        console.log(response);
      }else if(this.display == "Timeline"){
        console.log("t")
      }else if(this.display == "Gallery"){
        console.log("g")
      }else if(this.display == "Contact Me"){
        console.log("c")
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

    switchToContactMe(){
      this.display = "Contact Me"
    },
  }
};
</script>

<style scoped>
  #updateSubtitle {
  background-color: #33a5ff;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border: none;
  border-radius: 10%;
  }
  #updateSubtitle:hover {
  background: #339900;
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

  button {
  background-color: #33a5ff;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border: none;
  border-radius: 10%;
  }
  button:hover {
  background: #339900;
  }

</style>