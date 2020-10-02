import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from '@/components/Register'
import TimelineAdd from "@/components/TimelineAdd";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Article from "@/components/Article";
import BackstageGallery from "@/components/BackstageGallery";
import ArticleCreate from "@/components/ArticleCreate";
import ContactMe from '@/components/ContactMe';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path:"/timeline/add",
    name:"TimelineAdd",
    component:TimelineAdd
  },
  {
    path:"/timeline",
    name:"Timeline",
    component:Timeline
  },
  {
    path:"/gallery",
    name:"Gallery",
    component:Gallery
  },
  {
    path: "/article",
    name: "Article",
    component: Article
  },

  {
    path:"/backstageGallery",
    name:"BackstageGallery",
    component:BackstageGallery
  },

  {
    path: "/article/create",
    name: "ArticleCreate",
    component: ArticleCreate

  },
  {
    path:"/contactMe",
    name: "ContactMe",
    component: ContactMe
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
