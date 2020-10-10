<template>
  <div class="articles" :style ="note"></div>
  <h1> Articles </h1>
  <div><p>-Multi-threaded thoughts</p></div>

  <div v-for="article in articles" :key="article.title">

    <div class="cardBox">

      <div style="font-size: 20px">{{article.title}}</div>

      <div style="font-size: 5px">{{fixTime(article.createDate)}}</div>

      <router-link :to="{name :'ArticleView', params : {title : article.title}}">

        <button type="button" class="btn" id = 'buttons'>
          view
        </button>
      </router-link>

    </div>

  </div>
</template>


<script>
import ArticleService from "@/services/ArticleService";
let moment = require("moment");
export default {
  data(){
    return{
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      },
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
  .articles{
  width:100.1%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin-left:-10px;
  margin-top:-80px;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  margin-top:-60px;
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
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin: 0px auto;
    padding: 15px 5px 5px 15px;
  }

</style>