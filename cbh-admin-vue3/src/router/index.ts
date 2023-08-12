import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import { useTitle } from "@vueuse/core";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    useTitle(to.meta.title + " | 陈哥の管理系统");
  } else {
    useTitle("陈哥の管理系统");
  }

  next();
});
