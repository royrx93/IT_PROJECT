<template>
  <div class="newArticle" :style ="note"></div>
  <H1>New Article!</H1>
  <label>Title:</label>
  <input
      style="height: 40px; width: 650px;"
      type="text"
      name="string"
      v-model="title"
  >
<div>
  <label>Description:</label>
  <input
      style="height: 40px; width: 650px;"
      type="text"
      name="description"
      v-model="description"
  >
</div>

  <div>
  <label>Content:</label>
  <textarea
      style="height: 200px; width: 650px;"
      type="text"
      name="string"
      v-model="content"
  ></textarea>
  </div>
  <br>

  <div>
    <button class="returnButtons" @click="goBack">
      back
    </button>
  </div>

    <div class="newArticle" :style ="note"></div>
  <button class="buttons" @click="articleCreate">Create</button>
</template>

<script>
import ArticleCreateService from "../services/ArticleCreateService";
import ArticleService from "@/services/ArticleService";
export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
       note: {
         backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
         backgroundRepeat: "no-repeat",
         backgroundSize: "100%",
         backgroundAttachment: "fixed",
       },
      articles: null,

    };
  },
  async mounted() {
    this.articles = (await ArticleService.index()).data
  },
  methods: {
    async articleCreate() {
      for(let i = 0; i < this.articles.length; i++){
        if(this.title == this.articles[i].title){
          alert("Article already exist")
        }
      }
      if(!this.title){
        alert("please fill in the title")
      }else if(!this.content){
        alert("please fill in the content")
      }else if(this.title.length > 49){
        alert("Title Word Limit 50")
      } else if(this.description.length > 200) {
        alert("Description Word Limit 200")
      } else if(this.content.length > 10000){
        alert("Content Word Limit 10000")
      } else {
        const response = await ArticleCreateService.articleCreate({
          title: this.title,
          description: this.description,
          content: this.content
        });
        console.log(response.data());


      }

    },

    goBack(){
      this.$router.go(-1);
    },

  }
};
</script>

<style scoped>
  .newArticle{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  margin-top:-80px;
  }
  H1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
  input{
  margin: 8px;
  height:60px;
  width: 600px;
  font-size: 1.2em;
  }
  button{
  margin: 60px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  }

  label{
    cursor: pointer;
    display: inline-block;
    padding: 3px 6px;
    text-align: right;
    width: 150px;
    vertical-align: top;
  }

  textarea{
    margin: 8px;
    height:60px;
    width: 600px;
    font-size: 1.2em;
  }

  .buttons{
    width: 100px;
    height: 50px;
    border: none;
    background: #33A5FF;
    border-radius: 10%;
  }

  .buttons:hover {
    background: #3366FF;
  }

  .returnButtons{
    position:fixed;
    left: 10px;
    top: 50%;
    height: 50px;
    z-index:9999;
    width: 75px;
    height: 35px;
    background-color: #33A5FF;
    border-radius: 10%;
    margin: 1px;
    border: none;
    font-size: 20px;
    color: white;
  }

  .returnButtons:hover{
    background: #3366FF;
  }
</style>
