
<template>
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
</style>
