<template>
  <div class="gallery" :style="note"></div>
  <h1>Gallery</h1>
  <p> -Just some pieces of my soul </p>
  <div class="waterfall-width-column">
    <div class="image-box" v-for="img in this.gallery" :key="img.id">
      <img :src="img.url" />
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
        backgroundAttachment: "scroll",
      }
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  }
};
</script>

<style lang="scss" scoped>
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
.gallery {
  width: 99.15%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
}
</style>
