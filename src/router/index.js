import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";
import Register from "@/components/Register";
import TimelineAdd from "@/components/TimelineAdd";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Article from "@/components/Article";
import BackstageGallery from "@/components/BackstageGallery";
import ArticleCreate from "@/components/ArticleCreate";
import ContactMe from "@/components/ContactMe";
import Backstage from "@/components/Backstage";
import ArticleView from "@/components/ArticleView";
import Articles from "@/components/Articles";
import ArticleUpdate from "@/components/ArticleUpdate";
import HomepageBackstage from "@/components/HomeBackstage";
import TimelineBackstage from "../components/TimelineBackstage";
import login from "../components/login.vue";
import logout from "../components/logout.vue";
import store from "../store";
import backstageSubtitle from "../components/SubtitleBackstage";
import timelineUpdate from "../components/TimelineUpdate"

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
    path: "/timeline/add",
    name: "TimelineAdd",
    component: TimelineAdd
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/article",
    name: "Article",
    component: Article
  },
  {
    path: "/article/create",
    name: "ArticleCreate",
    component: ArticleCreate
  },
  {
    path: "/article/delete",
    name: "ArticleDelete",
    component: Article
  },
  {
    path: "/contactMe",
    name: "ContactMe",
    component: ContactMe
  },
  {
    path: "/backstage",
    name: "Backstage",
    component: Backstage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/backstageGallery",
    name: "BackstageGallery",
    component: BackstageGallery
  },
  {
    path: "/articles/view/:title",
    name: "ArticleView",
    component: ArticleView
  },
  {
    path: "/article/update/:title",
    name: "ArticleUpdate",
    component: ArticleUpdate
  },

  {
    path: "/articles",
    name: "Articles",
    component: Articles
  },
  {
    path: "/backstageTimeline",
    name: "TimelineBackstage",
    component: TimelineBackstage
  },
  {
    path: "/timeline/delete",
    name: "TimelineDelete",
    component: TimelineBackstage
  },

  {
    path: "/login",
    name: "login",
    component: login
  },

  {
    path:"/logout",
    name: "logout",
    component: logout
  },

  {
    path: "/backstageSubtitle",
    name: "backstageSubtitle",
    component: backstageSubtitle
  },
  {
    path: "/timeline/update/:ID",
    name: "TimelineUpdate",
    component: timelineUpdate

  },

  {
    path: "/backstageHomepage",
    name: "backstageHomepage",
    component: HomepageBackstage

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth & !store.state.userLogin) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
