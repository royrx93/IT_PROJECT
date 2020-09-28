<template>
  <H1>Upload Image</H1>
  <input type="file" @change="onFileChanged" />
  description: <input name="title" v-model="title" />
  <button @click="uploadImage">Upload!</button>
</template>

<script>
import BackstageGalleryService from "../services/BackstageGalleryService";

export default {
  data() {
    return {
      selectedFile: null,
      title: ""
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

    async uploadImage() {
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      //formData.append("title", this.title);
      console.log("form");
      console.log(formData);
      const response = await BackstageGalleryService.uploadImage(formData);
      console.log("response: ", response.data());
    }
  }
};
</script>

<style scoped></style>
