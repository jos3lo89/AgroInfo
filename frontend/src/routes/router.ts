import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        isAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        isAuth: true,
      },
    },
  ],
});

export default router;
