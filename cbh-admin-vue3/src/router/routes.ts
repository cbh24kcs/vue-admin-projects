import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/layout/default/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    meta: { title: "登录" },
  },
];
