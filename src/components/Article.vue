<template>
  <body>
    <h1>Articles Management</h1>

    <sideBar></sideBar>

    <div style="margin-bottom: 40px">
      <div style="margin-bottom: 10px; font-size: 20px">Update Subtitle</div>
      <div style="margin-bottom: 10px">
        <input id="subtitle" class="title" name="title" v-model="subtitle" />
      </div>
      <div>
        <button id="updateSubtitle" @click="updateSubTitle">Submit</button>
      </div>
    </div>

    <div class="border">
      <div v-for="article in articles" :key="article.title">
        <div class="cardBox">
          <img
            style="width: 100%; height: 100%; margin-top: 10px"
            :src="article.image_url"
          />
          <router-link
            :to="{ name: 'ArticleView', params: { title: article.title } }"
            style="text-decoration: none"
          >
            <div style="font-size: 20px; color: whitesmoke">
              {{ article.title }}
            </div>
          </router-link>
          <button id="delete" @click="remove(article)">Delete</button>
          <router-link
            :to="{ name: 'ArticleUpdate', params: { title: article.title } }"
          >
            <button id="update">update</button>
          </router-link>
        </div>
      </div>
    </div>

    <br />
    <div>
      <router-link to="/article/create">
        <button class="buttons">+</button>
      </router-link>
    </div>
  </body>
</template>

<script>
import ArticleService from "@/services/ArticleService";
import ArticleDeleteService from "@/services/ArticleDeleteService";
import sideBar from "@/components/Sidebar";
export default {
  components: {
    sideBar
  },
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
  },

  methods: {
    async remove(article) {
      const r = confirm("DELETE THIS ARTICLE?");
      if (r == true) {
        const response = await ArticleDeleteService.articleDelete(article);
        location.reload();
        console.log(response.data());
      }
    },

    async updateSubTitle() {
      const response = await ArticleService.updateSubTitle({
        subtitle: this.subtitle
      });
      location.reload();
      console.log(response);
    }
  }
};
</script>

<style scoped>
body {
  width: 100.1%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin-left: -10px;

  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
}

h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-top: 70px;
  margin-left: 80px;
}

p {
  font-size: 1.2em;
}

.cardBox {
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  float: left;
  margin-left: 20px;
  padding: 15px 5px 5px;
}
#delete {
  background-color: #33a5ff;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border: none;
  margin-right: 10px;
  border-radius: 10%;
}
#delete:hover {
  background: #4f4f4f;
}

#update {
  background-color: #33a5ff;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border: none;
  border-radius: 10%;
}
#update:hover {
  background: #339900;
}

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

.buttons {
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 50px;
  z-index: 9999;
  width: 75px;
  height: 75px;
  background-color: #33a5ff;
  border-radius: 50%;
  margin: 1px;
  border: none;
  font-size: 50px;
  color: white;
}

.buttons:hover {
  background: #3366ff;
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
