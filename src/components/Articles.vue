<template>
  <body>
    <h1>Articles</h1>

    <div>
      <div style="font-size: 30px; margin-bottom: 40px">{{ subtitle }}</div>
    </div>

    <div class="border">
      <div v-for="article in articles" :key="article.title">
        <div class="cardBox">
          <img style="width: 100%; height: 100%;" :src="article.image_url" />
          <div style="font-size: 16px;">{{ article.description }}</div>
          <router-link
            :to="{ name: 'ArticleView', params: { title: article.title } }"
            style="text-decoration: none "
          >
            <div
              style="font-size: 20px; color: whitesmoke; text-decoration: none"
            >
              {{ article.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import ArticleService from "@/services/ArticleService";
let moment = require("moment");
export default {
  data() {
    return {
      articles: null,
      subtitle: ""
    };
  },
  async mounted() {
    this.articles = (await ArticleService.index()).data;
    for (var i = 0; i < this.articles.length; i++) {
      if (this.articles[i].image_url == null) {
        this.articles[i].image_url =
          "http://res.cloudinary.com/zjz/image/upload/v1601721278/ypbbzb3rtaurlhjbzgln.jpg";
      }
    }
    this.subtitle = (await ArticleService.getSubtitle()).data;
    console.log(this.subtitle);
  },

  methods: {
    fixTime(createDate) {
      createDate = moment(createDate).format("YYYY-MM-DD HH:mm");
      return createDate;
    }
  }
};
</script>

<style scoped>
body {
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;
  margin-left: -10px;
  margin-top: 20px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
}
h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-left: 70px;
  margin-top: 40px;
}
router-link {
  margin: 60px;
  height: 60px;
  width: 200px;
  font-size: 1.2em;
  text-decoration: none;
}
.border {
  column-count: 2;
  margin: 0px auto;
}

.cardBox {
  height: 90%;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 4px;
  margin: 0px auto;
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
