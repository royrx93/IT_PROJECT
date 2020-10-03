<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles </h1>

  <div v-for="article in articles" :key="article.title">
    {{article.title}}
    <br>
    {{article.description}}

      <button  @click="remove(article)">Delete</button> <button href="#" @click="edit(article)">Update</button>

    <router-link :to="{path: '/article/view', query : {key : article.title}}">
      <button>view</button>
    </router-link>




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
  width:98.95%;
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