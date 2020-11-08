<template>
  <Sidebar></Sidebar>

  <input id="file" type="file" @change="onFileChanged" />
  <button @click="uploadIntroImage">Upload</button>
  <div>
    <label>Introduction:</label>
    <textarea
      style="height: 200px; width: 650px;"
      type="text"
      name="string"
      v-model="introduction"
    />

  </div>
  <button @click="updateIntroduction">Update</button>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import BackstageHomepageService from "../services/BackstageHomepage";
import HomepageService from "../services/HomepageService";
export default {
  components: {
    Sidebar
  },

  data() {
    return {
      selectedFile: null,
      introduction: "",
      homepage: null
    };
  },
  async mounted() {
    this.homepage = (await HomepageService.index()).data;
    this.introduction = this.homepage[0].introduction;
  },

  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

    async uploadIntroImage() {
      const formData = new FormData();
      formData.append("myFile", this.selectedFile);
      const response = await BackstageHomepageService.uploadIntroImage(
        formData
      );
      location.reload();
      console.log(response);
    },

    async updateIntroduction() {
      /*if (this.introduction.length > 1023) {
        alert("Introduction Characters Limit 1023");
      }*/
      const response = await BackstageHomepageService.updateIntroduction({
        introduction: this.introduction
      });
      console.log(response)
    }
  }
};
</script>

<style scoped>

</style>
