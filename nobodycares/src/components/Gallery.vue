
<template>
  <div class="gallery" :style ="note"></div>
    <h1>Gallery</h1>
    <div class="waterfall-width-column">
        <div class="image-box" v-for="img in this.gallery" :key="img.id">
            <img :src="img.url" />
            {{img.title}}
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
                   },
    };
  },
  async mounted() {
      this.gallery = (await GalleryService.index()).data;
    }
};
</script>

<style lang="scss" scoped>
    .waterfall-width-column {
        column-count: 3;
  column-gap: 10px;
  .image-box {
    img {
        display: block;
        width: 100%;
        height: 70%;
    }
        }
    }
  .gallery{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
</style>
