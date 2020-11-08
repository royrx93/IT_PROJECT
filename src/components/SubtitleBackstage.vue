<template>
<sideBar></sideBar>
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
import sideBar from "@/components/Sidebar";
import ArticleService from "@/services/ArticleService";
export default {
  components: {
    sideBar
  },
  data() {
    return {
      articleSubtitle: ""
    };
  },
  methods: {
    async updateSubTitle() {
      const response = await ArticleService.updateSubTitle({
        subtitle: this.articleSubtitle
      });
      this.$router.push("/articles");
      console.log(response);
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

</style>