<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/timeline">Timeline</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/articles">Articles</router-link> 
    <a1 v-if="$store.state.userLogin"> | </a1>
    <router-link to="/login" v-if="$store.state.userLogin">Logout</router-link>
    <a1 v-if="!$store.state.userLogin"> | </a1>
    <router-link to="/login" v-if="!$store.state.userLogin">Login</router-link>
    <a1 v-if="$store.state.userLogin"> | </a1>
    <router-link to="/backstage" v-if="$store.state.userLogin">Backstage</router-link> |
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
  color: #f0f0f0;
}

#nav {
  width: auto;
  padding: 30px;
  background-color: rgb(10, 10, 10);
  font-size: 1.2em;
  letter-spacing: 3px;
  word-spacing: 10px;
  margin: -20px;
  position: relative;
  opacity: 0.6;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    overflow: scroll;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
