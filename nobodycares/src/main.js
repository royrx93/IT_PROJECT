import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

createApp(App)
  .use(store)
  .use(router)
    .use(VueFroala)
  .mount("#app");