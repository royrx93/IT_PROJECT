<template>
  <div class="newarticle" :style ="note"></div>
  <H1>New Article!</H1>
  <input
    type="string"
    name="string"
    v-model="title"
    placeholder="this is title"
  >
  <br>
  <input
    type="description"
    name="description"
    v-model="description"
    placeholder="this is description"
  >
  <br>
  <input
    type="string"
    name="string"
    v-model="content"
    placeholder="this is content"
  >
  <br>
    <div class="newarticle" :style ="note"></div>
  <button @click="articleCreate">Create</button>
</template>

<script>
import ArticleCreateService from "../services/ArticleCreateService";
export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
       note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                   },
    };
  },
  methods: {
    async articleCreate() {
      const response = await ArticleCreateService.articleCreate({
        title: this.title,
        description: this.description,
        content: this.content
      });
      console.log(response.data());
    }
  }
};
</script>

<style scoped>
  .newarticle{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin:-10px;
  }
  H1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
  input{
  margin: 8px;
  height:60px;
  width: 600px;
  font-size: 1.2em;
  }
  button{
  margin: 60px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  }
</style>
