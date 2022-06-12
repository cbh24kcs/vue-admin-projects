import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
    children: [
      {
        path: "/home/menu",
        component: () => import("@/views/menu/index.vue"),
      },
    ],
  },
  {
    path: "/test",
    component: () => import("@/pages/test/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
