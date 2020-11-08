<template>
<SideBar></SideBar>
  <h1>Subtitle Management</h1>

  <div>
    <button v-text="btnText" @click="showToggle"></button>
    <div style="background: rgba(25,25,25,.5)" v-show="isShow">
      <div style="margin-bottom: 10px">
        <input id="subtitle" class="title" name="title" v-model="articleSubtitle" />
      </div>
    </div>
  </div>

</template>
<script>
import sideBar from "@/components/Sidebar";
export default {
  data () {
    return {
      isShow: false,
      btnText: "Article Subtitle",
      articleSubtitle: "",
    };
  },
  components: {
    sideBar
  },

  methods:{
    showToggle(){
      this.isShow = !this.isShow
      if(this.isShow){
        this.btnText = "Modify Article Subtitle"
      }else{
        this.btnText = "Article Subtitle"
      }
    }
  }
};
</script>

<style scoped>

</style>