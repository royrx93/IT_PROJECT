<template>

  <body>


  <h1> Articles </h1>
  <div><p>-Multi-threaded thoughts</p></div>

  <div v-for="article in articles" :key="article.title">

    <div class="cardBox">
      <div><img style="width: 100%; height: 100%" :src="article.image_url" /></div>
      <div style="font-size: 5px">{{article.description}}</div>
      <router-link :to="{name :'ArticleView', params : {title : article.title}}">
          <div style="font-size: 20px">{{article.title}}</div>
      </router-link>

    </div>

  </div>
 </body>
</template>


<script>
import ArticleService from "@/services/ArticleService";
let moment = require("moment");
export default {
  data(){
    return{

      articles: null
    }
  },
  async mounted() {
    this.articles = (await ArticleService.index()).data
  },


  methods:{
    fixTime(createDate){
      createDate = moment(createDate).format('YYYY-MM-DD HH:mm')
      return createDate;
    }
  }

}

</script>

<style scoped>

  body{
  width:100%;
  height:auto;
  z-index:-1;
  position: absolute;
  margin-left:-10px;
  margin-top:20px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  margin-left:70px;
  margin-top:40px;
  }
  router-link{
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  }
  #buttons{
  background-color: #33A5FF;
  width: 60px;
  height: 25px;
  color: #FFFFFF;
  border: none;
  border-radius: 10%;
  }
  #buttons:hover {
  background: green;
  }



  .cardBox {
    width: 30%;
    margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px auto;

  }

</style>