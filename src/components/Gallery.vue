<template>
  <body>
  <div style="margin-top: 60px; font-size: 50px">Gallery</div>

  <div>
      <div style="font-size: 20px; margin-bottom: 40px; margin-left: 300px"> -- {{ subtitle }}</div>
    </div>
    
    <div class="waterfall-border">
      <div class="waterfall-width-column">
        <div class="image-box" v-for="img in this.gallery" :key="img.id" >
          <div style="clear:both">
            <img :src="img.url" />
            <p>{{ img.title }}</p>
          </div>
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
      gallery: null,
      subtitle: ""
    };
  },
  async mounted() {
    this.gallery = (await GalleryService.index()).data;
    this.subtitle = (await GalleryService.getSubtitle()).data;
  }
};
</script>

<style>
body {
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  right: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: auto;
  position: absolute;
  margin-top: 20px;
}

.waterfall-border {
  margin: 35px 35px 35px 60px;
  background-color: rgba(25, 25, 25, 0.5);
}
.waterfall-width-column {
  opacity: 1;
  column-count: 4;
  column-gap: 5px;
  margin: 35px 15px 35px 15px;
  padding: 10px;
}
.waterfall-width-column .image-box {
  margin-bottom: 5px;
  margin-top: 5px;
  border: 1px solid;
  break-inside:avoid;
  box-sizing: border-box;
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
  margin-left: 60px;
  margin-top: 40px;
}
p {
  margin-left: 50px;
  font-size: 1.2em;
}
</style>
