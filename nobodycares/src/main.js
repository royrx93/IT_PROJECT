import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "viewerjs/dist/viewer.css";

import VueDirectiveImagePreviewer from "vue-directive-image-previewer";
import "vue-directive-image-previewer/dist/assets/style.css";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
App.use(VueDirectiveImagePreviewer);
