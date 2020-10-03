<template>
  <div class="bsgallery" :style="note"></div>
  <div class="sideicon">
    <img :src="sidebar_icon" @click="openNav()" />
  </div>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <a @click="redirectToHomepage()">Homepage</a>
    <a @click="redirectToGallery()">Gallery</a>
    <a @click="redirectToArticle()">Article</a>
    <a @click="redirectToTimeline()">Timeline</a>
  </div>

  <div class="upload">
    <ul>
      <li><p>Upload Image</p></li>
      <li><input id="file" type="file" @change="onFileChanged" /></li>
      <li id="description">description:</li>
      <li><input id="title" name="title" maxlength="50" v-model="title" /></li>
      <li><button @click="uploadImage">Upload!</button></li>
    </ul>
  </div>

  <div class="bsgallery" :style="note"></div>
  <div class="waterfall-width-column">
    <div class="image-box" v-for="img in this.gallery" :key="img.id">
      <div class="bs" :style="note"></div>
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
        backgroundAttachment: "fixed"
      },
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

    redirectToGallery() {
      this.$router.replace("/backstageGallery");
    },
    redirectToArticle() {
      this.$router.replace("/article");
    },
    redirectToTimeline(){
      this.$router.replace("/backstageTimeline");
    },
    redirectToHomepage(){
      this.$router.replace("/backstageHomage");
    },
    /* Set the width of the side navigation to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "150px";
    },
    /* Set the width of the side navigation to 0 */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
  .bsgallery {
  width: 120%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin:-10px;
  }
  .bs {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin:-70px;
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

/* The side navigation menu */
  /* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */
    width: 200px; /* 0 width - change this with JavaScript */
    position: absolute; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 15%; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }
  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    cursor: pointer;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.sideicon {
  position: absolute;
  left:20px;
  top: 150px;
  img{
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
}

.upload{
  p{
    font-size: 30px;
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
