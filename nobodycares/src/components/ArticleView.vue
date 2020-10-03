<template>
  <div class="articleview" :style ="note"></div>

  <div class="articles" :style ="note"></div>
  <ul v-for="article in articles" :key="article.title">
    <li v-if="article.title == this.$route.params.title">

      <h1>{{article.title}}</h1>
      <br>
      <h2>{{article.description}}</h2>
      <br>
      {{article.content}}
    </li>
  </ul>

</template>

<script>

import ArticleService from "@/services/ArticleService";
export default {

  data(){
    return {

      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      },
      articles: null,

      article: null,

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
.articleview{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  }
.articles{
  width:99.15%;
  height:100%;
  z-index:-1;
  position: absolute;
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
</style>