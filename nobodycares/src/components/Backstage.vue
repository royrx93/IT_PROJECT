<template>
  <div class="backstage" :style="note"></div>
  <div id="mySidenav" class="sidenav">
    <a @click="redirectToGallery()">Gallery</a>
    <a @click="redirectToArticle()">Article</a>
  </div>
</template>

<script>
import BackstageService from "../services/BackstageService";
//import {right} from "core-js";
export default {
  data() {
    return {
      backstage: null,
      note: {
            backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundAttachment: "fixed",
            },
    };
  },
  async mounted() {
    this.backstage = (await BackstageService.index()).data;
  },
  methods: {
    redirectToGallery() {
      this.$router.replace("/backstageGallery");
    },
    redirectToArticle() {
      this.$router.replace("/article");
    },
  }
};
</script>

<style scoped>
.backstage {
  width: 98.95%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
/* The side navigation menu */
.sidenav {
  height: 50%; /* 100% Full-height */
  width: 200px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
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
</style>
