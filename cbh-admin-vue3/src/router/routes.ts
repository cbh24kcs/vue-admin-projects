import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/login",
    component: () => import("@/pages/Login/index.vue"),
    meta: { title: "登录" },
  },
];
