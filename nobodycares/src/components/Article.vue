<template>
  <h1> Articles </h1>
  <div>
  <tr v-for="article in articles" :key="article.title">
    <td>{{article.title}}</td>
    <td>{{article.title}}</td>
    <td>{{article.description}}</td>

    <td>
      <a href="#" @click="remove(article)">Delete</a> <a href="#" @click="edit(article)">Update</a>
    </td>
  </tr>
  </div>
<br>
  <div>
    <router-link to="/article/create">NEW</router-link>
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

  methods:{
    remove(){

    },

    edit(){

    }
  }

}
</script>

<style scoped>

</style>