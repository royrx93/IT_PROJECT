<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles </h1>
  <p> -Multi-threaded thoughts </p>

  <div v-for="article in articles" :key="article.title">
    <div class="articles2" :style ="note"></div>
    {{article.title}}
    <br>
    {{article.description}}
    <button  @click="remove(article)">Delete</button>

    <router-link :to="{name :'ArticleUpdate', params : {title : article.title}}">
      <button>update</button>
    </router-link>

  </div>
<br>
  <div class="new">
    <router-link to="/article/create">NEW</router-link>
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
      const response = await ArticleDeleteService.articleDelete(article);
      location.reload()
      console.log(response.data())
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
</style>