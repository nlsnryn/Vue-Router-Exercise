import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LanguageView from "../views/Language.vue";
import LanguageInfo from "../views/LanguageInfo.vue";
import NotFound from "../views/404NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/language/:id",
      name: "language",
      component: LanguageView,
      children: [
        {
          path: "information",
          component: LanguageInfo,
        },
      ],
    },
    {
      path: "/:catchall(.*)*",
      name: "404NotFound",
      component: NotFound,
    },
  ],
});

export default router;
