<template>
  <body>
  
  <h1>Update Article</h1>
  <label>Title:</label>
  <input
      style="height: 40px; width: 650px;"
      disabled
      type="text"
      name="string"
      v-model="title"
  >
  <div>
    <label>Description:</label>
    <input
        style="height: 40px; width: 650px;margin-top: 10px;"
        type="text"
        name="description"
        v-model="description"
    >
  </div>

  <div>
    <label>Content:</label>
    <textarea
        style="height: 200px; width: 650px;"
        type="text"
        name="string"
        v-model="content"
    ></textarea>
  </div>


  <button class="buttons" @click="articleUpdate">update</button>

  <div>
    <button class="returnButtons" @click="goBack">
      back
    </button>
  </div>

 </body>
</template>

<script>
import ArticleService from "@/services/ArticleService";
import ArticleUpdateService from "@/services/ArticleUpdateService";
export default {
  data(){
    return {
      title: this.$route.params.title,
      description: "",
      content: "",

      articles: null,

    }
  },

  async mounted() {
    this.articles = (await ArticleService.index()).data
    for(var i = 0; i < this.articles.length; i++){
      if (this.articles[i].title == this.$route.params.title){
        this.description = this.articles[i].description;
        this.content = this.articles[i].content
      }
    }
  },


  methods:{
    async articleUpdate() {

      if(!this.title){
        alert("please fill in the title")
      }else if(!this.content){
        alert("please fill in the content")
      }else if(this.title.length > 49){
        alert("Title Word Limit 50")
      }else if(this.description.length > 199) {
        alert("Description Word Limit 200")
      } else if(this.content.length > 499){
        alert("Content Word Limit 500")
      } else {
        const response = await ArticleUpdateService.articleUpdate({
          title: this.title,
          description: this.description,
          content: this.content
        });
        console.log(response.data());
      }
    },

    goBack(){
      this.$router.go(-1);
    }
  }

}

</script>

<style scoped>
  body{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;

  margin:-10px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  margin-top:100px;
  margin-left:20px;
  }
  router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }


  label{
  cursor: pointer;
  display: inline-block;
  padding: 3px 6px;
  text-align: right;
  width: 150px;
  vertical-align: top;
  margin-left:-100px;
  }

  textarea{
  margin: 8px;
  height:60px;
  width: 600px;
  font-size: 1.2em;
  }

  .buttons{
  width: 100px;
  height: 50px;
  border: none;
  background: #33A5FF;
  font-size: 20px;
  color: white;
  border-radius: 10%;
  }

  .buttons:hover {
  background: #3366FF;
  }

  .returnButtons{
  position:fixed;
  left: 10px;
  top: 50%;
  height: 50px;
  z-index:9999;
  width: 75px;
  height: 35px;
  background-color: #33A5FF;
  border-radius: 10%;
  margin: 1px;
  border: none;
  font-size: 20px;
  color: white;
  }

  .returnButtons:hover{
  background: #3366FF;
  }
</style>