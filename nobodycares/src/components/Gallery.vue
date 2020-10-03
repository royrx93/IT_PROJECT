<template>
  <div class="gallery" :style="note">
    <h1>Gallery</h1>
    <p> -Just some pieces of my soul </p>

    <div class="waterfall-width-column" >

      <div class="image-box" v-for="img in this.gallery" :key="img.id">

        <img :src="img.url" />
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
  width: 98.95%;
  height: 200%;
  z-index: -1;
  position: absolute;

  }
  .back {
  width: 98.95%;
  height: 150%;
  z-index: -1;
  position: absolute;

  }
  .waterfall-width-column {
  column-count: 4;
  column-gap: 5px;
  margin: 25px 50px 0px 50px;

  .image-box {
  img {

  width: 100%;
  height: 100%;
  }

  }

  }
  .bckgd {
  width: 10%;
  height: 20%;
  z-index: -1;
  position: absolute;
  margin:-50px;
  }
  h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  }
  p {

  font-size: 1.2em;
  }
</style>
