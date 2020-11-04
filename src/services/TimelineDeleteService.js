import Api from "@/services/Api";

export default {
  TimelineDelete(credentials) {
    return Api().post("/timeline/delete", credentials);
  }
};
