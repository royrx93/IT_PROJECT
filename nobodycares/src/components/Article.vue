<template>
  <h1> Articles </h1>
  <div v-for="article in articles"
  :key="article.title">
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

</style>