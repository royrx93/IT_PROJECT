<template>
  <Sidebar> </Sidebar>
  <body>
    <h1>Gallery Management</h1>
    <div class="upload">
      <div style="text-align:center">
        <div style="margin-bottom:2px">
          <p>Upload Image</p>
          <input id="file" type="file" @change="onFileChanged" />
        </div>
        <div style="margin-top:3px">
          <p>description:</p>
          <input class="title" name="title" maxlength="50" v-model="title" />
          <button @click="uploadImage">Upload</button>
        </div>
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
      this.$router.push("/gallery");
      const response = await BackstageGalleryService.updateSubTitle({
        sub_title: this.sub_title
      });
      console.log(response);
    },

    async uploadImage() {
      if (this.selectedFile == null) {
        alert("Please select a file to upload");
      };
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      formData.append("title", this.title);
      this.$router.push("/gallery");
      const response = await BackstageGalleryService.uploadImage(formData);
      console.log(response);
    },

    async deleteImage(img) {
      this.$router.push("/gallery");
      const response = await BackstageGalleryService.deleteImage(img);
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
    height: 40px;
  width: 400px;
  font-size: 1.2em;
    margin: 4px 4px 4px 4px;
  }

  button {
  margin-top:20px;
  margin-left:40px;
    margin-bottom: 10px;
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
  font-size: 20px;
    margin: 2% 30% 10%;
    padding-top:2px;
  background-color: rgba(25, 25, 25, 0.5);
  }
  h1 {
    color: #f0f0f0;
    padding: 60px;
    font-size: 3em;
    margin-left: 70px;
    margin-top: 40px;
  }
</style>
