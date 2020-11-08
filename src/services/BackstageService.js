import Api from "@/services/Api";

export default {
  verify(token) {
    return Api().get("/backstage",token);
  }
};
