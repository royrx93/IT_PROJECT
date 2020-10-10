<template>
  <div class="sideicon">
    <img :src="sidebar_icon" @click="openNav()" />
  </div>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
      >&times;</a
    >
    <a @click="redirectToHomepage()">Homepage</a>
    <a @click="redirectToGallery()">Gallery</a>
    <a @click="redirectToArticle()">Article</a>
    <a @click="redirectToTimeline()">Timeline</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sidebar_icon: require("../assets/sidebar_icon.png")
        };
    },
  methods: {
    redirectToGallery() {
      this.$router.replace("/backstageGallery");
    },
    redirectToArticle() {
      this.$router.replace("/article");
    },
    redirectToTimeline() {
      this.$router.replace("/backstageTimeline");
    },
    redirectToHomepage() {
      this.$router.replace("/backstageHomage");
    },
    /* Set the width of the side navigation to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "150px";
    },
    /* Set the width of the side navigation to 0 */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style scoped>
    /* The side navigation menu */
    /* The side navigation menu */
    .sidenav {
        height: 70%; /* 100% Full-height */
        width: 150px; /* 0 width - change this with JavaScript */
        position: absolute; /* Stay in place */
        z-index: 1; /* Stay on top */
        top: 15%; /* Stay at the top */
        left: 0;
        background-color: rgb(30, 30, 30); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    }
    /* The navigation menu links */
    .sidenav a {
        padding: 8px 8px 8px 8px;
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
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    .sideicon {
        position: absolute;
        left:20px;
        top: 150px;
    img{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
    }
</style>
