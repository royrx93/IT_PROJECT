<template>
  <Sidebar></Sidebar>
  <body>
  <h1>Homepage Management</h1>
  <section>
  <div class="border">
    <section1 >
      <p>Choose a image to show on your Home page</p>
      <input id="file" type="file" @change="onFileChanged" />
      <button @click="uploadIntroImage">Upload</button>
    </section1>
    <section2>
      <div class="intro">
        <label>Introduction</label>
        <textarea
                style="height: 200px; width: 650px;"
                v-model="introduction"
        />

      </div>
      <button @click="updateIntroduction">Update</button>
    </section2>
  </div>
    </section>
  </body>
</template>

<script>
  import Sidebar from "@/components/Sidebar";
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
        const response = await HomepageService.updateImage(
                formData
        );
        this.$router.push("/backstageHomepage");
        console.log(response);
      },

      async updateIntroduction() {
        const response = await HomepageService.updateIntroduction({
          introduction: this.introduction
        });
        this.$router.push("/backstageHomepage");
        console.log(response)
      }
    }
  };
</script>

<style scoped>
  .border {
    margin-left:250px;
    margin-right: 250px;
    background-color: rgba(25, 25, 25, 0.5);
  }
  body {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-image: url("../assets/background.jpeg");
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  button {
    margin-bottom: 10px;
    margin-top:20px;
    margin-left:40px;
    height: 30px;
    width: 100px;
    font-size: 1.1em;
    padding-right: 10px;
    padding-bottom: 40px;
    cursor: pointer;
    width: 140px;
    line-height: 38px;
    text-align: center;
    font-weight: bold;

    border-radius: 5px;

    position: relative;
    overflow: hidden;
    color: 	#505050;
    text-shadow:1px 1px 1px #fff;
    border:1px solid #dce1e6;
    box-shadow: 0 1px 2px #fff inset,0 -1px 0 #E0E0E0 inset;
    background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
    background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
    background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }

  button:hover{
    background:		#FFFFFF;


  }
  input{
    margin-top:30px;
    margin-left:80px;
    font-size:25px;
  }
  .intro{
    margin-right:-70px;
  }
  div label{
    font-size:1.8em;
    padding-right:30px;
    margin-top:70px;
    position:absolute;
  }
  textarea{
    margin-top:140px;
  }
  p{
    font-size:1.8em;
    margin-top:200px;
    margin-left:-10px;
  }
  section{
  margin-top:-200px;
  }
</style>