<template>

  <div class="home" :style ="note">

    <HelloWorld msg="Welcome!" />
  </div>
</template>


<style scoped>
  .home{
  width:100%;
  height:100%;  
  z-index:-1;
  position: absolute;
  }
  
</style>


<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
  name: "Home",
  components: {
  HelloWorld
  },
  data() {
  return {
  note: {
  backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundAttachment: "fixed",
  },
  }
  },
  };
</script>
