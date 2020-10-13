<template>
  <body>
  

  <Sidebar> </Sidebar>
  <div class="upload">
    <ul>
      
      <li><p1>Upload Image</p1></li>
      <li><input id="file" type="file" @change="onFileChanged" /></li>
      <li>description:</li>
      <li><input id="title" name="title" maxlength="50" v-model="title" /></li>
      <li><button @click="uploadImage">Upload!</button></li>
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
import Sidebar from  "@/components/Sidebar";
export default {
  components:{
    Sidebar
  },

  data() {
    return {
      selectedFile: null,
      title: "",
      gallery: null,

      sidebar_icon: require("../assets/sidebar_icon.png")
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
    },


  }
};
</script>

<style lang="scss" scoped>
  body {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin:-10px;
  margin-top:130px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }

  li {
  color: #f0f0f0;

  font-size: 1.2em;
  margin-left:-60px;
  margin-bottom:30px;
  p1{
  font-size:3em;
  margin-left:60px;
  }
  }
  
  input {
  margin: 4px;
  height: 40px;
  width: 400px;
  font-size: 1.2em;
  margin-left:100px;
  }


  button {
  margin: 40px;
  height: 30px;
  width: 100px;
  font-size: 1.2em;
  }

  .waterfall-width-column {
  column-count:4;
  column-gap: 7px;
  margin: 25px 50px 0px 50px;
  .image-box {
  img {
  width: 100%;
  height: 100%;
  };
  p {
  font-size: 20px;
  color: #000;
  cursor: pointer;
  margin-top: 1px;
  margin-bottom: 5px;
  }
  background: #fff;
  border: 2px solid #475669;
  };
  }


  .upload{
  p{
  font-size: 30px;
  font-weight: 500;
  }
  #title{
  input {
  margin: 4px;
  height: 50px;
  width: 200px;
  font-size: 1.2em;
  }
  }

  }
  
</style>
