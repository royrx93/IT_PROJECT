<template>
<h1>hi</h1>
</template>

<h1>{{article.title}}</h1>

<h3>{{article.description}}</h3>

<h3>{{article.content}}</h3>



<script>
import ArticleViewService from "@/services/ArticleViewService";
export default {

  data(){
    return {
      article: null
    }
  },

  async mounted(){
    const requiredTitle = this.$route.params.title
    this.article = (await ArticleViewService.articleView(requiredTitle)).data
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
router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
}
</style>