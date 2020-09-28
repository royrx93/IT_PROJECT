<template>
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
  <button @click="articleCreate">Create</button>
</template>

<script>
import ArticleCreateService from "../services/ArticleCreateService";
export default {
  data() {
    return {
      title: "",
      description: "",
      content: ""
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

<style scoped></style>
