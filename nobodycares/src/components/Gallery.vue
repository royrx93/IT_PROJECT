<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <h1>Gallery</h1>
      <p>- Just some pieces of my soul</p>
      <div id = "container">
        <div class = "card" v-for="image in gallery" :key="image.id">
          <img :src= "image.url">
          {{image.title}}
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import GalleryService from "../services/GalleryService";


export default {
  data: function () {
    return {
      gallery: null
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  }
};
</script>

<style scoped>
  /*#container {
    columns: 4;
    .card {
      overflow: hidden;
      position: relative;
      border: 1px solid #ccc;
      break-inside:avoid;
      padding: 0.6rem;
        img {
          max-height: 500px;
          height: 70%;
          width: auto;
        }
    }
}*/

</style>
