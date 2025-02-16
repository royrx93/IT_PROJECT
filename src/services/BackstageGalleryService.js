import Api from "@/services/Api";

export default {
  uploadImage(img) {
    return Api().post("/gallery", img);
  },
  uploadHomepage(img) {
    return Api().post("/gallery/homepage", img);
  },
  deleteImage(img) {
    return Api().post("/gallery/delete", img);
  },
  updateSubTitle(subtitle) {
    return Api().post("/gallery/updateSubTitle", subtitle);
  }
};
