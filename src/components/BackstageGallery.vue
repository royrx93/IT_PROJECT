<template>
  <Sidebar> </Sidebar>
  <body>
    <div class="words">
      <ul style="float:left; margin-left: 200px">
        <li><p>Upload Image</p></li>
        <li><input id="file" type="file" @change="onFileChanged" /></li>
        <li>description:</li>
        <li>
          <input class="title" name="title" maxlength="50" v-model="title" />
        </li>
        <li><button @click="uploadImage">Upload</button></li>
      </ul>
      <ul style="float:right; margin-right: 200px">
        <li><p>Update the subtitle of gallery module here:</p></li>
        <li>
          <input
            class="title"
            name="sub_title"
            maxlength="50"
            v-model="sub_title"
          />
        </li>
        <li><button @click="updateSubTitle">Submit</button></li>
      </ul>
    </div>
    <div class="waterfall-width-column">
      <div class="image-box" v-for="img in this.gallery" :key="img.id">
        <img :src="img.url" />
        <p @click="deleteImage(img)">delete</p>
      </div>
    </div>
  </body>
</template>

<script>
import BackstageGalleryService from "../services/BackstageGalleryService";
import GalleryService from "../services/GalleryService";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar
  },

  data() {
    return {
      selectedFile: null,
      title: "",
      gallery: null,
      sub_title: ""
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  },

  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

    async updateSubTitle() {
      const response = await BackstageGalleryService.updateSubTitle({
        sub_title: this.sub_title
      });
      location.reload();
      console.log(response);
    },

    async uploadImage() {
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      formData.append("title", this.title);
      const response = await BackstageGalleryService.uploadImage(formData);
      location.reload();
      console.log(response);
    },

    async deleteImage(img) {
      const response = await BackstageGalleryService.deleteImage(img);
      location.reload();
      console.log("response: ", response.data());
    }
  }
};
</script>

<style scoped>
.words {
  column-count: 2;
}

body {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: -10px;
  margin-top: 130px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
}

li {
  color: #f0f0f0;

  font-size: 1.2em;
  margin-left: -60px;
  margin-bottom: 30px;
}

li p {
  font-size: 3em;
  margin-left: 60px;
}

input {
  margin: 4px;
  height: 40px;
  width: 400px;
  font-size: 1.2em;
  margin-left: 100px;
}

button {
  margin: 40px;
  height: 30px;
  width: 100px;
  font-size: 1.2em;
}

.waterfall-width-column {
  column-count: 4;
  column-gap: 7px;
  margin: 25px 50px 0px 50px;
}
.waterfall-width-column .image-box {
  background: #fff;
  border: 2px solid #475669;
}

.waterfall-width-column .image-box img {
  width: 100%;
  height: 100%;
}

.waterfall-width-column .image-box p {
  font-size: 20px;
  color: #000;
  cursor: pointer;
  margin-top: 1px;
  margin-bottom: 5px;
}

.words p {
  font-size: 30px;
  font-weight: 500;
}

.words .title input {
  margin: 4px;
  height: 50px;
  width: 200px;
  font-size: 1.2em;
}
</style>
