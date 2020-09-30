<template>
  <div class="backstage" :style ="note"></div>
</template>

<script>
    import BackstageService from "../services/BackstageService";

    export default {
        data(){
            return{
                backstage: null,
                 note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                   },
            }
        },
        async mounted(){
            this.backstage = (await BackstageService.index()).data
        }
    }
</script>

<style scoped>
  .backstage{
  width:99.15%;
  height:100%;
  z-index:-1;
  position: absolute;
  }
</style>