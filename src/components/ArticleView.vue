<template>
  <body>
  

  
  <div v-for="article in articles" :key="article.title">
    <div style="background: rgba(25,25,25,.5); margin-left: 60px; margin-right: 60px; margin-bottom: 5%" v-if="article.title == this.$route.params.title">
      <div class="title">{{article.title}}</div>

      <div class="time">create at {{fixTime(article.createDate)}}</div>

      <div style="width: 100%"><img class="image" :src="article.image_url"/></div>

      <div class="decription">{{article.description}}</div>

      <div class="content" v-html="newLine(article.content)"></div>

    </div>
  </div>

  <div>
    <button class="buttons" @click="goBack">
      back
    </button>
  </div>
  </body>
</template>

<script>

import ArticleService from "@/services/ArticleService";
let moment = require("moment");
export default {

  data(){
    return {


      articles: null,

      article: null,

    }
  },


  async mounted() {
    this.articles = (await ArticleService.index()).data
    for(var i =0; i < this.articles.length; i++){
      if(this.articles[i].image_url == null){
        this.articles[i].image_url = "http://res.cloudinary.com/zjz/image/upload/v1601721278/ypbbzb3rtaurlhjbzgln.jpg"
      }
    }
  },

  methods:{
    fixTime(createDate){
      createDate = moment(createDate).format('YYYY-MM-DD HH:mm')
      return createDate
    },
    goBack(){
      this.$router.go(-1);
    },
    newLine(content){
      content = content.replaceAll("\n", "<br>")
      return content
    }
  }

}

</script>

<style scoped>
  body{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  margin-top:100px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }
 
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  
  }
  router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }

  .buttons{
  position:fixed;
  right: 10px;
  top: 90%;
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

  .buttons:hover{
  background: #3366FF;
  }
  .title {
    font-size: 50px;
    margin-top: 40px;
    margin-bottom: 10px;
    margin-left: 10%;
    width: 100%;
    text-align: left;
  }
  .time {
    font-size: 10px;
    margin-bottom: 50px;
    width: 100%;
    text-align: left;
    margin-left: 10%;
  }

  .image{
    width: 45%;
    height: 45%;
    margin-right: 40%;
  }

  .decription{
    font-size: 20px;
    margin-bottom: 60px;
    text-align:left;
    margin-left: 10%;
    margin-top: 10px;
    width: 100%;
  }
  .content{
    width: 80%;
    text-align:left;
    margin-left: 10%;
    margin-bottom: 5%;
  }



</style>