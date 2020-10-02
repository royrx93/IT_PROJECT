<template>
  <div class="articles" :style ="note"></div>
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


    edit(){

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
  router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }
</style>