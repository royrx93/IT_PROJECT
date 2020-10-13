<template>
  <body>
  

  
  <div v-for="article in articles" :key="article.title">
    <div v-if="article.title == this.$route.params.title">
      <div style="font-size: 50px; margin-top: 40px; margin-bottom: 10px; margin-left:40px">{{article.title}}</div>

      <div style="font-size: 10px; margin-bottom: 50px; margin-left:40px">{{fixTime(article.createDate)}}</div>

      <div style="font-size: 20px; margin-bottom: 60px; margin-left:40px; font-style: italic">{{article.description}}</div>

      <div style="width: 60%; margin: 0px auto">{{article.content}}</div>

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
  },

  methods:{
    fixTime(createDate){
      createDate = moment(createDate).format('YYYY-MM-DD HH:mm')
      return createDate
    },
    goBack(){
      this.$router.go(-1);
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

  .buttons:hover{
  background: #3366FF;
  }

</style>