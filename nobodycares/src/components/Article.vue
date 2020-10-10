<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles Management </h1>

  <div class="cardBox" v-for="article in articles" :key="article.title">
    <div class="articles2" :style ="note"></div>
    <div>{{article.title}}</div>

    <button id="delete" @click="remove(article)">Delete</button>

    <router-link :to="{name :'ArticleUpdate', params : {title : article.title}}">
      <button id = "update">update</button>
    </router-link>

  </div>
<br>
  <div>
    <router-link to="/article/create">
      <button class="buttons">+</button>
    </router-link>
  </div>
</template>


<script>
import ArticleService from "@/services/ArticleService";
import ArticleDeleteService from "@/services/ArticleDeleteService";
export default {

  data(){
    return{
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      },
      articles: null
    }
  },

  async mounted() {
    this.articles = (await ArticleService.index()).data
  },


  methods:{
    async remove(article){
      const r = confirm("DELETE THIS ARTICLE?");
      if(r == true){
        const response = await ArticleDeleteService.articleDelete(article);
        location.reload()
        console.log(response.data())
      }
    },

  }

}

</script>

<style scoped>
  .articles{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin-left:-10px;
  margin-top:-80px;
  }
  .articles2{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: fixed;
  margin-left:-10px;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  
  }
  .new{
  margin: 50px;
  height: 60px;
  color: #F0F0F0;
  font-size: 1.3em;
  }
  p {

  font-size: 1.2em;
  }

  .cardBox {
    width: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    float: left;
    margin-right: 10px;
    padding: 15px 5px 5px;
  }
  #delete{
    background-color: #33A5FF;
    width: 60px;
    height: 25px;
    color: #FFFFFF;
    border: none;
    margin-right: 10px;
    border-radius: 10%;
  }
  #delete:hover {
    background: #FF0000;
  }

  #update{
    background-color: #33A5FF;
    width: 60px;
    height: 25px;
    color: #FFFFFF;
    border: none;
    border-radius: 10%;
  }
  #update:hover{
    background: #339900;
  }

  .buttons{
    position:fixed;
    right: 10px;
    bottom: 10px;
    height: 50px;
    z-index:9999;
    width: 75px;
    height: 75px;
    background-color: #33A5FF;
    border-radius: 50%;
    margin: 1px;
    border: none;
    font-size: 50px;
    color: white;
  }

  .buttons:hover{
    background: #3366FF;
  }
</style>