<template>
  <div class="bsgallery" :style ="note"></div>
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
      title: "",
      note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                   },
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

<style scoped>
  .bsgallery{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;
  }
  H1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
  input{
  margin: 4px;
  height:40px;
  width: 400px;
  font-size: 1.2em;
  }
  button{
  margin: 40px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  }
</style>
