import Api from "@/services/Api";

export default {
  articleView(credentials) {
    return Api().get("/article/viewArticle", credentials);
  }
};
