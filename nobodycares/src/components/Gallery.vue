<template>
  <body>
    <h1>Gallery</h1>
    <p>-Just some pieces of my soul</p>
    <div class="waterfall-border">
      <div class="waterfall-width-column">
        <div class="image-box" v-for="img in this.gallery" :key="img.id">
          <img :src="img.url" />
          <p> {{img.title}}</p>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import GalleryService from "../services/GalleryService";

export default {
  data: function() {
    return {
      gallery: null
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
  }
};
</script>

<style>
body {
  background-image: url("../assets/background.jpeg");
    background-repeat: repeat;
    background-attachment: scroll;
  right: 0;
  top: 0;
    z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
}

.waterfall-border {
  margin: 35px 35px 35px 35px;
  background-color: rgba(125, 125, 125, 0.7);
}
.waterfall-width-column {
  opacity: 1;
  column-count: 4;
  column-gap: 5px;
  margin:  35px 15px 35px 15px;
  padding: 10px;
}
.waterfall-width-column .image-box {
  margin-bottom: 5px;
  margin-top: 5px;
  border: 1px solid;
}

.waterfall-width-column .image-box img {
  width: 80%;
  height: 80%;
}
.waterfall-width-column .image-box p {
  margin: 1px 1px 1px 1px;
  font-size: 17px;
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
