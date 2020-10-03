<template>

  <div class="articles" :style ="note"></div>

  <input
      type="description"
      name="description"
      v-model="newArticle.title"
      placeholder = "description"
  >
  <br>
  <input
      type="description"
      name="description"
      v-model="newArticle.description"
      placeholder = "description"
  >
  <br>
  <input
      type="string"
      name="string"
      v-model="newArticle.content"
      placeholder = "content"
  >
  <br>
  <button @click="articleUpdate">update</button>


</template>

<script>
import ArticleService from "@/services/ArticleService";
import ArticleCreateService from "@/services/ArticleCreateService";
export default {
  data(){
    return {
      title: this.$route.params.title,
      description: "",
      content: "",
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      },
      articles: null,
      newArticle: {
        title:this.$route.params.title,
        description:"",
        content:"",
      }
    }
  },

  async mounted() {
    this.articles = (await ArticleService.index()).data
    console.log(this.articles.title)
    for (let article in this.articles){

      if(article.title == this.$route.params.title){

        this.newArticle.description = article.description
        this.newArticle.content = article.content
      }
    }
  },


  methods:{
    async articleUpdate() {
      const response = await ArticleCreateService.articleUpdate({
        title: this.title,
        description: this.description,
        content: this.content
      });
      console.log(response.data());
    },

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