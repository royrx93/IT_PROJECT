<template>
  <Sidebar> </Sidebar>
  <body>
    <div class="upload">
      <div style="text-align:center">
        <p>Upload Image</p>
        <input id="file" type="file" @change="onFileChanged" />
        <div id="desc">description:</div>
        <input class="title" name="title" maxlength="50" v-model="title" />
        <button @click="uploadImage">Upload</button>
      </div>
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
      this.$router.push("/backstageGallery");
      console.log(response);
    },

    async uploadImage() {
      if (this.selectedFile == null) {
        alert("Please select a file to upload");
      };
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      formData.append("title", this.title);
      const response = await BackstageGalleryService.uploadImage(formData);
      this.$router.push("/backstageGallery");
      console.log(response);
    },

    async deleteImage(img) {
      const response = await BackstageGalleryService.deleteImage(img);
      this.$router.push("/backstageGallery");
      console.log("response: ", response.data());
    }
  }
};
</script>

<style scoped>

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
  font-size: 1.7em;
  margin-left: 60px;
  }
  li#desc{
  font-size:1.7em;
  }
  input {
  margin: 4px;
  height: 40px;
  width: 400px;
  font-size: 1.2em;
  margin-left: 100px;
  }

  button {
  margin-top:20px;
  margin-left:40px;
  height: 30px;
  width: 100px;
  font-size: 1.1em;
  padding-right: 10px;
  padding-bottom: 40px;
  cursor: pointer;
  width: 140px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;

  border-radius: 5px;

  position: relative;
  overflow: hidden;
  color: 	#505050;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #E0E0E0 inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }
  button:hover{
  background:		#FFFFFF;


  }

  .waterfall-width-column {
  column-count: 4;
  column-gap: 7px;
  margin: 25px 50px 0px 50px;
  }
  .waterfall-width-column .image-box {
  background: #fff;
  border: 2px solid #475669;
  break-inside:avoid;
  box-sizing: border-box;
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

  .upload {
  font-size: 30px;
  }
</style>
