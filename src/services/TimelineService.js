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
  }
};
