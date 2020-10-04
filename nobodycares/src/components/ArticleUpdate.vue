<template>

  <div class="articles" :style ="note"></div>

  <input
      type="description"
      name="description"
      v-model="title"
      placeholder = "description"
  >
  <br>
  <input
      type="description"
      name="description"
      v-model="description"
      placeholder = "description"
  >
  <br>
  <input
      type="string"
      name="string"
      v-model="content"
      placeholder = "content"
  >
  <br>
  <button @click="articleUpdate">update</button>


</template>

<script>
import ArticleService from "@/services/ArticleService";
import ArticleUpdateService from "@/services/ArticleUpdateService";
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

    }
  },

  async mounted() {
    this.articles = (await ArticleService.index()).data
    console.log(this.articles.title)
  },


  methods:{
    async articleUpdate() {
      const response = await ArticleUpdateService.articleUpdate({
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