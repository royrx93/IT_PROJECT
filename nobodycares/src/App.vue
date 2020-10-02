<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/timeline/add">TimelineAdd</router-link> |
    <router-link to="/timeline">Timeline</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/backstage">Backstage</router-link> |
    <router-link to="/article">articles</router-link> |
    <router-link to="/backstageGallery">BackstageGallery</router-link> |
    <router-link to="/contactMe">ContactMe</router-link> 

  </div>
  <router-view />
</template>

<style lang="scss">
  #app {
  font-family: "Comic Sans MS", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F0F0F0;
  }

  #nav {
  padding: 30px;
  background-color:rgb(30,30,30);
  font-size:1.2em;
  letter-spacing: 3px;
  word-spacing:3px;

  a {
  font-weight: bold;
  color: #C0C0C0;
  text-decoration:none;


  &.router-link-exact-active {
      color: white;
    }
  }
}
</style>

