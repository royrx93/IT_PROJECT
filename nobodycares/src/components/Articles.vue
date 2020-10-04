<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles </h1>

  <div v-for="article in articles" :key="article.title">
    {{article.title}}
    <br>
    {{article.description}}
    <br>
    <router-link :to="{name :'ArticleView', params : {title : article.title}}">
      <button>view</button>
    </router-link>

  </div>
  <br>
  <div>
    <router-link to="/article/create">
      <button>NEW</button>
    </router-link>
  </div>
</template>


<script>
import ArticleService from "@/services/ArticleService";

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
  }

}

</script>

<style scoped>
  .articles{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  margin-top:-80px;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  margin-top:-60px;
  }
  router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }
</style>