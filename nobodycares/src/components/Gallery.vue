<template>
  <div class="gallery" :style="note">
    <h1>Gallery</h1>
    <p> -Just some pieces of my soul </p>
    <div class="back" :style="note"></div>
      <div class="waterfall-border">
    <div class="waterfall-width-column" >
      
     <div class="image-box" v-for="img in this.gallery" :key="img.id">
       <div class="bckgd" :style="note"></div>
       <img :src="img.url" />
       
     </div>
      
   </div>
      </div>
 </div>
</template>
<script>
  import GalleryService from "../services/GalleryService";

  export default {
  data: function() {
  return {
  gallery: null,
  note: {
  backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundAttachment: "fixed",
  }
  };
  },
  async mounted() {
  this.gallery = (await GalleryService.index()).data;
  }
  };
</script>

<style lang="scss" >
  .gallery {
  width: 100.1%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin:-10px;

  }
  .back {
  width: 100.1%;
  height: 120%;
  z-index: -1;
  position: absolute;
  margin:-2px;

  }
  .waterfall-border{
      margin: 25px 35px 35px 35px;
      background-color: rgba(125,125,125,0.7);
  }
    .waterfall-width-column {
        opacity:1;
  column-count: 4;
  column-gap: 5px;
      margin: 25px 15px 35px 15px;
      padding: 10px;
  .image-box {
      margin-bottom: 5px;
      margin-top: 5px;
      border: 2px solid gray;
          img {
              width: 100%;
              height: 100%;
          }
      }
  }
  .bckgd {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  margin:-300px;
  }
  h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-left:50px;
  }
  p {
  margin-left:50px;
  font-size: 1.2em;
  }
</style>
