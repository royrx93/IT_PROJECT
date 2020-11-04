import Api from "@/services/Api";

export default {
  articleCreate(credentials) {
    return Api().post("/article/createArticle", credentials);
  }
};
