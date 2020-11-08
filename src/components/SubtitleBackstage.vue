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
    <a @click="redirectToSubtitle()">Subtitle</a>

  </div>

  <h1>Subtitle Management</h1>


  <div style="margin-bottom: 40px">
    <div style="margin-bottom: 10px; font-size: 20px">Update Subtitle</div>
    <div style="margin-bottom: 10px">
      <input id="subtitle" class="title" name="title" v-model="articleSubtitle" />
    </div>
    <div>
      <button id="updateSubtitle" @click="updateSubTitle">Submit</button>
    </div>
  </div>


</template>
<script>

import ArticleService from "@/services/ArticleService";
export default {
  data() {
    return {
      articleSubtitle: "",
      sidebar_icon: require("../assets/sidebar_icon.png")
    };
  },
  methods: {
    async updateSubTitle() {
      const response = await ArticleService.updateSubTitle({
        subtitle: this.articleSubtitle
      });
      this.$router.push("/articles");
      console.log(response);
    },
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
      this.$router.replace("/backstageHomepage");
    },
    redirectToSubtitle(){
      this.$router.replace("/backstageSubtitle")
    },
    /* Set the width of the side navigation to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "180px";
    },
    /* Set the width of the side navigation to 0 */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style scoped>
#updateSubtitle {
  background-color: #33a5ff;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border: none;
  border-radius: 10%;
}
#updateSubtitle:hover {
  background: #339900;
}
#subtitle {
  background: grey;
  border: none;
  border-radius: 5px;
  height: 25px;
  width: 300px;
}

#subtitle:focus {
  background: whitesmoke;
}
.sidenav {
  height: 100%;
  width: 180px;
  position: absolute;
  z-index: 999;
  top: 10%;
  left: 0;
  background-color: rgb(20, 20, 20);
  opacity: 80%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 60px;
  transition: 0.5s;
  margin-top: 60px;
  padding-bottom: 600px;
}

.sidenav a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 36px;
  margin-left: 75px;
}

.sideicon {
  position: absolute;
  left: 35px;
  top: 75px;
}

.sideicon img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

</style>