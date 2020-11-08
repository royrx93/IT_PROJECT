import Api from "@/services/Api";

export default {
    uploadIntroImage(img) {
        return Api().post("/homepage/uploadImage", img);
    },
    updateIntroduction(introduction) {
        return Api().post("/homepage/updateIntroduction", introduction);
    },

};
