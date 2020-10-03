<template>
  <div class="gallery" :style="note"></div>
  <h1>Gallery</h1>
  <p>-Just some pieces of my soul</p>
  <div class="back" :style="note"></div>
  <div class="waterfall-width-column">
    <div class="image-box" v-for="img in this.gallery" :key="img.id">
      <div class="bckgd" :style="note"></div>
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
        backgroundAttachment: "fixed"
      }
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 120%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: -10px;
}
.back {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: -10px;
}
.title {
  font-size: 40px;
}
.bckgd {
  width: 100%;
  height: 105%;
  z-index: -1;
  position: absolute;
  margin: -506px;
}
.waterfall-width-column {
  column-count: 4;
  column-gap: 5px;
  margin: 25px 50px 100px 50px;
  .image-box {
    border: 2px solid #475669;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      margin-top: 1px;
      margin-bottom: 7px;
    }
    margin-bottom: 10px;
  }
}
h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-left: 50px;
}
p {
  margin-left: 50px;
  font-size: 1.2em;
}
</style>
