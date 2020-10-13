<template>

  <div>

    <HelloWorld msg="Welcome!" />
  </div>
</template>


<style scoped>
  div{
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  width:100%;
  height:auto;
  z-index:-1;
  position: absolute;
  margin:10px;
  margin-top:20px;
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

  }
  },
  };
</script>
