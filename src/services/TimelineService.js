import Api from "@/services/Api";

export default {
  index() {
    return Api().get("timeline");
  },
  getPageinfo(params) {
    return Api().get("timeline/pageinfo", { params });
  },
  getAllInfo() {
    return Api().get("timeline/getAllInfo");
  },
  timelineUpdate(credentials) {
    return Api().post('/timeline/update',credentials);
  },
  getSubtitle() {
    return Api().get("/timeline/subtitle");
  },
  updateSubTitle(subtitle) {
    return Api().post("/timeline/updateSubTitle", subtitle);
  }
};

