<template>
  <div class="about" :style ="note"></div>
  <div class="About">
    
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped="">
  .about{
  width:99.15%;
  height:100%;
  z-index:-1;
  position: absolute;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
</style>

<script>
  
  export default {

  data() {
  return {
  note: {
  backgroundImage: "url(" + require("@/assets/background.jpeg") + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundAttachment: "fixed",
  },
  }
  },
  }
</script>