<template>
  <div class="bsgallery" :style="note"></div>
  <p>Upload Image</p>
  <input type="file" @change="onFileChanged" />
  description: <input name="title" v-model="title" />
  <button @click="uploadImage">Upload!</button>

  <div class="waterfall-width-column">
    <div class="image-box" v-for="img in this.gallery" :key="img.id">
      <img :src="img.url" />
      <p @click="deleteImage(img)">delete</p>
    </div>
  </div>

</template>

<script>
import BackstageGalleryService from "../services/BackstageGalleryService";
import GalleryService from "../services/GalleryService";

export default {
  data() {
    return {
      selectedFile: null,
      title: "",
      gallery: null,
      note: {
            backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundAttachment: "fixed",
            },
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  },

  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

    async uploadImage() {
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      formData.append("title", this.title);
      const response = await BackstageGalleryService.uploadImage(formData);
      console.log(response);
    },

    async deleteImage(img) {
      const response = await BackstageGalleryService.deleteImage(img);
      console.log("response: ", response.data());
    }
  }
};
</script>

<style lang="scss" scoped>
.bsgallery {
  width: 98.95%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
}
input {
  margin: 4px;
  height: 40px;
  width: 400px;
  font-size: 1.2em;
}
button {
  margin: 40px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
}
p {
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
    }
.waterfall-width-column {
  column-count: 5;
  column-gap: 5px;
  margin: 25px 50px 0px 50px;
  .image-box {
    img {
      width: 200px;
      height: 200px;
    };
    p {
      font-size: 20px;
      colour: #000;
      border: 2px solid #475669;
      padding: 5px 5px 5px 5px;
    }
    border: 5px solid #ddd;
    padding: 5px;
    background: #fff;
  };
}
</style>
