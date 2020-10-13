<template>

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

  .cardBox {
    width: 30%;
    margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px auto;
  }

</style>