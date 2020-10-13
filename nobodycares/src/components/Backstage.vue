<template>
  <body>
  <div class="backstage" :style="note"></div>
  <div id="mySidenav" class="sidenav">
    <a @click="redirectToHomepage()">Homepage</a>
    <a @click="redirectToGallery()">Gallery</a>
    <a @click="redirectToArticle()">Article</a>
    <a @click="redirectToTimeline()">Timeline</a>
    
  </div>
  
 </body>
</template>

<script>
import BackstageService from "../services/BackstageService";
//import {right} from "core-js";
export default {
  data() {
    return {
      backstage: null,

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
    redirectToTimeline(){
      this.$router.replace("/timeline/add");
    },
    redirectToHomepage(){
      this.$router.replace("/backstageHomage");
    }
  }
};
</script>

<style scoped>
  .backstage {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin-left:-10px;
  
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }

  /* The side navigation menu */
  .sidenav {
  height: 100%; /* 100% Full-height */
  width: 200px; /* 0 width - change this with JavaScript */
  position: absolute; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 15%; /* Stay at the top */
  left: 0;
  background-color:rgb(20, 20, 20); /* Black*/
  opacity:80%;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  margin-top:100px;
  padding-bottom:600px;
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
