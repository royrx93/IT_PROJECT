<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles </h1>
  <div v-for="article in articles"
  :key="article.title" >
    <br>
    {{article.description}}
  </div>
<br>
  <div>
    <button @click="NewArticle">New</button>
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

  methods: {
  NewArticle() {
  this.$router.push('../article/create')
  }
  }

  }
</script>

<style scoped>
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
  button{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }
</style>