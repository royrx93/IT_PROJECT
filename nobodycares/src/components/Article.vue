<template>
  <h1> Articles </h1>
  <div>
  <tr v-for="article in articles" :key="article.title">
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
import ArticleDeleteService from "@/services/ArticleDeleteService";
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
    async remove(article){
      const response = await ArticleDeleteService.articleDelete(article);
      location.reload()
      console.log(response.data())


    },


    edit(){

    }
  }

}
</script>

<style scoped>

</style>