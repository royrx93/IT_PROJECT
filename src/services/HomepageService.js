import Api from "@/services/Api";

export default {
    index() {
        return Api().get("/");
    },
    getHomepage() {
        return Api().get("/getHomepage");
    },
    updateIntroduction(intro) {
        return Api().post("/updateIntroduction", intro);
    },
    updateImage(img) {
        return Api().post("/updateImage", img);
    },
};
